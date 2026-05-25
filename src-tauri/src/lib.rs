mod balatro;
mod commands;
mod error;
mod utils;
mod window;

use tauri::Manager;

use commands::{game, save, seed_history, window_cmds};

pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            save::list_save_files,
            save::create_backup,
            save::restore_save,
            save::delete_backup,
            game::check_game_running,
            window_cmds::find_balatro_window,
            window_cmds::resize_window,
            window_cmds::get_presets,
            window_cmds::save_preset,
            window_cmds::remove_preset,
            window_cmds::load_app_window_state,
            seed_history::load_seed_history,
            seed_history::save_seed_history,
        ])
        .setup(|app| {
            if let Some(win) = app.get_webview_window("main") {
                if let Ok(Some(state)) = window::config::load_app_window() {
                    if state.maximized {
                        let _ = win.maximize();
                    } else {
                        let pos = tauri::PhysicalPosition::<i32>::new(state.x, state.y);
                        let size = tauri::PhysicalSize::<u32>::new(state.width, state.height);
                        let _ = win.set_position(pos);
                        let _ = win.set_size(size);
                    }
                }
                let _ = win.show();
            }
            Ok(())
        })
        .on_window_event(|window, event| {
            if let tauri::WindowEvent::CloseRequested { .. } = event {
                let is_maximized = window.is_maximized().unwrap_or(false);
                if let (Ok(pos), Ok(size)) = (window.outer_position(), window.inner_size()) {
                    let state = window::config::AppWindowState {
                        x: pos.x,
                        y: pos.y,
                        width: size.width,
                        height: size.height,
                        maximized: is_maximized,
                    };
                    let _ = window::config::save_app_window(&state);
                }
            }
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
