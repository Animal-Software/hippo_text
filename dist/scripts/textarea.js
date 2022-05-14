const textArea = document.querySelector("#text_area");

textArea.addEventListener("keyup", (e) => {
    console.log(e.keycode);
    switch (e.keycode) {
        case 9:
            e.preventDefault();
            textArea.textContent += "    ";
            console.log("tab was used");
        break;
    }
})