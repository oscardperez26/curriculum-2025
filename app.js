let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarmenuoculto() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
/**slider ceritficaicones */
document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  window.moveSlide = function (step) {
    index = (index + step + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
  };
});
