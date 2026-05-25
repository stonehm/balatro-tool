use std::fs;
use std::path::PathBuf;

use serde::{Deserialize, Serialize};

use crate::error::AppError;
use crate::utils::ensure_tool_dir;

const PRESETS_FILE: &str = "window-presets.json";
const APP_WINDOW_FILE: &str = "app-window.json";

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WindowPreset {
    pub id: String,
    pub name: String,
    pub width: i32,
    pub height: i32,
    pub left: i32,
    pub top: i32,
}

#[derive(Debug, Default, Serialize, Deserialize)]
struct PresetFile {
    presets: Vec<WindowPreset>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AppWindowState {
    pub x: i32,
    pub y: i32,
    pub width: u32,
    pub height: u32,
    #[serde(default)]
    pub maximized: bool,
}

fn json_path(name: &str) -> Result<PathBuf, AppError> {
    Ok(ensure_tool_dir()?.join(name))
}

pub fn load_presets() -> Result<Vec<WindowPreset>, AppError> {
    let path = json_path(PRESETS_FILE)?;
    if !path.exists() {
        return Ok(vec![]);
    }
    let data = fs::read_to_string(&path)?;
    let file: PresetFile = serde_json::from_str(&data)?;
    Ok(file.presets)
}

fn save_presets(presets: &[WindowPreset]) -> Result<(), AppError> {
    let path = json_path(PRESETS_FILE)?;
    let data = serde_json::to_string_pretty(&PresetFile {
        presets: presets.to_vec(),
    })?;
    fs::write(&path, data)?;
    Ok(())
}

pub fn add_preset(preset: WindowPreset) -> Result<(), AppError> {
    let mut presets = load_presets()?;
    presets.retain(|p| p.id != preset.id);
    presets.push(preset);
    save_presets(&presets)
}

pub fn delete_preset(id: &str) -> Result<(), AppError> {
    let mut presets = load_presets()?;
    presets.retain(|p| p.id != id);
    save_presets(&presets)
}

pub fn load_app_window() -> Result<Option<AppWindowState>, AppError> {
    let path = json_path(APP_WINDOW_FILE)?;
    if !path.exists() {
        return Ok(None);
    }
    let data = fs::read_to_string(&path)?;
    Ok(Some(serde_json::from_str(&data)?))
}

pub fn save_app_window(state: &AppWindowState) -> Result<(), AppError> {
    let path = json_path(APP_WINDOW_FILE)?;
    let data = serde_json::to_string_pretty(state)?;
    fs::write(&path, data)?;
    Ok(())
}
