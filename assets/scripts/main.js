let num1, operator, num2;
let operators = ['+', '-', '/', '×', '%', '+/-'];
let arrDisplay = [];
let expression = document.querySelector('.expression');
let result = document.querySelector('.result');
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
        //dont allow multiple consecutive operators
        if (operators.includes(clickedVal)) {
            if (operators.includes(arrDisplay[arrDisplay.length - 1])) {
                arrDisplay.pop()
            }

        }
        arrDisplay.push(clickedVal);

        //first element should not be operator or decimal point
        if (operators.includes(arrDisplay[0]) || arrDisplay[0] === '.') {
            arrDisplay.shift();
        }

        //two consecutive decimals not allowed
        if (arrDisplay[arrDisplay.length - 1] === '.' && arrDisplay[arrDisplay.length - 2] === '.') {
            arrDisplay.pop()
        }

    }
    setDisplay(arrDisplay);
    if (arrDisplay.length === 0)
        expression.textContent = '0';

}

function setDisplay(arrDisplay) {
    expression.textContent = arrDisplay.join('');
}






function add(num1, num2) {
    let sum = +num1 + +num2;
    console.log(sum)
    return sum;
}

function subtarct(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) return 'error: zero divisor not allowed'
    return num1 / num2;
}

function operate(num1, operator, num2) {
    if (operator === '+') {
        add(num1, num2);
    }
    else if (operator === '-') {
        subtarct(num1, num2);
    }
    else if (operator === '*') {
        multiply(num1, num2);
    }
    else if (operator === '/') {
        divide(num1, num2);
    }

}

let allClearBtn = document.querySelector('.allClearBtn');
allClearBtn.addEventListener('click', clear)

function clear() {
    expression.textContent = 0;
    arrDisplay = [];
    result.textContent = 0;

}

let backspaceBtn = document.querySelector('.backspaceBtn')
function backspace() {
    arrDisplay.pop();
    if (arrDisplay.length === 0) {
        expression.textContent = 0;
    }
}

