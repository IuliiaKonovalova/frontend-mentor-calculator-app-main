// variables

const numBtns = document.querySelectorAll('[data-number]');
const operantBtns = document.querySelectorAll('[data-operation]');
const deleteBtn = document.querySelector('[data-delete]');
const resetBtn = document.querySelector('[data-reset]');
const equalBtn = document.querySelector('[data-equal]');
const inputOutput = document.querySelector('[data-input-output]');

const calculator = new Calculator(inputOutput)

/**
 * Loop though each number btn,
 * listens for a click,
 * add numbers and update the display
 */
numBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    calculator.addNumber(btn.innerText)
    calculator.updateDisplay()
  })
})