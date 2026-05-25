const { invoke } = window.__TAURI__.core;

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

let toastTimer = null;
let currentWindow = null;
let originW = 0, originH = 0, originX = 0, originY = 0;
let originSaved = false;
let currentPct = 100;

function esc(str) {
  var el = document.createElement("span");
  el.textContent = str;
  return el.innerHTML;
}

// ===== Toast =====

function showToast(msg, type = "success") {
  let el = $(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.className = "toast " + type + " show";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { el.classList.remove("show"); }, 2000);
}

// ===== Tabs =====

function initTabs() {
  $$(".tab-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      $$(".tab-btn").forEach(function (b) { b.classList.remove("active"); });
      $$(".tab-content").forEach(function (c) { c.classList.remove("active"); });
      btn.classList.add("active");
      var tab = document.getElementById("tab-" + btn.dataset.tab);
      if (tab) tab.classList.add("active");
    });
  });
}

// ===== Seed History =====

var MAX_HISTORY = 30;
var _seedHistoryCache = null;

async function loadSeedHistory() {
  if (_seedHistoryCache !== null) return _seedHistoryCache;
  try {
    var json = await invoke("load_seed_history");
    _seedHistoryCache = JSON.parse(json) || [];
  } catch (e) { _seedHistoryCache = []; }
  return _seedHistoryCache;
}

async function saveSeedHistory(history) {
  _seedHistoryCache = history;
  await invoke("save_seed_history", { json: JSON.stringify(history) });
}

async function addSeedToHistory(seed, deck, stake, version) {
  if (!seed) return;
  var history = await loadSeedHistory();
  var entry = { seed: seed, deck: deck, stake: stake, version: version, time: Date.now() };
  var existing = history.findIndex(function (h) { return h.seed === seed && h.deck === deck && h.stake === stake; });
  if (existing >= 0) history.splice(existing, 1);
  history.unshift(entry);
  if (history.length > MAX_HISTORY) history = history.slice(0, MAX_HISTORY);
  await saveSeedHistory(history);
  renderSeedHistory();
}

async function removeSeedFromHistory(index) {
  var history = await loadSeedHistory();
  history.splice(index, 1);
  await saveSeedHistory(history);
  renderSeedHistory();
}

async function clearSeedHistory() {
  await saveSeedHistory([]);
  renderSeedHistory();
}

var DECK_SHORT = {
  "Red Deck": "红色", "Blue Deck": "蓝色", "Yellow Deck": "黄色", "Green Deck": "绿色",
  "Black Deck": "黑色", "Magic Deck": "魔法", "Nebula Deck": "星云", "Ghost Deck": "幽灵",
  "Abandoned Deck": "废弃", "Checkered Deck": "方格", "Zodiac Deck": "黄道", "Painted Deck": "彩绘",
  "Anaglyph Deck": "浮雕", "Plasma Deck": "等离子", "Erratic Deck": "古怪"
};

async function renderSeedHistory() {
  var el = document.getElementById("seed-history");
  var history = await loadSeedHistory();
  if (!history || history.length === 0) {
    el.innerHTML = '<p class="empty-tip" style="padding:16px 0">暂无历史</p>';
    return;
  }
  el.innerHTML = history.map(function (h, i) {
    var deckLabel = DECK_SHORT[h.deck] || h.deck;
    var d = new Date(h.time);
    var timeStr = (d.getMonth() + 1) + "/" + d.getDate() + " " + d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");
    return '<div class="history-item" data-index="' + i + '">' +
      '<button class="history-del" data-idx="' + i + '">&times;</button>' +
      '<div class="history-seed">' + esc(h.seed) + '</div>' +
      '<div class="history-meta"><span>' + esc(deckLabel) + '</span><span>' + esc(timeStr) + '</span></div>' +
      '</div>';
  }).join("");

  el.querySelectorAll(".history-item").forEach(function (item) {
    item.addEventListener("click", function (e) {
      if (e.target.classList.contains("history-del")) return;
      var idx = parseInt(item.dataset.index);
      var h = _seedHistoryCache ? _seedHistoryCache[idx] : null;
      if (!h) return;
      document.getElementById("seed").value = h.seed;
      document.getElementById("deck").value = h.deck;
      document.getElementById("stake").value = h.stake;
      document.getElementById("version").value = h.version;
    });
  });

  el.querySelectorAll(".history-del").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      removeSeedFromHistory(parseInt(btn.dataset.idx));
    });
  });
}

