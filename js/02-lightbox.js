import { galleryItems } from './gallery-items.js';
// Change code below this line
const divConteiner = document.querySelector('.gallery');
const cardsMarkup = getElemeentImg(galleryItems);
divConteiner.insertAdjacentHTML('beforeend', cardsMarkup);


let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250});


function getElemeentImg(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>`
    }).join('');
}


