const invoke = window.__TAURI__.invoke;
const dialog = window.__TAURI__.dialog;
const appWindow = window.__TAURI__.window.appWindow;

import { updateLineNumber } from './lineNumber.js';

const textArea = document.querySelector("#text_area");

const clearFile = () => {
    textArea.value = "";
    updateLineNumber("from new")
}

const openFile = async () => {
    let pathName = await dialog.open({ title: "Open File", multiple: false, filters: [{ name: "Text", extensions: ["txt"] }, { name: "All Files", extensions: ["*"] }] });
    console.log(pathName);
    invoke("open_file", {filePath: pathName})
        .then(async (message) => {
            console.log(message);
            textArea.value = await message;
            updateLineNumber("from open");
        });
}

const saveFile = async () => {
    let textAreaContent = await textArea.value;
    let pathName = await dialog.save({ title: "Save File", filters: [{ name: "Text", extensions: ["txt"] }, { name: "All Files", extensions: ["*"] }] });
    invoke("save_file", {fileContent: textAreaContent, filePath: pathName});    
}

const exitApp = () => {
    appWindow.close();
}

const resetDropdowns = (currentDropdown) => {
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active");
    })
}

document.addEventListener("click", (e) => {
    const isMenuButton = e.target.matches("[data-dropdown-button]");
    let currentDropdown;
    if (isMenuButton) {
        currentDropdown = e.target.querySelector("[data-dropdown]");
        // console.log(currentDropdown);
        currentDropdown.classList.toggle("active");
    }

    const isMenuOption = e.target.matches("[data-dropdown-option]");
    if (isMenuOption) {
        let currentOption;
        currentOption = e.target.getAttribute("data-dropdown-option");
        console.log(`option ${currentOption} fired!`);
        switch (currentOption) {
            case "new":
                clearFile();
            break;
            case "open":
                openFile();
            break;
            case "save":
                saveFile();
            break;
            case "exit":
                exitApp();
            break;
        }
    }

    resetDropdowns(currentDropdown);
})