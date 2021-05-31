const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');


//Next Slide
const nextSlide = () => {
    const current = document.querySelector('.current');

    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
};


//Preious Slide
const prevSlide = () => {

    const current = document.querySelector('.current');

    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {

        slides[slides.length - 1].classList.add('current');
    }
};


// Button Events
next.addEventListener('click', e => {
    nextSlide();
});

prev.addEventListener('click', e => {
    prevSlide();
});

