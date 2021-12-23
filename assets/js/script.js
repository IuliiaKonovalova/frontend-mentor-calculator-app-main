class Calculator {
  constructor(prevNum, curNum) {
    this.prevNum = prevNum
    this.curNum = curNum
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
    // Delete the last number of the user's input
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    // Check if there is only one . in the user's input
    if (number === '.' && this.currentOperand.includes('.')) return
    // Limit user's input
    if (this.currentOperand.toString().length >= 15) return
    // Add number to the input
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    // Check if there is no any second number: if so, do nothing
    if (this.currentOperand === '') return
    // Check if there are both numbers, make calculation
    if (this.previousOperand !== '') {
      this.compute()
    }
    // Update value of the variables
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    // Create variable for the calculation result
    let calcResult
    // Convert strings to a bloating-point number
    const previous = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    // Check if we have real numbers from the user. If not, do nothing
    if (isNaN(previous) || isNaN(current)) return
    // Check which operation was used and compute
    switch (this.operation) {
      case '+':
        calcResult = previous + current
        break
      case '-':
        calcResult = previous - current
        break
      case '*':
        calcResult = previous * current
        break
      case 'X':
        calcResult = previous * current
        break
      case '/':
        calcResult = previous / current
        break
      default:
        return
    }
    // Update value of the variables  
    this.currentOperand = calcResult
    this.operation = undefined
    this.previousOperand = ''
  }

  getDisplayNumber(number) {
    // Helper function
    // Getting string, splitting into 2 parts by (.)
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      // Formatting the number according to English convention 
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0
      })
    }
    // If decimal digits exist, return the following string 
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.curNum.innerText =
      this.getDisplayNumber(this.currentOperand)
    // If operation applied, push previous number and the operation to the top
    if (this.operation != null) {
      this.prevNum.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      // Otherwise, push nothing
    } else {
      this.prevNum.innerText = ''
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