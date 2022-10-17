var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    effect: "cube",
    speed: 10000,
    loop: true,
    loopPreventsSlide:false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000
    }
});