function initSeedHistory() {
  document.getElementById("btn-clear-history").addEventListener("click", clearSeedHistory);
  renderSeedHistory();
}

// ===== Window Management =====

async function fetchWindow() {
  return await invoke("find_balatro_window");
}

async function loadBalatroWindow() {
  var el = document.getElementById("window-info");
  try {
    var win = await fetchWindow();
    if (!win) {
      el.innerHTML = '<p class="empty-tip">未检测到 Balatro 游戏</p>';
      document.getElementById("scale-card").style.display = "none";
      document.getElementById("preset-card").style.display = "none";
      currentWindow = null;
      return;
    }
    currentWindow = win;
    var w = win.right - win.left;
    var h = win.bottom - win.top;
    if (!originSaved) {
      originW = w; originH = h; originX = win.left; originY = win.top;
      originSaved = true; currentPct = 100;
    }
    el.innerHTML =
      '<div class="info-grid">' +
      '<div class="info-cell"><span class="info-label">标题</span><span class="info-value">' + esc(win.title) + '</span></div>' +
      '<div class="info-cell"><span class="info-label">位置</span><span class="info-value">' + win.left + ', ' + win.top + '</span></div>' +
      '<div class="info-cell"><span class="info-label">当前大小</span><span class="info-value">' + w + ' x ' + h + '</span></div>' +
      '<div class="info-cell"><span class="info-label">基准</span><span class="info-value">' + originW + ' x ' + originH + ' @ ' + originX + ', ' + originY + '</span></div>' +
      '</div>';
    document.getElementById("scale-card").style.display = "";
    document.getElementById("preset-card").style.display = "";
    updateScaleUI();
    loadPresets();
  } catch (e) {
    el.innerHTML = '<p class="empty-tip">检测失败: ' + e + '</p>';
    document.getElementById("scale-card").style.display = "none";
    document.getElementById("preset-card").style.display = "none";
  }
}

function updateScaleUI() {
  $$(".btn-scale").forEach(function (b) {
    b.classList.toggle("active", parseInt(b.dataset.pct) === currentPct);
  });
  document.getElementById("input-pct").value = currentPct;
  var w = Math.round(originW * currentPct / 100);
  var h = Math.round(originH * currentPct / 100);
  document.getElementById("scale-preview").textContent = w + " x " + h + "  位置 " + originX + ", " + originY;
}

async function applyScale(pct) {
  var win = await fetchWindow();
  if (!win) { showToast("未检测到游戏窗口", "error"); return; }
  currentPct = pct;
  updateScaleUI();
  var w = Math.round(originW * pct / 100);
  var h = Math.round(originH * pct / 100);
  try {
    await invoke("resize_window", { hwnd: win.hwnd, left: originX, top: originY, width: w, height: h });
    showToast("已调整为 " + pct + "%");
    setTimeout(loadBalatroWindow, 300);
  } catch (e) { showToast("调整失败: " + e, "error"); }
}

async function loadPresets() {
  var el = document.getElementById("preset-list");
  try {
    var presets = await invoke("get_presets");
    if (!presets || presets.length === 0) {
      el.innerHTML = '<p class="empty-tip" style="padding:12px 0;font-size:12px">暂无预设</p>';
      return;
    }
    el.innerHTML = presets.map(function (p) {
      return '<div class="preset-item">' +
        '<div><div class="preset-name">' + p.name + '</div><div class="preset-detail">' + p.width + 'x' + p.height + ' @ (' + p.left + ', ' + p.top + ')</div></div>' +
        '<div class="preset-actions">' +
        '<button class="btn btn-sm btn-apply-preset" data-left="' + p.left + '" data-top="' + p.top + '" data-width="' + p.width + '" data-height="' + p.height + '">恢复</button>' +
        '<button class="btn btn-sm btn-del-preset" data-id="' + p.id + '">删除</button>' +
        '</div></div>';
    }).join("");

    el.querySelectorAll(".btn-apply-preset").forEach(function (btn) {
      btn.addEventListener("click", async function () {
        var win = await fetchWindow();
        if (!win) { showToast("未检测到游戏窗口", "error"); return; }
        try {
          await invoke("resize_window", {
            hwnd: win.hwnd, left: parseInt(btn.dataset.left), top: parseInt(btn.dataset.top),
            width: parseInt(btn.dataset.width), height: parseInt(btn.dataset.height),
          });
          showToast("已恢复预设");
          originSaved = false;
          setTimeout(loadBalatroWindow, 300);
        } catch (e) { showToast("恢复失败: " + e, "error"); }
      });
    });

    el.querySelectorAll(".btn-del-preset").forEach(function (btn) {
      btn.addEventListener("click", async function () {
        try { await invoke("remove_preset", { id: btn.dataset.id }); loadPresets(); }
        catch (e) { showToast("删除失败: " + e, "error"); }
      });
    });
  } catch (e) { el.innerHTML = '<p class="empty-tip" style="font-size:12px">加载失败</p>'; }
}

