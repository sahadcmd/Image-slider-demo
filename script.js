const imageContainer = document.querySelector('.imgs');
const nxtBtn = document.querySelector('.nxt-btn');
const prevBtn = document.querySelector('.prev-btn');

let containerDimensions = imageContainer.getBoundingClientRect();
let containerWidth = containerDimensions.width;

nxtBtn.addEventListener('click', () => {
    imageContainer.scrollLeft += containerWidth;
});

prevBtn.addEventListener('click', () => {
    imageContainer.scrollLeft -= containerWidth;
});