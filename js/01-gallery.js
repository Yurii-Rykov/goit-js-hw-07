import { galleryItems } from './gallery-items.js';
// Change code below this line
const divConteiner = document.querySelector('.gallery');
const cardsMarkup = getElemeentImg(galleryItems);
divConteiner.insertAdjacentHTML('beforeend', cardsMarkup);
divConteiner.addEventListener('click', onClickImages);


function getElemeentImg(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return ` <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
             class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
             </a>
        </div> `
    }).join('');
}

function onClickImages(event) {
    event.preventDefault()   /* <----------- відміна перезавантаження сторінки браузера */
    
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `)

    instance.show()
    // console.log(event.target.dataset.source) 
}


