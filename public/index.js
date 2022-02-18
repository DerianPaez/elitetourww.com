const menu = document.getElementById('menu')
const menuOpen = document.getElementById('menu-icon-open')
const menuClose = document.getElementById('menu-icon-close')

menuOpen.addEventListener('click', () => {
  menu.classList.toggle('active')
})

menuClose.addEventListener('click', () => {
  menu.classList.remove('active')
})