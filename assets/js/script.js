class Calculator {
  tempNum = 0;
  constructor(prevNum, curNum) {
    this.prevNum = prevNum;
    this.curNum = curNum;
    this.clear();

  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    // Delete the last number of the user's input
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    // Check whether there was = operation, if so do not add numbers to
    // the computation's result
    if (number === undefined) {
      this.currentOperand = '00'
    }
    // Check if there is only one . in the user's input
    else if (number === '.' && this.currentOperand.includes('.')) return;
    // Limit user's input
    else if (this.currentOperand.toString().length >= 15) return;
    // Add number to the input
    else {
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
  }

  chooseOperation(operation) {
    //Check whether there was an = operation before
    if (this.currentOperand === '00') {
      this.currentOperand = this.tempNum
    }
    // Check if there is no any second number: if so, do nothing
    if (this.currentOperand === '') return;
    // Check if there are both numbers, make calculation
    if (this.previousOperand !== '') {
      this.compute();
    }
    // Update value of the variables
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    // Create variable for the calculation result
    let calcResult;
    // Convert strings to a bloating-point number
    const previous = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    // Check if we have real numbers from the user. If not, do nothing
    if (isNaN(previous) || isNaN(current)) return;
    // Check which operation was used and compute
    switch (this.operation) {
      case '+':
        calcResult = previous + current;
        break;
      case '-':
        calcResult = previous - current;
        break;
      case '*':
        calcResult = previous * current;
        break;
      case 'X':
        calcResult = previous * current;
        break;
      case '/':
        calcResult = previous / current;
        break;
      default:
        return;
    }
    // Update value of the variables  
    this.currentOperand = calcResult;
    this.operation = undefined;
    this.previousOperand = '';
    this.tempNum = calcResult;
  }

  getDisplayNumber(number) {
    // Helper function
    // Getting string, splitting into 2 parts by (.)
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      // Formatting the number according to English convention 
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0
      });
    }
    // If decimal digits exist, return the following string 
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.curNum.innerText =
      this.getDisplayNumber(this.currentOperand);
    // If operation applied, push previous number and the operation to the top
    if (this.operation != null) {
      this.prevNum.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
      // Otherwise, push nothing
    } else {
      this.prevNum.innerText = '';
    }
  }
}

// Variables:
const keysNum = document.querySelectorAll('[data-number]');
const keysOperation = document.querySelectorAll('[data-operation]');
const keyEqual = document.querySelector('[data-equals]');
const keyDel = document.querySelector('[data-delete]');
const keyReset = document.querySelector('[data-reset]');
const prevNum = document.getElementById('previous_output');
const curNum = document.getElementById('current_output');
const theme1 = document.getElementById('toggle__theme--1');
const theme2 = document.getElementById('toggle__theme--2');
const theme3 = document.getElementById('toggle__theme--3');

const calculator = new Calculator(prevNum, curNum);

document.addEventListener('DOMContentLoaded', function () {

  // Event listeners to change the theme
  theme1.addEventListener('click', () => {
    deleteTheme2();
    deleteTheme3();
  });

  theme2.addEventListener('click', () => {
    addTheme2();
    deleteTheme3();
  });

  theme3.addEventListener('click', () => {
    deleteTheme2();
    addTheme3();
  });
  //
  keysNum.forEach(keyNum => {
    keyNum.addEventListener('click', () => {
      calculator.appendNumber(keyNum.innerText);
      calculator.updateDisplay();
    });
  });
  keysOperation.forEach(keyOperation => {
    keyOperation.addEventListener('click', () => {
      calculator.chooseOperation(keyOperation.innerText);
      calculator.updateDisplay();
    });
  });

  keyEqual.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
    calculator.appendNumber();
  });

  keyReset.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
  });

  keyDel.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      calculator.compute();
      calculator.updateDisplay();
      calculator.appendNumber();
    } else if (event.key === 'Backspace') {
      calculator.delete();
      calculator.updateDisplay();
    } else if (event.key === '+') {
      calculator.chooseOperation('+');
      calculator.updateDisplay();
    } else if (event.key === '-') {
      calculator.chooseOperation('-');
      calculator.updateDisplay();
    } else if (event.key === '/') {
      calculator.chooseOperation('/');
      calculator.updateDisplay();
    } else if (event.key === '*') {
      calculator.chooseOperation('*');
      calculator.updateDisplay();
    } else if (event.key === 'Escape') {
      calculator.clear();
      calculator.updateDisplay();
    } else if (event.key === '.') {
      calculator.appendNumber('.');
      calculator.updateDisplay();
    } else if (event.key === '0') {
      calculator.appendNumber('0');
      calculator.updateDisplay();
    } else if (event.key === '1') {
      calculator.appendNumber('1');
      calculator.updateDisplay();
    } else if (event.key === '2') {
      calculator.appendNumber('2');
      calculator.updateDisplay();
    } else if (event.key === '3') {
      calculator.appendNumber('3');
      calculator.updateDisplay();
    } else if (event.key === '4') {
      calculator.appendNumber('4');
      calculator.updateDisplay();
    } else if (event.key === '5') {
      calculator.appendNumber('5');
      calculator.updateDisplay();
    } else if (event.key === '6') {
      calculator.appendNumber('6');
      calculator.updateDisplay();
    } else if (event.key === '7') {
      calculator.appendNumber('7');
      calculator.updateDisplay();
    } else if (event.key === '8') {
      calculator.appendNumber('8');
      calculator.updateDisplay();
    } else if (event.key === '9') {
      calculator.appendNumber('9');
      calculator.updateDisplay();
    }
  });
});

