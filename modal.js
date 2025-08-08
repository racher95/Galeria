import { images } from './imagenes.js'
// Abrir modal con imagen específica
let currentImageIndex = 0;
export function openModal(index) {
    currentImageIndex = index;
    updateModalContent();
    document.getElementById("imageModal").style.display = "block";
    document.body.style.overflow = "hidden"; // Prevenir scroll del body
}

// Cerrar modal
export function closeModal() {
    document.getElementById("imageModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// Cambiar imagen en el modal
export function changeSlide(direction) {
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
export function updateModalContent() {
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