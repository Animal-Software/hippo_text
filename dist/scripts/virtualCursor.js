const textArea = document.querySelector("#text_area");

let line = 1, col = 1;

const goLeft = (stepLeft) => {
    if ((col - stepLeft) < 1) return;
    col -= stepLeft;
}

const goRight = (stepRight) => {
    col += stepRight;
}

const goUp = (stepUp) => {
    if ((line - stepUp) < 1) return;
    line -= stepUp;
}

const goDown = (setpDown) => {
    line += setpDown;
}

document.addEventListener("keyup", (e) => {
    // console.log(e.key, " is ", e.code);
    switch(e.code) {
        case "ArrowLeft":
            if (col > 1) {
                goLeft(1);
            } else {
                goUp(1); //go up, at the end
            }
        break;
        case "ArrowRight":
            goRight(1);
        break;
        case "ArrowUp":
            goUp(1);
        break;
        case "ArrowDown":
            goDown(1);
        break;
        case "Enter":
            goDown(1);
        break;
        case "Backspace":
            if (col > 1) {
                goLeft(1);
            } else {
                goUp(1);
            }
        break;
        case "Tab":
            goRight(4);
        break;
    }
    // console.log(e.code, line, col);
});