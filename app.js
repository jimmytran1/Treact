const toggleButton = document.getElementsByClassName('btn__menu')[0]
const navbarLinks = document.getElementsByClassName('nav__links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('toggle')
})