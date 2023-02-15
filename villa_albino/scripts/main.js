const hamburgerButton = document.querySelector('.hamburger-button');

hamburgerButton.addEventListener('click', () => {
  hamburgerButton.classList.toggle('active');
});
const menu = document.querySelector('.menu');

hamburgerButton.addEventListener('click', () => {
  
  menu.classList.toggle('active');
});
function cambiarImagenes() {
    var imagenes = document.getElementById("portada").getElementsByTagName("img");
    var numImagenes = imagenes.length;
    var i = 0;
  
    setInterval(function() {
      imagenes[i].style.display = "flex";
      i = (i + 1) % numImagenes;
      imagenes[i].style.display = "flex";
    }, 3000);
  }
  
  cambiarImagenes();