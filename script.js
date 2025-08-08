 // Datos de las imágenes
import { images } from './imagenes.js'   
import { crearGaleria } from './dom.js'

let currentImageIndex = 0;

// Abrir modal con imagen específica
function openModal(index) {
    currentImageIndex = index;
    updateModalContent();
    document.getElementById("imageModal").style.display = "block";
    document.body.style.overflow = "hidden"; // Prevenir scroll del body
}

// Cerrar modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// Cambiar imagen en el modal
function changeSlide(direction) {
    currentImageIndex += direction;

    // Navegación circular
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    updateModalContent();
}

      // Actualizar contenido del modal
function updateModalContent() {
    const image = images[currentImageIndex];
    document.getElementById("modalImage").src = image.src;
    document.getElementById("modalImage").alt = image.alt;
    document.getElementById("modalTitle").textContent = image.title;
    document.getElementById("modalDescription").textContent =
        image.description;
    document.getElementById("currentSlide").textContent =
        currentImageIndex + 1;
    document.getElementById("totalSlides").textContent = images.length;
}

// Navegación con teclado
document.addEventListener("keydown", function (event) {
const modal = document.getElementById("imageModal");
    if (modal.style.display === "block") {
        switch (event.key) {
        case "Escape":
            closeModal();
            break;
        case "ArrowLeft":
            changeSlide(-1);
            break;
        case "ArrowRight":
            changeSlide(1);
            break;
        }
    }
});

      
const galeryGrid = document.querySelector('.gallery-grid');
crearGaleria({galeryGrid, images, openModal})      

document.querySelector('#imageModal').addEventListener('click', () => closeModal())
document.querySelector('.prev').addEventListener('click', (e) => {
      changeSlide(-1);
      e.stopPropagation()
})
document.querySelector('.next').addEventListener('click', (e) => {
    changeSlide(1);
    e.stopPropagation()
})
document.querySelector('.modal-content').addEventListener('click', (e) => e.stopPropagation())
      

      

  

  
 
