const calcDisplay = document.getElementById('calc_display');
const btnsContainer = document.getElementById('btns__all');
const btns = document.querySelectorAll('button');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const btnValue = btn.textContent
    console.log(btnValue)
    if () {

    }
    calcDisplay.value = btnValue
  })
})