use serde::Serialize;

#[derive(Debug, thiserror::Error)]
pub enum AppError {
    #[error("Save file not found: {0}")]
    SaveNotFound(String),

    #[error("Backup not found: {0}")]
    BackupNotFound(String),

    #[error("Path error: {0}")]
    PathError(String),

    #[error("Invalid file name: {0}")]
    InvalidFileName(String),

    #[error("IO error: {0}")]
    Io(#[from] std::io::Error),

    #[error("Serialization error: {0}")]
    Serde(#[from] serde_json::Error),

    #[error("Window error: {0}")]
    WindowError(String),
}

impl Serialize for AppError {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        serializer.serialize_str(&self.to_string())
    }
}
