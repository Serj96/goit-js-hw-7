import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const divRef = document.querySelector(".gallery");
const imgMarkup = imgGallery(galleryItems);

divRef.insertAdjacentHTML('beforeend', imgMarkup);

function imgGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
      })
      .join("");
  }

divRef.addEventListener('click', onDivRefClick);




function onDivRefClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
    
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="1280" height="auto">`, {
        onShow: () => window.addEventListener("keydown", onEsc),
        onClose: () => window.removeEventListener("keydown", onEsc)
    });
        
        function onEsc(event) {
            if (event.code === "Escape") {
                instance.close();
              }
          }
    instance.show();
  }








