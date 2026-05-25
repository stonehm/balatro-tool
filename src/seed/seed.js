(function () {
  var options = [
    "Negative Tag",
    "Foil Tag",
    "Holographic Tag",
    "Polychrome Tag",
    "Rare Tag",
    "Golden Ticket",
    "Mr. Bones",
    "Acrobat",
    "Sock and Buskin",
    "Swashbuckler",
    "Troubadour",
    "Certificate",
    "Smeared Joker",
    "Throwback",
    "Hanging Chad",
    "Rough Gem",
    "Bloodstone",
    "Arrowhead",
    "Onyx Agate",
    "Glass Joker",
    "Showman",
    "Flower Pot",
    "Blueprint",
    "Wee Joker",
    "Merry Andy",
    "Oops! All 6s",
    "The Idol",
    "Seeing Double",
    "Matador",
    "Hit the Road",
    "The Duo",
    "The Trio",
    "The Family",
    "The Order",
    "The Tribe",
    "Stuntman",
    "Invisible Joker",
    "Brainstorm",
    "Satellite",
    "Shoot the Moon",
    "Driver's License",
    "Cartomancer",
    "Astronomer",
    "Burnt Joker",
    "Bootstraps",
    "Overstock Plus",
    "Liquidation",
    "Glow Up",
    "Reroll Glut",
    "Omen Globe",
    "Observatory",
    "Nacho Tong",
    "Recyclomancy",
    "Tarot Tycoon",
    "Planet Tycoon",
    "Money Tree",
    "Antimatter",
    "Illusion",
    "Petroglyph",
    "Retcon",
    "Palette",
  ];
  var selectedOptions = new Array(options.length).fill(true);

  var openCheckboxesBtn = document.getElementById("openCheckboxesBtn");
  var checkboxesOverlay = document.getElementById("checkboxesOverlay");
  var checkboxesContainer = document.getElementById("checkboxesContainer");
  var submitBtn = document.getElementById("submitBtn");
  var lockBtn = document.getElementById("lockBtn");
  var unlockBtn = document.getElementById("unlockBtn");

  function createCheckboxes() {
    checkboxesContainer.innerHTML = "";
    var numColumns = 4;
    var optionsPerColumn = Math.ceil(options.length / numColumns);

    for (var i = 0; i < numColumns; i++) {
      var columnDiv = document.createElement("div");
      columnDiv.className = "checkbox-column";

      for (
        var j = i * optionsPerColumn;
        j < (i + 1) * optionsPerColumn && j < options.length;
        j++
      ) {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = options[j];
        checkbox.checked = selectedOptions[j];
        checkbox.dataset.index = j;
        var label = document.createElement("label");
        label.textContent = " " + (nameMap[options[j]] || options[j]);
        label.prepend(checkbox);
        columnDiv.appendChild(label);
      }

      checkboxesContainer.appendChild(columnDiv);
    }
  }

  function handleSubmit() {
    var checkboxes = checkboxesContainer.querySelectorAll(
      'input[type="checkbox"]'
    );
    checkboxes.forEach(function (checkbox) {
      selectedOptions[parseInt(checkbox.dataset.index)] = checkbox.checked;
    });
    closeOverlay();
  }

  function handleLock() {
    var checkboxes = checkboxesContainer.querySelectorAll(
      'input[type="checkbox"]'
    );
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });
  }

  function handleUnlock() {
    var checkboxes = checkboxesContainer.querySelectorAll(
      'input[type="checkbox"]'
    );
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = true;
    });
  }

  function openOverlay() {
    createCheckboxes();
    checkboxesOverlay.style.display = "flex";
  }

  function closeOverlay() {
    checkboxesOverlay.style.display = "none";
  }

  openCheckboxesBtn.addEventListener("click", openOverlay);
  checkboxesOverlay.addEventListener("click", function (e) {
    if (e.target === checkboxesOverlay) closeOverlay();
  });
  submitBtn.addEventListener("click", handleSubmit);
  lockBtn.addEventListener("click", handleLock);
  unlockBtn.addEventListener("click", handleUnlock);

  var anteSelectContainer = document.getElementById("anteSelectContainer");
  var addAnteBtn = document.getElementById("addAnteBtn");
  var anteCardMap = [{ ante: 1, cards: 15 }];

  function renderAnteInputs() {
    anteSelectContainer.innerHTML = "";
    anteCardMap.forEach(function (item, idx) {
      var div = document.createElement("div");
      div.className = "ante-row";

      var anteInput = document.createElement("input");
      anteInput.type = "number";
      anteInput.min = 1;
      anteInput.max = 999;
      anteInput.value = item.ante;
      anteInput.className = "seed-input ante-input";
      anteInput.addEventListener("input", function (e) {
        anteCardMap[idx].ante = parseInt(e.target.value) || 1;
      });

      var cardInput = document.createElement("input");
      cardInput.type = "number";
      cardInput.min = 0;
      cardInput.value = item.cards;
      cardInput.className = "seed-input card-input";
      cardInput.addEventListener("input", function (e) {
        anteCardMap[idx].cards = parseInt(e.target.value) || 0;
      });

      div.appendChild(document.createTextNode("\u5E95\u6CE8:"));
      div.appendChild(anteInput);
      div.appendChild(document.createTextNode(" \u5546\u5E97\u6570:"));
      div.appendChild(cardInput);

      if (anteCardMap.length > 1) {
        var delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.textContent = "\u5220\u9664";
        delBtn.className = "btn btn-sm";
        delBtn.style.marginLeft = "4px";
        delBtn.onclick = function () {
          anteCardMap.splice(idx, 1);
          renderAnteInputs();
        };
        div.appendChild(delBtn);
      }

      anteSelectContainer.appendChild(div);
    });
  }

  addAnteBtn.onclick = function () {
    var nextAnte = 1;
    var used = anteCardMap.map(function (x) {
      return x.ante;
    });
    while (used.includes(nextAnte)) nextAnte++;
    anteCardMap.push({ ante: nextAnte, cards: 15 });
    renderAnteInputs();
  };

  renderAnteInputs();

  var deckSelect = document.getElementById("deck");
  var stakeSelect = document.getElementById("stake");
  var versionSelect = document.getElementById("version");
  var seedInput = document.getElementById("seed");
  var lockDefaults = [
    "Overstock Plus", "Liquidation", "Glow Up", "Reroll Glut",
    "Omen Globe", "Observatory", "Nacho Tong", "Recyclomancy",
    "Tarot Tycoon", "Planet Tycoon", "Money Tree", "Antimatter",
    "Illusion", "Petroglyph", "Retcon", "Palette",
  ];

  var analyzeButton = document.getElementById("analyzeButton");
  var outputBox = document.getElementById("outputBox");
  var output = "";

  function filterSeed(seed) {
    return seed
      .replace(/[^A-Za-z0-9]/g, "")
      .toUpperCase()
      .replace(/0/g, "O")
      .slice(0, 8);
  }

  seedInput.addEventListener("input", function () {
    seedInput.value = filterSeed(seedInput.value);
  });

  analyzeButton.addEventListener("click", function () {
    if (!wasmReady) {
      alert("WASM 引擎尚未加载完成，请稍后再试");
      return;
    }
    try {
      performAnalysis();
      if (typeof window.displayShopQueues === "function") {
        window.displayShopQueues();
      }
      if (typeof addSeedToHistory === "function" && seedInput.value) {
        addSeedToHistory(seedInput.value, deckSelect.value, stakeSelect.value, versionSelect.value);
      }
    } catch (e) {
      console.error("Analysis error:", e);
      alert("分析失败: " + e.message);
    }
  });

  window.performAnalysis = function performAnalysis() {
    var anteList = anteCardMap.slice().sort(function (a, b) {
      return a.ante - b.ante;
    });
    var deck = deckSelect.value;
    var stake = stakeSelect.value;
    var version = parseInt(versionSelect.value);
    var seed = seedInput.value.toUpperCase().replace(/0/g, "O");
    output = "";

    var inst = new Immolate.Instance(seed);
    inst.params = new Immolate.InstParams(deck, stake, false, version);
    inst.initLocks(1, false, false);
    lockDefaults.forEach(function (name) { inst.lock(name); });

    for (var i = 0; i < options.length; i++) {
      if (!selectedOptions[i]) inst.lock(options[i]);
    }

    inst.setStake(stake);
    inst.setDeck(deck);

    for (var k = 0; k < anteList.length; k++) {
      var a = anteList[k].ante;
      var cardsThisAnte = anteList[k].cards;
      inst.initUnlocks(a, false);
      output += "==ANTE " + a + "==\n";
      output += "Boss: " + inst.nextBoss(a) + "\n";
      var voucher = inst.nextVoucher(a);
      output += "Voucher: " + voucher + "\n";
      inst.lock(voucher);
      for (var vi = 0; vi < Immolate.VOUCHERS.size(); vi += 2) {
        if (Immolate.VOUCHERS.get(vi) == voucher) {
          if (
            selectedOptions[options.indexOf(Immolate.VOUCHERS.get(vi + 1))]
          ) {
            inst.unlock(Immolate.VOUCHERS.get(vi + 1));
          }
        }
      }
      output += "Tags: " + inst.nextTag(a) + ", " + inst.nextTag(a) + "\n";
      output += "Shop Queue: \n";
      for (var q = 1; q <= cardsThisAnte; q++) {
        output += q + ") ";
        var item = inst.nextShopItem(a);
        if (item.type == "Joker") {
          if (item.jokerData.stickers.eternal) output += "Eternal ";
          if (item.jokerData.stickers.perishable) output += "Perishable ";
          if (item.jokerData.stickers.rental) output += "Rental ";
          if (item.jokerData.edition != "No Edition")
            output += item.jokerData.edition + " ";
        }
        output += item.item + "\n";
        item.delete();
      }
      output += "\nPacks: \n";
      var numPacks = a == 1 ? 4 : 6;
      for (var p = 1; p <= numPacks; p++) {
        var pack = inst.nextPack(a);
        output += pack + " - ";
        var packInfo = Immolate.packInfo(pack);
        if (packInfo.type == "Celestial Pack") {
          var cards = inst.nextCelestialPack(packInfo.size, a);
          for (var c = 0; c < packInfo.size; c++) {
            output += cards.get(c);
            output += c + 1 != packInfo.size ? ", " : "";
          }
          cards.delete();
        }
        if (packInfo.type == "Arcana Pack") {
          var cards = inst.nextArcanaPack(packInfo.size, a);
          for (var c = 0; c < packInfo.size; c++) {
            output += cards.get(c);
            output += c + 1 != packInfo.size ? ", " : "";
          }
          cards.delete();
        }
        if (packInfo.type == "Spectral Pack") {
          var cards = inst.nextSpectralPack(packInfo.size, a);
          for (var c = 0; c < packInfo.size; c++) {
            output += cards.get(c);
            output += c + 1 != packInfo.size ? ", " : "";
          }
          cards.delete();
        }
        if (packInfo.type == "Buffoon Pack") {
          var cards = inst.nextBuffoonPack(packInfo.size, a);
          for (var c = 0; c < packInfo.size; c++) {
            var joker = cards.get(c);
            if (joker.stickers.eternal) output += "Eternal ";
            if (joker.stickers.perishable) output += "Perishable ";
            if (joker.stickers.rental) output += "Rental ";
            if (joker.edition != "No Edition") output += joker.edition + " ";
            output += joker.joker;
            joker.delete();
            output += c + 1 != packInfo.size ? ", " : "";
          }
          cards.delete();
        }
        if (packInfo.type == "Standard Pack") {
          var cards = inst.nextStandardPack(packInfo.size, a);
          for (var c = 0; c < packInfo.size; c++) {
            var card = cards.get(c);
            if (card.seal != "No Seal") output += card.seal + " ";
            if (card.edition != "No Edition") output += card.edition + " ";
            if (card.enhancement != "No Enhancement")
              output += card.enhancement + " ";
            var rank = card.base[2];
            if (rank == "T") output += "10";
            else if (rank == "J") output += "Jack";
            else if (rank == "Q") output += "Queen";
            else if (rank == "K") output += "King";
            else if (rank == "A") output += "Ace";
            else output += rank;
            output += " of ";
            var suit = card.base[0];
            if (suit == "C") output += "Clubs";
            else if (suit == "S") output += "Spades";
            else if (suit == "D") output += "Diamonds";
            else if (suit == "H") output += "Hearts";
            card.delete();
            output += c + 1 != packInfo.size ? ", " : "";
          }
          cards.delete();
        }
        output += "\n";
      }
      output += "\n";
    }
    inst.delete();
    outputBox.value = output;
  }
})();
