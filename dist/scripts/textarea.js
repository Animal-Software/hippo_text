import './virtualCursor.js';

const textArea = document.querySelector("#text_area");

const tabSpace = async (event) => {
    event.preventDefault();
    textArea.value += "    ";
    await textArea.setSelectionRange(-1, -1);
    console.log("tab was used");
}

textArea.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "Tab":
            tabSpace(e);
        break;
    }
    console.log(e.code);
});

