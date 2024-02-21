const swiper = new Swiper(".swiper", {
  // centerSlide
  slidesPerView: "1.1",
  centeredSlides: false,
  spaceBetween: 10,

  //loop
  loop: false,

  //nextSlide
  mousewheel: true,

  //slideSpeed
  speed: 1500,

});

window.addEventListener("scroll", function () {
  const image = document.getElementById("arrow");
  const scrollPosition = window.scrollY;
  const bottomOfPage = document.body.scrollHeight - window.innerHeight;

  if (scrollPosition >= bottomOfPage - 5) {
    image.style.transition = "visibility 0.1s";
    image.style.visibility = "hidden";
  } else {
    image.style.transition = "visibility 0.1s";
    image.style.visibility = "visible";
  }
});

let idx = 0;
let isScrolling = false;

const select = document.querySelector(".background");
const inner = select.querySelectorAll(".page1, .page2, .page3, .page4");

$(window).on('wheel', function(e) {
  if (isScrolling) return; // 이미 스크롤 중이면 무시
  isScrolling = true;
  
  const deltaY = e.originalEvent.deltaY;
  const scrollAmount = 100; // 스크롤 감도 조절

  if (deltaY > 0) {
    idx = Math.min(idx + 1, inner.length - 1);
  } else {
    idx = Math.max(idx - 1, 0);
  }

  $('html,body').stop().animate({
    scrollTop: $(inner[idx]).offset().top // 다음 페이지의 시작 위치로 스크롤
  }, 600, function() {
    isScrolling = false;
  });

  // 스크롤 감쇠
  setTimeout(function() {
    isScrolling = false;
  }, 100);
});
