import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const divRef = document.querySelector('.gallery');

function imgGallery(items) {
    return items.map((img) => `<div class="gallery__item">
    <a class="gallery__link" href="${img.original}">
      <img
        class="gallery__image"
        src="${img.preview}"
        data-source="${img.original}"
        alt="${img.description}"
      />
    </a>
    </div>`).join("");
}

const addGalleryMarkup = imgGallery(galleryItems);
divRef.innerHTML =  addGalleryMarkup;




