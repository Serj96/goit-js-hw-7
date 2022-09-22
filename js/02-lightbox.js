import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = makeGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function makeGalleryMarkup(pictures) {
  return pictures
    .map(({ preview, original, description }) => {
        return `
      <li class="gallery__item">
      <a class="gallery__link" 
      href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
      </a>
      </li>`;
    })
    .join('');
}

const modal = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  

console.log(galleryItems);