use windows::Win32::System::Diagnostics::ToolHelp::{
    CreateToolhelp32Snapshot, Process32FirstW, Process32NextW, PROCESSENTRY32W, TH32CS_SNAPPROCESS,
};

use crate::error::AppError;

const GAME_PROCESS_NAME: &str = "Balatro.exe";

pub fn is_game_running() -> Result<bool, AppError> {
    unsafe {
        let snapshot = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0)
            .map_err(|e| AppError::Io(std::io::Error::other(e.to_string())))?;

        let mut entry = PROCESSENTRY32W {
            dwSize: std::mem::size_of::<PROCESSENTRY32W>() as u32,
            ..Default::default()
        };

        if Process32FirstW(snapshot, &mut entry).is_err() {
            return Ok(false);
        }

        loop {
            let name = String::from_utf16_lossy(
                &entry.szExeFile[..entry
                    .szExeFile
                    .iter()
                    .position(|&c| c == 0)
                    .unwrap_or(entry.szExeFile.len())],
            );
            if name.eq_ignore_ascii_case(GAME_PROCESS_NAME) {
                return Ok(true);
            }
            if Process32NextW(snapshot, &mut entry).is_err() {
                break;
            }
        }

        Ok(false)
    }
}
