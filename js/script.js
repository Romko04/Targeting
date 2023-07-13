/* Burger */
const menuItems = document?.querySelectorAll('.menu__body-items');
const burger = document?.querySelector('.header__burger');
const menu = document?.querySelector('.menu__body');
const disableScroll = () => {
    const fixBlocks = document?.querySelectorAll('.fixed-block');
    const pagePosition = window.scrollY;
    const paddingOffset = `${(window.innerWidth - vars.bodyEl.offsetWidth)}px`;

    vars.htmlEl.style.scrollBehavior = 'none';
    fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
    vars.bodyEl.style.paddingRight = paddingOffset;
    vars.bodyEl.classList.add('dis-scroll');
    vars.bodyEl.dataset.position = pagePosition;
    vars.bodyEl.style.top = `-${pagePosition}px`;
}


const enableScroll = () => {
    const fixBlocks = document?.querySelectorAll('.fixed-block');
    const body = document.body;
    const pagePosition = parseInt(vars.bodyEl.dataset.position, 10);
    fixBlocks.forEach(el => { el.style.paddingRight = '0px'; });
    vars.bodyEl.style.paddingRight = '0px';
  
    vars.bodyEl.style.top = 'auto';
    vars.bodyEl.classList.remove('dis-scroll');
    window.scroll({
      top: pagePosition,
      left: 0
    });
    vars.bodyEl.removeAttribute('data-position');
    vars.htmlEl.style.scrollBehavior = 'smooth';
  }

  
burger?.addEventListener('click', (e) => {
    console.log(menu);
    e.preventDefault()
    burger?.classList.toggle('active');
    menu?.classList.toggle('active');

    if (menu?.classList.contains('active')) {
        disableScroll();
    } else {
        enableScroll();
    }
});
menuItems?.forEach(el => {
    el.addEventListener('click', () => {
        burger.classList.remove('active');
        menu.classList.remove('active');
        enableScroll();
    });
});
