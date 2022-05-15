const counter = document.querySelector("#counter");
const textArea = document.querySelector("#text_area");

textArea.addEventListener("input", updateLineNumber);

export async function updateLineNumber (_text) {
    let numbers = counter.querySelectorAll("#lineNumber");
    let textArray = await textArea.value.split("\n");
    let lineCount = await textArray.length;
    
    while (numbers.length > lineCount) {
        counter.removeChild(numbers[numbers.length - 1]);
        numbers = counter.querySelectorAll("#lineNumber");
    }

    if (numbers.length < lineCount) {
        const number = document.createElement('span');
        number.setAttribute("id", "lineNumber");
        number.textContent = (lineCount).toString();
        counter.appendChild(number);
    }

    console.log(_text);
}