function initWindow() {
  $$(".btn-scale").forEach(function (btn) {
    btn.addEventListener("click", function () { applyScale(parseInt(btn.dataset.pct)); });
  });
  document.getElementById("btn-custom-scale").addEventListener("click", function () {
    var val = parseInt(document.getElementById("input-pct").value);
    if (!val || val < 10 || val > 500) { showToast("请输入 10-500 之间的百分比", "error"); return; }
    applyScale(val);
  });
  document.getElementById("btn-add-preset").addEventListener("click", async function () {
    var win = await fetchWindow();
    if (!win) { showToast("未检测到游戏窗口", "error"); return; }
    var w = win.right - win.left;
    var h = win.bottom - win.top;
    try {
      await invoke("save_preset", { id: Date.now().toString(), name: w + "x" + h, width: w, height: h, left: win.left, top: win.top });
      showToast("预设已保存");
      loadPresets();
    } catch (e) { showToast("保存失败: " + e, "error"); }
  });
  document.getElementById("btn-reset-origin").addEventListener("click", function () {
    originSaved = false;
    loadBalatroWindow();
  });
  loadBalatroWindow();
}

// ===== Save Management =====

function renderSaveList(saves) {
  var el = document.getElementById("save-list");
  if (!saves || saves.length === 0) { el.innerHTML = '<p class="empty-tip">暂无备份存档</p>'; return; }
  el.innerHTML = saves.map(function (s) {
    return '<div class="save-item" data-file="' + s.file_name + '">' +
      '<span class="save-time">' + s.display_time + '</span>' +
      '<div class="save-actions">' +
      '<button class="btn btn-sm btn-restore" data-file="' + s.file_name + '">回档</button>' +
      '<button class="btn btn-sm btn-delete" data-file="' + s.file_name + '">删除</button>' +
      '</div></div>';
  }).join("");

  el.querySelectorAll(".btn-restore").forEach(function (btn) {
    btn.addEventListener("click", async function () {
      try { await invoke("restore_save", { fileName: btn.dataset.file }); showToast("回档成功"); }
      catch (e) { showToast("回档失败: " + e, "error"); }
    });
  });
  el.querySelectorAll(".btn-delete").forEach(function (btn) {
    btn.addEventListener("click", async function () {
      try { await invoke("delete_backup", { fileName: btn.dataset.file }); showToast("删除成功"); loadSaves(); }
      catch (e) { showToast("删除失败: " + e, "error"); }
    });
  });
}

async function loadSaves() {
  try { renderSaveList(await invoke("list_save_files")); }
  catch (e) { showToast("加载失败: " + e, "error"); }
}

function initSave() {
  document.getElementById("btn-backup").addEventListener("click", async function () {
    var btn = document.getElementById("btn-backup");
    try { btn.disabled = true; await invoke("create_backup"); showToast("存档已保存"); await loadSaves(); }
    catch (e) { showToast("保存失败: " + e, "error"); }
    finally { btn.disabled = false; }
  });
  loadSaves();
}

// ===== Game Status =====

async function checkGameStatus() {
  var el = document.getElementById("status");
  try {
    var running = await invoke("check_game_running");
    el.innerHTML = '<div class="status-dot"></div><span>' + (running ? "游戏运行中" : "游戏未运行") + '</span>';
    el.className = "status " + (running ? "running" : "stopped");
  } catch (e) {
    el.innerHTML = '<div class="status-dot"></div><span>检测失败</span>';
    el.className = "status stopped";
  }
}

// ===== Init =====

document.addEventListener("DOMContentLoaded", async function () {
  initTabs();
  initWindow();
  initSave();
  initSeedHistory();
  await checkGameStatus();
  setInterval(checkGameStatus, 5000);


});
