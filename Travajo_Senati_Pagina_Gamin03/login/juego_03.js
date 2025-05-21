 document.querySelectorAll('.rating').forEach(rating => {
    const stars = rating.querySelectorAll('span');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            // Elimina la clase "selected" de todas las estrellas
            stars.forEach(s => s.classList.remove('selected'));

            // Agrega la clase "selected" solo a la estrella clickeada
            star.classList.add('selected');
        });
    });
});
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('img');
let currentIndex = 0;

setInterval(() => {
    // Oculta la imagen actual
    slides[currentIndex].classList.remove('active');

    // Calcula el índice de la siguiente imagen
    currentIndex = (currentIndex + 1) % slides.length;

    // Muestra la siguiente imagen
    slides[currentIndex].classList.add('active');
}, 5000); // Cambia cada 5 segundos
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', () => {
    // Oculta la imagen actual
    slides[currentIndex].classList.remove('active');

    // Calcula el índice de la imagen anterior
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;

    // Muestra la imagen anterior
    slides[currentIndex].classList.add('active');
});

nextBtn.addEventListener('click', () => {
    // Oculta la imagen actual
    slides[currentIndex].classList.remove('active');

    // Calcula el índice de la siguiente imagen
    currentIndex = (currentIndex + 1) % slides.length;

    // Muestra la siguiente imagen
    slides[currentIndex].classList.add('active');
});