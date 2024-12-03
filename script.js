let currentInput = '0';
let operationHistory = '';
let operationDisplay = document.getElementById('operation');
let resultDisplay = document.getElementById('result');

function appendNumber(number) {
  if (currentInput === '0' && number !== '.') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  if ('+-*/%'.includes(currentInput.slice(-1))) return;

  operationHistory += currentInput + ' ' + operator + ' ';
  currentInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  operationHistory = '';
  updateDisplay();
}

function calculate() {
  try {
    operationHistory += currentInput;
    currentInput = eval(operationHistory.replace('×', '*').replace('÷', '/')).toString();
    updateDisplay(true);
  } catch {
    currentInput = 'Error';
    updateDisplay();
  }
}

function toggleSign() {
  if (currentInput !== '0') {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
  }
}

function updateDisplay(isCalculation = false) {
  operationDisplay.textContent = operationHistory;
  resultDisplay.textContent = currentInput;

  if (isCalculation) {
    operationHistory = '';
  }
}
