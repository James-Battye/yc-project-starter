// How to use: https://jamesbattye.notion.site/Slider-Swiper-68ab88ffc62f42c090957922f9bf8376?pvs=4
// Watch this
// If you're getting red lines under the next 2 lines, write this in your terminal 'sudo pnpm i' 
// then write 'pnpm install swiper' in the terminal after that.
// Copy this and paste it on a new ts file for each unique slider design on the site. 

import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { getFirstWord } from 'src/utils/getClassName';

const identifier = ''
const sliders = document.querySelectorAll<HTMLElement>(`[${identifier}-element='slider-component']`);

sliders.forEach((e) => {
  const wrapper = e.querySelector<HTMLElement>(`[${identifier}-element='wrapper']`);
  const list = e.querySelector<HTMLElement>(`[${identifier}-element='list']`);
  const item = e.querySelector<HTMLElement>(`[${identifier}-element='item']`);
  const nav = e.querySelector<HTMLElement>(`[${identifier}-element='navigation']`);
  const paginationElement = e.querySelector<HTMLElement>(`[${identifier}-element='pagination']`)
  const nextArrow = nav!.querySelector<HTMLElement>(`[${identifier}-element='next-arrow']`);
  const prevArrow = nav!.querySelector<HTMLElement>(`[${identifier}-element='prev-arrow']`);
  const paginationDot = paginationElement?.querySelector<HTMLElement>(`[${identifier}-element='pagination-dot']`)
  const paginationActiveClass = 'is-active'

  const listClass = getFirstWord(list!);
  const itemClass = getFirstWord(item!);
  const paginationDotClass = getFirstWord(paginationDot!)

  if (wrapper) {
    const swiper = new Swiper(wrapper, {
      modules: [Navigation, Pagination],
      speed: 400,
      spaceBetween: 0,
      slidesPerView: 1,
      loop: true,
      direction: 'horizontal',
      wrapperClass: listClass!,
      slideClass: itemClass!,
      navigation: {
        nextEl: nextArrow,
        prevEl: prevArrow,
      },
      pagination: {
        el: paginationElement,
        bulletActiveClass: paginationActiveClass,
        bulletClass: paginationDotClass,
        bulletElement: "button",
        clickable: true
      }
    });
  }
});
