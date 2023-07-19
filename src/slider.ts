// How to use: https://jamesbattye.notion.site/Slider-Swiper-68ab88ffc62f42c090957922f9bf8376?pvs=4
// Watch this
// If you're getting red lines under the next 2 lines, write this in your terminal 'sudo pnpm i' 
// then write 'pnpm install swiper' in the terminal after that.
import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { getFirstWord } from 'src/utils/getClassName';

const sliders = document.querySelectorAll<HTMLElement>("[element='slider-component']");

sliders.forEach((e) => {
  const wrapper = e.querySelector<HTMLElement>("[element='wrapper']");
  const list = e.querySelector<HTMLElement>("[element='list']");
  const item = e.querySelector<HTMLElement>("[element='item']");
  const nav = e.querySelector<HTMLElement>("[element='navigation']");
  const paginationElement = e.querySelector<HTMLElement>("[element='pagination']")
  const nextArrow = nav!.querySelector<HTMLElement>("[element='next-arrow']");
  const prevArrow = nav!.querySelector<HTMLElement>("[element='prev-arrow']");
  const paginationDot = paginationElement?.querySelector<HTMLElement>("[element='pagination-dot']")
  const paginationActiveClass = 'is-active'


  const listRaw = list!.className;
  const itemRaw = item!.className;
  const paginationDotRaw = paginationDot!.className;

  const listClass = getFirstWord(listRaw);
  const itemClass = getFirstWord(itemRaw);
  const paginationDotClass = getFirstWord(paginationDotRaw)

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
