const button = document.querySelector("#menu-btn");
const buttonClose = document.querySelector("#menu-close");
const menu = document.querySelector("#menu");
const header = document.querySelector("#header");
const toTop = document.querySelector("#toTop");

button.addEventListener("click", () => {
  header.classList.remove("overflow-hidden");
  header.classList.add("overflow-auto");
  button.classList.add("hidden");
  buttonClose.classList.remove("hidden");
  menu.classList.remove("translate-x-full");
  menu.classList.add("left-0");
});

buttonClose.addEventListener("click", () => {
  button.classList.remove("hidden");
  buttonClose.classList.add("hidden");
  menu.classList.add("translate-x-full");
  menu.classList.remove("left-0");
  header.classList.add("overflow-hidden");
  header.classList.remove("overflow-auto");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 2500,
  delay: 100,
  // reset: true,
});

sr.reveal(`.hero-img`);
sr.reveal(`.about-img`, { delay: 300 });

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
}

toTop.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
