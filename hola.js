let currentIndex = 0; // Índice actual
const slides = document.querySelectorAll('.slide'); // Todas las diapositivas
const dots = document.querySelectorAll('.dot'); // Circulitos para navegación

function updateSliderPosition() {
    const slider = document.querySelector('.slider'); // Selección del contenedor del slider
    slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Transforma para mostrar la diapositiva actual

    // Actualiza los circulitos para reflejar la diapositiva activa
    dots.forEach(dot => dot.classList.remove('active')); // Elimina la clase 'active' de todos los dots
    dots[currentIndex].classList.add('active'); // Añade la clase 'active' al dot correspondiente
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Incrementa el índice y se reinicia al final
    updateSliderPosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Decrementa el índice y se reinicia al inicio
    updateSliderPosition();
}

function goToSlide(index) {
    currentIndex = index; // Cambia directamente al índice especificado
    updateSliderPosition();
}

// Configura el cambio automático de imágenes
setInterval(nextSlide, 5000); // Cambia automáticamente cada 5 segundos

// Inicializa el slider y el dot activo
updateSliderPosition();
