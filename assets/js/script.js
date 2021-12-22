const calcDisplay = document.getElementById('calc_display');
const btnsContainer = document.getElementById('btns__all');
const btns = document.querySelectorAll('button');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const btnValue = btn.textContent
    // console.log(btnValue)
    let calcDisplayValue
    const {
      type
    } = btn.dataset

    if (type === 'number') {
      if (calcDisplay.value === '') {
        calcDisplay.value = btnValue
        calcDisplayValue = btnValue
      } else if (calcDisplay.value === '0') {
        calcDisplay.value = btnValue
      } else {
        calcDisplay.value = calcDisplay.value + btnValue
        calcDisplayValue = calcDisplay.value
        console.log(calcDisplayValue)
      }
    } else if (type === 'operant') {
      console.log('operant')
    } else {
      console.log('fuck')
    }
  })
})