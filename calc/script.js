let displayElement = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = null;

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.toString().slice(0, -1);
    updateDisplay();
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result;
    operator = null;
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    displayElement.innerText = currentInput;
    if (currentInput === '') {
        displayElement.innerText = '0';
    }
}
