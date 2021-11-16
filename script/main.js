//плавная прокрутка
const menuLinks = document.querySelectorAll('.nav__item-link')

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClick)
  })
}
function onMenuLinkClick(e) {
  const menuLink = e.target
  console.log(menuLink)
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto)
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top

    window.scrollTo({
      top: gotoBlockValue,
      behavior: 'smooth',
    })
  }
}

//выдвижение формы покупки билетов

const btnOpenPanelBuyTicket = document.querySelector('.amount-tickets__button') //кнопка покупки билетов
const buyPanel = document.querySelector('.form-buy')
const btnClosePanelBuyTicket = document.querySelector('.form-buy__close')

btnOpenPanelBuyTicket.addEventListener('click', () => {
  //открытие формы покупки билетов
  buyPanel.classList.add('form-buy__active')
})

btnClosePanelBuyTicket.addEventListener('click', () => {
  //закрытие формы покупки билетов
  buyPanel.classList.remove('form-buy__active')
})

//меню бургер
const hederBurgerButton = document.querySelector('.menu-burger')
const hederNav = document.querySelector('.nav')
const hederTitle = document.querySelector('.welcome__title')
const hederText = document.querySelector('.welcome__text')
const hederButton = document.querySelector('.welcome__button')

hederBurgerButton.addEventListener('click', () => {
  hederNav.classList.add('nav-active')
  hederBurgerButton.classList.remove('menu-burger')
  hederBurgerButton.classList.add('menu-burger-active')
  hederBurgerClose = document.querySelector('.menu-burger-active')
  hederBurgerClose.addEventListener('click', closeNav)
  hederNav.style.left = '0'
  hederTitle.style.display = 'none'
  hederText.style.display = 'none'
  hederButton.style.display = 'none'
})

function closeNav() {
  hederBurgerClose = hederNav.classList.remove('nav-active')
  hederNav.style.left = '-100%'
  hederBurgerButton.classList.remove('menu-burger-active')
  hederBurgerButton.classList.add('menu-burger')
  hederTitle.style.display = 'block'
  hederText.style.display = 'block'
  hederButton.style.display = 'block'
  hederBurgerClose = ''
}
