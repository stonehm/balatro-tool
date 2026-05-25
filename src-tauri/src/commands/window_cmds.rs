use tauri::command;

use crate::window;
use crate::window::config::WindowPreset;

#[command]
pub fn find_balatro_window() -> Result<Option<window::enumber::WindowInfo>, String> {
    window::enumber::find_balatro_window().map_err(|e| e.to_string())
}

#[command]
pub fn resize_window(
    hwnd: usize,
    left: i32,
    top: i32,
    width: i32,
    height: i32,
) -> Result<(), String> {
    window::resizer::resize_window(hwnd, left, top, width, height).map_err(|e| e.to_string())
}

#[command]
pub fn get_presets() -> Result<Vec<WindowPreset>, String> {
    window::config::load_presets().map_err(|e| e.to_string())
}

#[command]
pub fn save_preset(
    id: String,
    name: String,
    width: i32,
    height: i32,
    left: i32,
    top: i32,
) -> Result<(), String> {
    let preset = WindowPreset {
        id,
        name,
        width,
        height,
        left,
        top,
    };
    window::config::add_preset(preset).map_err(|e| e.to_string())
}

#[command]
pub fn remove_preset(id: String) -> Result<(), String> {
    window::config::delete_preset(&id).map_err(|e| e.to_string())
}

#[command]
pub fn load_app_window_state() -> Result<Option<window::config::AppWindowState>, String> {
    window::config::load_app_window().map_err(|e| e.to_string())
}
