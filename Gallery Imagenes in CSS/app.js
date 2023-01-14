let images = document.querySelectorAll("#image-container img");
  let currentIndex = 0;

  //ocultar las imágenes
  images.forEach(function(image) {
    image.classList.add("hidden");
  });
  // mostrar la primera imagen
  images[currentIndex].classList.remove("hidden");

  let nextButton = document.querySelector("#next-button");
  nextButton.addEventListener("click", function() {
    // ocultar la imagen actual
    images[currentIndex].classList.add("hidden");
    // aumentar el indice
    currentIndex = (currentIndex + 1) % images.length;
    // mostrar la siguiente imagen
    images[currentIndex].classList.remove("hidden");
  });