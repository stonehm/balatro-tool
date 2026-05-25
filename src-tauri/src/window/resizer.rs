use windows::Win32::Foundation::HWND;
use windows::Win32::UI::WindowsAndMessaging::{
    SetWindowPos, HWND_NOTOPMOST, HWND_TOPMOST, SET_WINDOW_POS_FLAGS, SWP_NOMOVE,
    SWP_NOOWNERZORDER, SWP_NOSIZE, SWP_SHOWWINDOW,
};

use crate::error::AppError;

fn set_pos(
    hwnd: HWND,
    left: i32,
    top: i32,
    width: i32,
    height: i32,
    flags: SET_WINDOW_POS_FLAGS,
) -> Result<(), AppError> {
    unsafe {
        SetWindowPos(hwnd, Some(HWND_TOPMOST), left, top, width, height, flags)
            .map_err(|e| AppError::WindowError(e.to_string()))?;

        SetWindowPos(
            hwnd,
            Some(HWND_NOTOPMOST),
            0,
            0,
            0,
            0,
            SET_WINDOW_POS_FLAGS(flags.0 | SWP_NOMOVE.0 | SWP_NOSIZE.0),
        )
        .map_err(|e| AppError::WindowError(e.to_string()))?;
    }
    Ok(())
}

pub fn resize_window(
    hwnd: usize,
    left: i32,
    top: i32,
    width: i32,
    height: i32,
) -> Result<(), AppError> {
    let hwnd = HWND(hwnd as *mut core::ffi::c_void);
    set_pos(
        hwnd,
        left,
        top,
        width,
        height,
        SET_WINDOW_POS_FLAGS(SWP_NOOWNERZORDER.0 | SWP_SHOWWINDOW.0),
    )
}
