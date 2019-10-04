"use strict";
import galleryItems from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const ligtboxImage = document.querySelector(".lightbox___image");
const ligtbox = document.querySelector(".lightbox__content");
const closeButton = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const creatGalleryItem = function(amount) {
  let result = [];
  let preview;
  let original;
  let description;
  const fragment = document.createDocumentFragment();
  amount.forEach(el => {
    preview = el.preview;
    original = el.original;
    description = el.description;
    const galleryListItem = `<li class="gallery__item">
    <a
      class="gallery__link"
       href= ${original}
    >
      <img
        class="gallery__image"
        src= ${preview}
        data-source=  ${original}
        alt= ${description}
      />

      <span class="gallery__icon">
        <i class="material-icons">zoom_out_map</i>
      </span>
    </a>
  </li>`;
    galleryList.insertAdjacentHTML("beforeend", galleryListItem);
  });
};
console.log(creatGalleryItem(galleryItems));
galleryList.addEventListener("click", e => {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  lightbox.classList.add("is-open");
  ligtboxImage.setAttribute("src", e.target.dataset.source);
  window.addEventListener("keydown", handleKeyPress);
});
closeButton.addEventListener("click", removeOverlay);
ligtbox.addEventListener("click", handleOverlayClick);

function removeOverlay() {
  lightbox.classList.remove("is-open");
  window.removeEventListener("keydown", handleKeyPress);
}

function handleKeyPress() {
  console.log("Escape");
  removeOverlay();
}

function handleOverlayClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  removeOverlay();
}

//============================================
// const galleryListItem = document.createElement('li');
// const galleryListLink = document.createElement('a');
// const galleryListImage = document.createElement('img');
// const galleryListSpan = document.createElement('span');
// const galleryListIcon = document.createElement('i');
// galleryListItem.appendChild(galleryListLink)
// galleryListSpan.appendChild(galleryListIcon)
// galleryListLink.append(galleryListImage, galleryListSpan)
// console.log(galleryListItem);
//=============================================
// galleryListItem.setAttribute('src', preview)
// galleryListItem.setAttribute(name, value)
// galleryListItem.setAttribute(name, value)
//console.log(element);

//result.push(element);
//console.log(preview);
// for (let i = 1; i <= amount.length; i += 1) {
//   const element = document.createElement('li');
//   console.log(element);

//   result.push(element);
// }
//console.log(result);
// const fragment = document.createDocumentFragment();
// result = result.map(el => {
//   fragment.append(el);
//   return fragment;
// })

//galleryList.appendChild(fragment)
