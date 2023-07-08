import { Swiper } from 'swiper';
import 'swiper/swiper-bundle.css';

function getFirstWord(str: string): string {
  // Trim any leading or trailing spaces from the string
  str = str.trim();
  // Find the first space in the string
  const spaceIndex = str.indexOf(' ');
  if (spaceIndex === -1) {
    // If there are no spaces in the string, return the whole string
    return str;
  } else {
    // If there is a space in the string, return the substring before the space
    return str.substring(0, spaceIndex);
  }
}

const sliders = document.querySelectorAll<HTMLElement>("[element='slider-component']");

sliders.forEach((e) => {
  console.log(e);
  const wrapper = e.querySelector<HTMLElement>("[element='wrapper']");
  const list = e.querySelector<HTMLElement>("[element='list']");
  const item = e.querySelector<HTMLElement>("[element='item']");
  const nav = e.querySelector<HTMLElement>("[element='navigation']");
  const nextArrow = nav!.querySelector<HTMLElement>("[element='next-arrow']");
  const prevArrow = nav!.querySelector<HTMLElement>("[element='prev-arrow']");

  console.log({
    wrapper: wrapper,
    list: list,
    item: item,
    nav: nav,
    nextArrow: nextArrow,
    prevArrow: prevArrow,
  });

  const listRaw = list!.className;
  const itemRaw = item!.className;

  const listClass = getFirstWord(listRaw);
  const itemClass = getFirstWord(itemRaw);

  if (wrapper) {
    const swiper = new Swiper(wrapper, {
      speed: 400,
      spaceBetween: 16,
      slidesPerView: 3,
      direction: 'horizontal',
      wrapperClass: listClass!,
      slideClass: itemClass!,
      navigation: {
        nextEl: nextArrow,
        prevEl: prevArrow,
      },
    });
    nextArrow?.addEventListener('click', () => {
      swiper.slideNext();
    });
    prevArrow?.addEventListener('click', () => {
      swiper.slidePrev();
    });
  }
});
