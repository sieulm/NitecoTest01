var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {

        1280: {
            slidesPerView: 3,
            spaceBetween: 20
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },

        375: {
            slidesPerView: 1,
        }
    }
});
