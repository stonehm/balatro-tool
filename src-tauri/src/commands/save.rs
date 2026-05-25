use tauri::command;

use crate::balatro::save_manager;
use crate::balatro::save_manager::SaveEntry;

#[command]
pub fn list_save_files() -> Result<Vec<SaveEntry>, String> {
    save_manager::list_backups().map_err(|e| e.to_string())
}

#[command]
pub fn create_backup() -> Result<SaveEntry, String> {
    save_manager::create_backup().map_err(|e| e.to_string())
}

#[command]
pub fn restore_save(file_name: String) -> Result<(), String> {
    save_manager::restore_backup(&file_name).map_err(|e| e.to_string())
}

#[command]
pub fn delete_backup(file_name: String) -> Result<(), String> {
    save_manager::delete_backup(&file_name).map_err(|e| e.to_string())
}
