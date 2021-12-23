// Variables:
const keysNum = document.querySelectorAll('[data-number]')
const keysOperation = document.querySelectorAll('[data-operation]')
const keyEqual = document.querySelector('[data-equals]')
const keyDel = document.querySelector('[data-delete]')
const keyReset = document.querySelector('[data-reset]')
const prevNum = document.getElementById('previous_output')
const curNum = document.getElementById('current_output')

const calculator = new Calculator(prevNum, curNum)

document.addEventListener('DOMContentLoaded', function () {
  //
  keysNum.forEach(keyNum => {
    keyNum.addEventListener('click', () => {
      calculator.appendNumber(keyNum.innerText)
      calculator.updateDisplay()
    })
  })
  keysOperation.forEach(keyOperation => {
    keyOperation.addEventListener('click', () => {
      calculator.chooseOperation(keyOperation.innerText)
      calculator.updateDisplay()
    })
  })

  keyEqual.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
  })

  keyReset.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
  })

  keyDel.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
  })

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      calculator.compute()
      calculator.updateDisplay()
    } else if (event.key === 'Backspace') {
      calculator.delete()
      calculator.updateDisplay()
    } else if (event.key === '+') {
      calculator.chooseOperation('+')
      calculator.updateDisplay()
    } else if (event.key === '-') {
      calculator.chooseOperation('-')
      calculator.updateDisplay()
    } else if (event.key === '/') {
      calculator.chooseOperation('/')
      calculator.updateDisplay()
    } else if (event.key === '*') {
      calculator.chooseOperation('*')
      calculator.updateDisplay()
    } else if (event.key === 'Escape') {
      calculator.clear()
      calculator.updateDisplay()
    } else if (event.key === '0') {
      calculator.appendNumber(0)
      calculator.updateDisplay()
    } else if (event.key === '1') {
      calculator.appendNumber(1)
      calculator.updateDisplay()
    } else if (event.key === '2') {
      calculator.appendNumber(2)
      calculator.updateDisplay()
    } else if (event.key === '3') {
      calculator.appendNumber(3)
      calculator.updateDisplay()
    } else if (event.key === '4') {
      calculator.appendNumber(4)
      calculator.updateDisplay()
    } else if (event.key === '5') {
      calculator.appendNumber(5)
      calculator.updateDisplay()
    } else if (event.key === '6') {
      calculator.appendNumber(6)
      calculator.updateDisplay()
    } else if (event.key === '7') {
      calculator.appendNumber(7)
      calculator.updateDisplay()
    } else if (event.key === '8') {
      calculator.appendNumber(8)
      calculator.updateDisplay()
    } else if (event.key === '9') {
      calculator.appendNumber(9)
      calculator.updateDisplay()
    }
  });
});