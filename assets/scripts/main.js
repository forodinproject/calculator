let num1, operator, num2;
let arrDisplay = [];
let expression = document.querySelector('.expression');
let btns = document.querySelectorAll(".btn");
for (let btn of btns) {
    if (btn.value !== undefined) {
        btn.addEventListener('click', getButtonValue);
    }
}

function getButtonValue(e) {
    let clickedVal = e.target.value;
    if (clickedVal === 'backspace') {
        backspace();
    }
    else if (clickedVal !== '' && clickedVal !== undefined) {
        arrDisplay.push(clickedVal);
    }
    setDisplay(arrDisplay);
    if (arrDisplay.length === 0)
        expression.textContent = '0';

}

function setDisplay(arrDisplay) {
    expression.textContent = arrDisplay.join('');
}








let allClearBtn = document.querySelector('.allClearBtn');
allClearBtn.addEventListener('click', clear)

function clear() {
    expression.textContent = 0;
    arrDisplay = [];
}

let backspaceBtn = document.querySelector('.backspaceBtn')
function backspace() {
    arrDisplay.pop();
    if (arrDisplay.length === 0) {
        expression.textContent = 0;
    }
}

