
document.getElementById('menu-btn').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
  });
  

var swiper = new Swiper(".mySwiper", {
    loop: false,
    loopFillGroupWithBlank: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: "2",
        spaceBetween: 16,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: "2",
        spaceBetween: 16,
      },
      // when window width is >= 640px
      768: {
        slidesPerView: "3",
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: "3",
        spaceBetween: 32,
      },
      1336: {
        slidesPerView: "5",
        spaceBetween: 32,
      },
    },
  });


  