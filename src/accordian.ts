const links = document.querySelectorAll<HTMLElement>('[faq-link]');

links.forEach((e) => {
    e.addEventListener('click', () => {
        const parent = e.parentNode! as HTMLElement | null;
        const arrow = e.querySelector('.icon-embed-small');

        arrow?.classList.toggle('is-rotated');
        parent?.classList.toggle('is-open');
    });
});
