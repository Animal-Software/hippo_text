#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use std::fs::File;
use std::io::prelude::*;

#[tauri::command]
fn open_file(file_path: String) -> String {
  // open the file
  let mut open_file_content = File::open(file_path)
    .expect("Could not open file!");
  // create a new string
  let mut contents = String::new();
  //  copy file content to string
  open_file_content.read_to_string(&mut contents)
    .expect("Can not read the file, sorry mate!");
  // print contents
  println!("I opened the file! The contents are:\n{}", contents);
  // send back message
  contents.into()
}

#[tauri::command]
fn save_file(file_content: String, file_path: String) {
  // create file
  let mut save_file_content = File::create(file_path)
    .expect("Could not create file!");
  // write file content
  save_file_content.write_all(file_content.as_bytes())
    .expect("Cannot write to the file, sorry mate!");
  // print confirmation
  println!("I saved the file!");
}

fn main() {
  tauri::Builder::default()
    // pass functions to front-end
    .invoke_handler(tauri::generate_handler![open_file, save_file])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

// .tauri::window::WindowBuilder::new("label", WindowUrl::App("index.html".into())).decorations(false).build()?;