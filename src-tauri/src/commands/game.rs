use tauri::command;

use crate::balatro::game_checker;

#[command]
pub fn check_game_running() -> Result<bool, String> {
    game_checker::is_game_running().map_err(|e| e.to_string())
}
