use std::fs;
use std::path::PathBuf;

use chrono::DateTime;
use serde::{Deserialize, Serialize};

use crate::error::AppError;
use crate::utils::{ensure_tool_dir, validate_file_name};

const SAVE_FILE_NAME: &str = "save.jkr";
const MAX_BACKUPS: usize = 10;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SaveEntry {
    pub index: usize,
    pub timestamp_ms: i64,
    pub display_time: String,
    pub file_name: String,
}

pub fn get_save_path() -> Result<PathBuf, AppError> {
    let appdata = dirs::data_dir()
        .ok_or_else(|| AppError::PathError("Cannot resolve APPDATA path".into()))?;
    Ok(appdata.join("Balatro").join("1").join(SAVE_FILE_NAME))
}

pub fn get_backup_dir() -> Result<PathBuf, AppError> {
    Ok(ensure_tool_dir()?.join("saves"))
}

pub fn list_backups() -> Result<Vec<SaveEntry>, AppError> {
    let backup_dir = get_backup_dir()?;
    if !backup_dir.exists() {
        return Ok(vec![]);
    }

    let mut entries: Vec<SaveEntry> = fs::read_dir(&backup_dir)?
        .filter_map(|e| e.ok())
        .filter_map(|e| {
            let name = e.file_name().to_string_lossy().to_string();
            if !name.starts_with(SAVE_FILE_NAME) {
                return None;
            }
            let parts: Vec<&str> = name.split('.').collect();
            let ts_ms: i64 = parts.get(2)?.parse().ok()?;
            let dt = DateTime::from_timestamp_millis(ts_ms)?
                .with_timezone(&chrono::Local);
            Some(SaveEntry {
                index: 0,
                timestamp_ms: ts_ms,
                display_time: dt.format("%Y-%m-%d %H:%M:%S").to_string(),
                file_name: name,
            })
        })
        .collect();

    entries.sort_by(|a, b| b.timestamp_ms.cmp(&a.timestamp_ms));
    for (i, entry) in entries.iter_mut().enumerate() {
        entry.index = i;
    }

    Ok(entries)
}

pub fn create_backup() -> Result<SaveEntry, AppError> {
    let save_path = get_save_path()?;
    if !save_path.exists() {
        return Err(AppError::SaveNotFound(SAVE_FILE_NAME.into()));
    }

    let backup_dir = get_backup_dir()?;
    fs::create_dir_all(&backup_dir)?;

    let backups = list_backups()?;
    if backups.len() >= MAX_BACKUPS {
        if let Some(oldest) = backups.last() {
            let oldest_path = backup_dir.join(&oldest.file_name);
            let _ = fs::remove_file(&oldest_path);
        }
    }

    let now = chrono::Local::now();
    let ts_ms = now.timestamp_millis();
    let backup_name = format!("{}.{}", SAVE_FILE_NAME, ts_ms);
    let backup_path = backup_dir.join(&backup_name);

    fs::copy(&save_path, &backup_path)?;

    Ok(SaveEntry {
        index: 0,
        timestamp_ms: ts_ms,
        display_time: now.format("%Y-%m-%d %H:%M:%S").to_string(),
        file_name: backup_name,
    })
}

pub fn restore_backup(file_name: &str) -> Result<(), AppError> {
    validate_file_name(file_name)?;

    let backup_path = get_backup_dir()?.join(file_name);
    if !backup_path.exists() {
        return Err(AppError::BackupNotFound(file_name.into()));
    }

    let save_path = get_save_path()?;
    fs::copy(&backup_path, &save_path)?;

    Ok(())
}

pub fn delete_backup(file_name: &str) -> Result<(), AppError> {
    validate_file_name(file_name)?;

    let backup_path = get_backup_dir()?.join(file_name);
    if !backup_path.exists() {
        return Err(AppError::BackupNotFound(file_name.into()));
    }

    fs::remove_file(&backup_path)?;

    Ok(())
}
