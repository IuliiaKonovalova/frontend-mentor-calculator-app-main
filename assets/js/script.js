class Calculator {
  constructor(inputOutput) {
    this.inputOutput
    this.clear()
  }

  reset() {

  }


  delete() {
    this.inputOutput = ''
    this.operation = undefined
  }

  addNumber(number) {

  }

  chooseOperation(operation) {

  }

  compute() {

  }

  updateDisplay() {

  }
}

// variables

const numBtns = document.querySelectorAll('[data-number]');
const operantBtns = document.querySelectorAll('[data-operation]');
const deleteBtn = document.querySelector('[data-delete]');
const resetBtn = document.querySelector('[data-reset]');
const equalBtn = document.querySelector('[data-equal]');
const inputOutput = document.querySelector('[data-input-output]');

module.exports = {
  Calculator
};