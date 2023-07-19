import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { getFirstWord } from 'src/utils/getClassName';


const mobileSliders = document.querySelectorAll<HTMLElement>("[element='mobile-slider']");

if (window.innerWidth < 767) {
    mobileSliders.forEach((e) => {
        console.log(e)
        const wrapper = e.querySelector<HTMLElement>("[element='wrapper']");
        const list = e.querySelector<HTMLElement>("[element='list']");
        const item = e.querySelector<HTMLElement>("[element='item']");
        const nav = e.querySelector<HTMLElement>("[element='navigation']");
        const nextArrow = nav!.querySelector<HTMLElement>("[element='next-arrow']");
        const prevArrow = nav!.querySelector<HTMLElement>("[element='prev-arrow']");

        const listRaw = list!.className;
        const itemRaw = item!.className;

        const listClass = getFirstWord(listRaw);
        const itemClass = getFirstWord(itemRaw);
        console.log(wrapper)

        if (wrapper) {
            const swiper = new Swiper(wrapper, {
                modules: [Navigation, Pagination],
                speed: 400,
                spaceBetween: 24,
                slidesPerView: 1,
                loop: true,
                direction: 'horizontal',
                wrapperClass: listClass!,
                slideClass: itemClass!,
                navigation: {
                    nextEl: nextArrow,
                    prevEl: prevArrow,
                }
            });
            console.log(swiper)
        }
    });
}