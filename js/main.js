var swiper = new Swiper(".icon-swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    578: {
      slidesPerView: 5,
    },

    768: {
      slidesPerView: 6,
    },
    900: {
      slidesPerView: 8,
    },
    1200: {
      slidesPerView: 11,
    },
  },
});

// <======slider====>

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,

  freeMode: true,
  effect: "coverflow",
  centeredSlides: true,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 250,
    modifier: 2,
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    578: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    998: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2,
    },
  },
});
const playBtn = document.querySelector(".play-btn");
const slideOut = document.querySelector(".slide-out");
const moveOut = document.getElementById("movie-slow");
playBtn.addEventListener("click", (pause) => {
  slideOut.classList.toggle("slide-pause");
  moveOut.classList.toggle("slide-pause");
});

const dropit = document.getElementById("drop-list-mobile");
const magnify = document.getElementById("magnify-mobile");
dropit.style.display = "none";
magnify.addEventListener("click", (el) => {
  if (dropit.style.display == "none") {
    dropit.style.display = "block";
  } else {
    dropit.style.display = "none";
  }
});

$(function () {
  $("#magnify").click(function () {
    $("#drop-list").toggle();
  });
});
