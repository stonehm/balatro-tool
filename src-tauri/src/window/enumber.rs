use std::ffi::OsString;
use std::os::windows::ffi::OsStringExt;

use serde::{Deserialize, Serialize};
use windows::core::PWSTR;
use windows::Win32::Foundation::{HWND, LPARAM, RECT};
use windows::Win32::System::Threading::{
    OpenProcess, QueryFullProcessImageNameW, PROCESS_QUERY_LIMITED_INFORMATION,
};
use windows::Win32::UI::WindowsAndMessaging::{
    EnumWindows, GetParent, GetShellWindow, GetWindowRect, GetWindowTextLengthW, GetWindowTextW,
    GetWindowThreadProcessId, IsWindowVisible,
};

use crate::error::AppError;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WindowInfo {
    pub hwnd: usize,
    pub title: String,
    pub process_name: String,
    pub left: i32,
    pub top: i32,
    pub right: i32,
    pub bottom: i32,
}

fn get_window_title(hwnd: HWND) -> String {
    unsafe {
        let len = GetWindowTextLengthW(hwnd);
        if len == 0 {
            return String::new();
        }
        let mut buf = vec![0u16; (len as usize) + 1];
        GetWindowTextW(hwnd, &mut buf);
        String::from_utf16_lossy(&buf[..len as usize])
    }
}

fn get_process_name(pid: u32) -> String {
    unsafe {
        let process = match OpenProcess(PROCESS_QUERY_LIMITED_INFORMATION, false, pid) {
            Ok(p) => p,
            Err(_) => return String::new(),
        };
        let mut len: u32 = 512;
        let mut buf = vec![0u16; 512];
        if QueryFullProcessImageNameW(
            process,
            Default::default(),
            PWSTR(buf.as_mut_ptr()),
            &mut len,
        )
        .is_err()
        {
            return String::new();
        }
        let full_path = OsString::from_wide(&buf[..len as usize])
            .to_string_lossy()
            .to_string();
        full_path
            .rsplit('\\')
            .next()
            .unwrap_or(&full_path)
            .to_string()
    }
}

pub fn find_balatro_window() -> Result<Option<WindowInfo>, AppError> {
    let shell_hwnd = unsafe { GetShellWindow() };
    let mut result: Option<WindowInfo> = None;
    let result_ptr = &mut result as *mut Option<WindowInfo>;

    let mut cb_data = CallbackData {
        callback: Box::new(move |hwnd: HWND| unsafe {
            if (*result_ptr).is_some() {
                return false;
            }
            if hwnd == shell_hwnd
                || !IsWindowVisible(hwnd).as_bool()
                || GetWindowTextLengthW(hwnd) == 0
            {
                return true;
            }
            if GetParent(hwnd).is_ok_and(|p| p != HWND::default()) {
                return true;
            }

            let mut pid: u32 = 0;
            GetWindowThreadProcessId(hwnd, Some(&mut pid));
            let process_name = get_process_name(pid);
            if !process_name.eq_ignore_ascii_case("Balatro.exe") {
                return true;
            }

            let title = get_window_title(hwnd);
            let mut rect = RECT::default();
            let _ = GetWindowRect(hwnd, &mut rect);

            *result_ptr = Some(WindowInfo {
                hwnd: hwnd.0 as usize,
                title,
                process_name,
                left: rect.left,
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom,
            });
            false
        }),
    };

    let cb_ptr = LPARAM(&mut cb_data as *mut CallbackData as isize);

    unsafe {
        let _ = EnumWindows(Some(enum_callback), cb_ptr);
    }

    Ok(result)
}

type WindowCallback = Box<dyn FnMut(HWND) -> bool>;

struct CallbackData {
    callback: WindowCallback,
}

/// SAFETY: `enum_callback` is called by `EnumWindows` on the same thread.
/// `lparam` points to a `CallbackData` created on the stack in `find_balatro_window`,
/// which remains alive for the entire duration of the `EnumWindows` call.
/// The closure only mutates `result` through a raw pointer that exclusively belongs
/// to the current thread — no concurrent access is possible.
unsafe extern "system" fn enum_callback(hwnd: HWND, lparam: LPARAM) -> windows::core::BOOL {
    let data = &mut *(lparam.0 as *mut CallbackData);
    windows::core::BOOL::from((data.callback)(hwnd))
}
