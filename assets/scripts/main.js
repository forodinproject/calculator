let num1, operator, num2;
let operators = ['+', '-', '/', '×', '%', '+/-'];
let arrExpressionDisplay = [];
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
    else if (clickedVal === '=') {

        if (arrExpressionDisplay.includes('+')) {
            let arrAdd = arrExpressionDisplay.join("").split('+');
            num1 = Number(arrAdd[0])
            operator = '+'
            num2 = Number(arrAdd[1])
            operate(num1, operator, num2)
        }

    }
    else if (clickedVal !== '' && clickedVal !== undefined) {
        if (operators.includes(clickedVal)) {
            if (operators.includes(arrExpressionDisplay[arrExpressionDisplay.length - 1])) {
                arrExpressionDisplay.pop()
            }

        }
        arrExpressionDisplay.push(clickedVal);

        //first element should not be operator or decimal point
        if (operators.includes(arrExpressionDisplay[0]) || arrExpressionDisplay[0] === '.') {
            arrExpressionDisplay.shift();
        }

        //two consecutive decimals not allowed
        if (arrExpressionDisplay[arrExpressionDisplay.length - 1] === '.' && arrExpressionDisplay[arrExpressionDisplay.length - 2] === '.') {
            arrExpressionDisplay.pop()
        }

        //decimal can not be followed by operator
        if (arrExpressionDisplay[arrExpressionDisplay.length - 2] === '.' && operators.includes(arrExpressionDisplay[arrExpressionDisplay.length - 1])) {
            arrExpressionDisplay.pop()
        }

        //operator can not be followed by decimal
        if (operators.includes(arrExpressionDisplay[arrExpressionDisplay.length - 2]) && arrExpressionDisplay[arrExpressionDisplay.length - 1] === '.') {
            arrExpressionDisplay.pop()
        }

        if (clickedVal === '.') {

            if (arrExpressionDisplay.indexOf('.') !== arrExpressionDisplay.lastIndexOf('.')) {
                if (!arrExpressionDisplay.includes(operators))
                    arrExpressionDisplay.pop()
            }
            // else if (arrExpressionDisplay.includes(operators)) {

            // }
        }


    }
    setExpressionDisplay(arrExpressionDisplay);
    if (arrExpressionDisplay.length === 0)
        expression.textContent = '0';

}

function setExpressionDisplay(arrExpressionDisplay) {
    expression.textContent = arrExpressionDisplay.join('');
}


function setResultDisplay(resultVal) {
    result.textContent = resultVal;
    arrExpressionDisplay = [resultVal];
}



function add(num1, num2) {
    let sum = +num1 + +num2;
    console.log(sum)
    setResultDisplay(sum)
}

function subtract(num1, num2) {
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
        subtract(num1, num2);
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
    arrExpressionDisplay = [];
    result.textContent = 0;

}

let backspaceBtn = document.querySelector('.backspaceBtn')
function backspace() {
    arrExpressionDisplay.pop();
    if (arrExpressionDisplay.length === 0) {
        expression.textContent = 0;
    }
}

