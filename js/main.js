const yatFilomuzSwiper = new Swiper('.yat-filomuz__swiper', {
  freeMode: true,
  loop: true,
  spaceBetween: 60,

  keyboard: {
    enabled: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    769: {
      slidesPerView: "auto",
    }
  }
});

const hakkımızdaSwiper = new Swiper('.hakkımızda__swiper', {
  slidesPerView: "auto",
  spaceBetween: 16,

  breakpoints: {
    769: {
      spaceBetween: 44,
    }
  }
});

const özelImkanlarSwiper = new Swiper('.özel-imkanlar__swiper', {
  slidesPerView: "auto",
  spaceBetween: 24,

  breakpoints: {
    1440: {
      direction: "vertical",
      spaceBetween: 0,
    }
  }
});

const yormularSwiper = new Swiper('.yorumlar__swiper', {
  loop: true,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: "auto",
    }
  }
})

const nedenBiziSwiper = new Swiper(".neden-bizi__swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,

  breakpoints: {
    768: {
      spaceBetween: 0,
    }
  }
})

// const burgerButton = document.querySelector('.nav__burger-link');
// const closeButton = document.querySelector('.nav__menu-close');
// const pageBody = document.querySelector('.page__body');
// const pageMenu = document.querySelector('.page__menu');

// burgerButton.addEventListener('click', () => {
//   pageBody.classList.add('page__body--with-menu');
//   pageMenu.classList.add('page__menu--visible');
// });

// closeButton.addEventListener('click', () => {
//   pageBody.classList.remove('page__body--with-menu');
//   pageMenu.classList.remove('page__menu--visible');
// });

// const cookiesBlock = document.querySelector('.accept-cookies');
// const acceptButton = document.querySelector('.accept-cookies__action-button');

// acceptButton.addEventListener('click', () => {
//   cookiesBlock.classList.add('accept-cookies--fade-out');

//   setTimeout(() => {
//     cookiesBlock.style.display = 'none';
//   }, 500);
// });

