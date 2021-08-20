ScrollReveal().reveal(".works__item", {
  delay: 500,
  duration: 1600,
  origin: "bottom",
  distance: "100px",
});

ScrollReveal().reveal(".profile__whiteArea-imgsm", {
  duration: 2000,
  distance: "80px",
  origin: "bottom",
  delay: 500,
});

ScrollReveal().reveal(".profile__whiteArea-imgbg", {
  duration: 2000,
  distance: "80px",
  origin: "bottom",
  delay: 800,
});

var myswiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  breakpoints: {
    376: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.9,
      spaceBetween: 10,
    },
    1025: {
      slidesPerView: 1.9,
      spaceBetween: 10,
    },
  },
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(function () {
  $('a[href^="#"]').click(function () {
    let speed = 400;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

jQuery(function ($) {
  $(".menu a[href]").on("click", function () {
    $(".menu__line").toggleClass("active");
    $(".menu__title").toggleClass("active");
    $(".gnav").fadeToggle();
  });
});

//type
ityped.init("#js-typing-target", {
  strings: ["ポートフォリオサイト"],
  typeSpeed: 100,
  startDelay: 2700,
  loop: false,
  showCursor: true,
});

//load
$(window).on("load", function () {
  $("#splash-logo").delay(1.0).fadeOut("slow");
  $("#splash")
    .delay(500)
    .fadeOut("slow", function () {
      $("body").addClass("appear");
    });
  $(".splashbg").on("animationend", function () {});
});

//blur
function BlurTextAnimeControl() {
  $(".blurTrigger").each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("blur");
    } else {
      $(this).removeClass("blur");
    }
  });
}
$(window).scroll(function () {
  BlurTextAnimeControl();
});

//modal
$("#modal").animatedModal({
  animatedIn: "fadeIn",
  animatedOut: "fadeOut",
});

const link = document.getElementById("link"); //ここではIDで指定してます。
window.open(link, "_blank");

//scrollaction
$(window).on("scroll", function () {
  $(".JS_ScrollAnimationItem").each(function () {
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight) {
      $(this).addClass("isActive");
    }
  });
});
