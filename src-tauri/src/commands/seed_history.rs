use tauri::command;

use crate::utils::ensure_tool_dir;

const HISTORY_FILE: &str = "seed-history.json";

fn history_path() -> Result<std::path::PathBuf, String> {
    ensure_tool_dir()
        .map(|d| d.join(HISTORY_FILE))
        .map_err(|e| e.to_string())
}

#[command]
pub fn load_seed_history() -> Result<String, String> {
    let path = history_path()?;
    if !path.exists() {
        return Ok("[]".into());
    }
    std::fs::read_to_string(&path).map_err(|e| e.to_string())
}

#[command]
pub fn save_seed_history(json: String) -> Result<(), String> {
    serde_json::from_str::<serde_json::Value>(&json).map_err(|e| format!("Invalid JSON: {}", e))?;
    let path = history_path()?;
    std::fs::write(&path, json).map_err(|e| e.to_string())
}
