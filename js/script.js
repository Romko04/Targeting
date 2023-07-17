/* Burger */
const menuItems = document?.querySelectorAll('.header__menu-items');
const burger = document?.querySelector('.header__burger');
const menu = document?.querySelector('.menu__body');
const body = document?.querySelector('body');
new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true'
  },
  breakpoints: {
    1189: {
      slidesPerView: 4
    }
  }
});

document.addEventListener('click', (e) => {
  e.preventDefault()
  if (e.target.classList.contains('anchor')) {
      anchorClick(e.target)
  }
  if (e.target.classList.contains('header__burger')) {
      toggleMenu()
  }
})
function anchorClick(e) {
  if (menu.classList.contains('active')) {
    toggleMenu()
  }
  const blockId = e.getAttribute('href')
  document.querySelector('' + blockId).scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  })
}
function toggleMenu() {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
  burger.classList.contains('active') ? document.body.classList.add('scroll--block') : document.body.classList.remove('scroll--block')
}
