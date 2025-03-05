//const carousel = document.querySelector('.carousel');
//const indicators = document.querySelectorAll('.indicator'); // Seleccionar los puntos de control
//let scrollAmount = 0;
//const slideWidth = 320; // Ancho de la tarjeta + margen
//let currentIndex = 0;
//
//function updateIndicators() {
//  indicators.forEach((indicator, index) => {
//    if (index === currentIndex) {
//      indicator.classList.add('active');
//    } else {
//      indicator.classList.remove('active');
//    }
//  });
//}
//
//function scrollToSlide(index) {
//  currentIndex = index;
//  scrollAmount = index * slideWidth;
//  carousel.scrollTo({
//    left: scrollAmount,
//    behavior: 'smooth'
//  });
//  updateIndicators();
//}
//
//function autoScroll() {
//  currentIndex++;
//  if (currentIndex >= indicators.length) {
//    currentIndex = 0;
//  }
//  scrollToSlide(currentIndex);
//}
//
//indicators.forEach((indicator, index) => {
//  indicator.addEventListener('click', () => {
//    scrollToSlide(index);
//  });
//});
//
//setInterval(autoScroll, 3000); // Cambia la velocidad del carrusel (3000ms = 3 segundos)
//
//updateIndicators(); // Inicializar los indicadores

const carousel = document.querySelector('.carousel');
let scrollAmount = 0;
const slideWidth = 320; // Ancho de la tarjeta + margen

function autoScroll() {
  scrollAmount += slideWidth;
  if (scrollAmount >= carousel.scrollWidth) {
    scrollAmount = 0;
  }
  carousel.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

setInterval(autoScroll, 3000);