const deleteTheme2 = function () {
  document.querySelector('body').classList.remove('body--light');
  document.querySelector('.toggle__inputs').classList.remove('toggle__inputs--light');
  document.querySelector('.output').classList.remove('output--light');
  document.querySelector('.current-operand').classList.remove('current-operand--light');
  document.querySelector('.previous-operand').classList.remove('previous-operand--light');
  document.querySelector('.keyboard__container').classList.remove('keyboard__container--light');
  document.querySelectorAll('.btn').forEach(button => {
    button.classList.add('btn--light');
  });
  document.querySelector('.btn--blue').classList.remove('btn--blue--light');
  document.querySelector('.btn--reset').classList.remove('btn--blue--light');
  document.querySelector('.btn--red').classList.remove('btn--red--light');
  document.querySelector('.attribution').classList.remove('attribution--light');
  document.querySelector('.credits_link-1').classList.remove('credits_link--light');
  document.querySelector('.credits_link-2').classList.remove('credits_link--light');
};

const deleteTheme3 = function () {
  document.querySelector('body').classList.remove('body--purple');
  document.querySelector('.toggle__inputs').classList.remove('toggle__inputs--purple');
  document.querySelector('.output').classList.remove('output--purple');
  document.querySelector('.current-operand').classList.remove('current-operand--purple');
  document.querySelector('.keyboard__container').classList.remove('keyboard__container--purple');
  document.querySelectorAll('.btn').forEach(button => {
    button.classList.remove('btn--purple');
  });
  document.querySelector('.btn--blue').classList.remove('btn--blue--purple');
  document.querySelector('.btn--reset').classList.remove('btn--blue--purple');
  document.querySelector('.btn--red').classList.remove('btn--red--purple');
  document.querySelector('.attribution').classList.remove('attribution--purple');
  document.querySelector('.credits_link-1').classList.remove('credits_link--purple');
  document.querySelector('.credits_link-2').classList.remove('credits_link--purple');
};

const addTheme2 = function () {
  document.querySelector('body').classList.add('body--light');
  document.querySelector('.toggle__inputs').classList.add('toggle__inputs--light');
  document.querySelector('.output').classList.add('output--light');
  document.querySelector('.current-operand').classList.add('current-operand--light');
  document.querySelector('.previous-operand').classList.add('previous-operand--light');
  document.querySelector('.keyboard__container').classList.add('keyboard__container--light');
  document.querySelectorAll('.btn').forEach(button => {
    button.classList.add('btn--light');
  });
  document.querySelector('.btn--blue').classList.add('btn--blue--light');
  document.querySelector('.btn--reset').classList.add('btn--blue--light');
  document.querySelector('.btn--red').classList.add('btn--red--light');
  document.querySelector('.attribution').classList.add('attribution--light');
  document.querySelector('.credits_link-1').classList.add('credits_link--light');
  document.querySelector('.credits_link-2').classList.add('credits_link--light');
};

const addTheme3 = function () {
  document.querySelector('body').classList.add('body--purple');
  document.querySelector('.toggle__inputs').classList.add('toggle__inputs--purple');
  document.querySelector('.output').classList.add('output--purple');
  document.querySelector('.current-operand').classList.add('current-operand--purple');
  document.querySelector('.keyboard__container').classList.add('keyboard__container--purple');
  document.querySelectorAll('.btn').forEach(button => {
    button.classList.add('btn--purple');
  });
  document.querySelector('.btn--blue').classList.add('btn--blue--purple');
  document.querySelector('.btn--reset').classList.add('btn--blue--purple');
  document.querySelector('.btn--red').classList.add('btn--red--purple');
  document.querySelector('.attribution').classList.add('attribution--purple');
  document.querySelector('.credits_link-1').classList.add('credits_link--purple');
  document.querySelector('.credits_link-2').classList.add('credits_link--purple');
};