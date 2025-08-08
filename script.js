 // Datos de las imágenes
import { images } from './imagenes.js'   
import { crearGaleria } from './dom.js'
import { openModal, changeSlide, closeModal } from './modal.js'





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
      

      

  

  
 
