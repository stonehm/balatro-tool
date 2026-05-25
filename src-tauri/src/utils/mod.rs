use std::fs;
use std::path::PathBuf;

use crate::error::AppError;

const TOOL_DIR_NAME: &str = "BalatroTool";

pub fn ensure_tool_dir() -> Result<PathBuf, AppError> {
    let appdata = dirs::data_dir()
        .ok_or_else(|| AppError::PathError("Cannot resolve APPDATA path".into()))?;
    let dir = appdata.join(TOOL_DIR_NAME);
    fs::create_dir_all(&dir)?;
    Ok(dir)
}

pub fn validate_file_name(name: &str) -> Result<(), AppError> {
    if name.contains('\\') || name.contains('/') || name.contains("..") {
        return Err(AppError::InvalidFileName(name.into()));
    }
    Ok(())
}
