// variables

const numBtns = document.querySelectorAll('[data-number]');
const operantBtns = document.querySelectorAll('[data-operation]');
const deleteBtn = document.querySelector('[data-delete]');
const resetBtn = document.querySelector('[data-reset]');
const equalBtn = document.querySelector('[data-equal]');
const inputOutput = document.querySelector('[data-input-output]');

// const calculator = new Calculator(inputOutput)

/**
 * Loop though each number btn,
 * listens for a click,
 * add numbers and update the display
 */
numBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    return
  })
})

/**
 * Loop though each operator btn,
 * listens for a click,
 * add operation and update the display
 */
operantBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    calculator.chooseOperation(btn.innerText)
    calculator.updateDisplay()
  })
})

equalBtn.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

resetBtn.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteBtn.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

inputOutput