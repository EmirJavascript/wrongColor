const buttons = document.querySelectorAll('.color')
const colors = ['#fc5', '#5cf', '#5c5', '#e41', '#d6f']

let currentColor = 0

const changeColor = (index) => {
  document.body.style.background = colors[0]
  buttons.forEach((btn) => {
    btn.classList.remove('active')
  })
  buttons[index].classList.add('active')
}

buttons.forEach((btn, index) => {
  btn.style.background = colors[index]
  
  btn.addEventListener('click', (e) => {
    changeColor(index)
  })
})
buttons[0].classList.add('active')