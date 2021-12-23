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


});


// module.exports = {
//   Calculator
// }