const nextButton = document.querySelector('[data-js="carousel__button--next"]');
const prevButton = document.querySelector('[data-js="carousel__button--prev"]')
const slides = document.querySelectorAll('[data-js="carousel__item"]')

const lastSlideIndex = slides.length - 1;
let currentSlideIndex = 0;

const manipulateSlideClasses = (correctSlideIndex) => {
    slides.forEach(slide => slide.classList.remove('carousel__item--visible'))
    slides[correctSlideIndex].classList.add('carousel__item--visible');
}

nextButton.addEventListener('click', () => {
    const correctSlideIndex = currentSlideIndex === lastSlideIndex
    ? currentSlideIndex = 0 
    : ++currentSlideIndex

    manipulateSlideClasses(correctSlideIndex)
})

prevButton.addEventListener('click', () => {
    const correctSlideIndex = currentSlideIndex === 0 
        ? currentSlideIndex = lastSlideIndex
        : --currentSlideIndex;

    manipulateSlideClasses(correctSlideIndex);
})