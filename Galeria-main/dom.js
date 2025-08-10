export function crearGaleria({images, openModal, galeryGrid}) {
    images.forEach((image, index) => {
    const div = document.createElement('div');
    div.classList.add('gallery-item');

    const img = document.createElement('img');
    img.classList.add('thumbnail');
    img.src = image.src;
    img.alt = image.alt;

    const div2 = document.createElement('div');
    div2.classList.add('overlay');

    const span = document.createElement('span');
    span.classList.add('view-text');
    span.textContent = 'Ver imagen';

    div2.appendChild(span);
    div.appendChild(img);
    div.appendChild(div2);
    galeryGrid.appendChild(div);

    div.addEventListener('click', () => openModal(index));
    });
}