// Funcionalidad para el carrusel de imágenes
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('image-carousel');
    const indicators = document.getElementById('carousel-indicators');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    let currentSlide = 0;
    let slides = [];
    
    // El carrusel se inicializa desde timeline.js con el día seleccionado por defecto
    // No es necesario inicializarlo aquí para evitar conflictos
    
    // Función para actualizar el carrusel con las imágenes del día seleccionado
    function updateCarousel(dayId) {
        // Obtener las imágenes del día
        const images = getDayImages(dayId);
        slides = images;
        
        // Limpiar el carrusel y los indicadores
        carousel.innerHTML = '';
        indicators.innerHTML = '';
        
        // Si no hay imágenes, mostrar un mensaje
        if (images.length === 0) {
            const noImagesSlide = document.createElement('div');
            noImagesSlide.className = 'carousel-slide';
            noImagesSlide.innerHTML = '<p class="no-images">No images available for this day.</p>';
            carousel.appendChild(noImagesSlide);
            return;
        }
        
        // Crear un slide para cada imagen
        images.forEach((image, index) => {
            // Crear el slide
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            
            // Crear la imagen
            const img = document.createElement('img');
            img.className = 'carousel-image';
            img.src = image.src;
            img.alt = `Image ${index + 1} of day ${dayId}`;
            
            // Manejar errores de carga de imagen
            img.onerror = function() {
                // Si la imagen no existe, no mostrar este slide
                if (slides.length <= 1) {
                    // Si es la única imagen, mostrar un mensaje
                    this.src = 'images/placeholder.jpg';
                    this.alt = 'Image not available';
                } else {
                    // Si hay más imágenes, eliminar este slide
                    slide.remove();
                    // Actualizar el array de slides
                    updateSlides();
                }
            };
            
            // Añadir evento para mostrar la imagen en pantalla completa
            img.addEventListener('click', () => {
                showFullscreen(image.src, image.caption);
            });
            
            // Crear el caption
            const caption = document.createElement('div');
            caption.className = 'image-caption';
            caption.textContent = image.caption;
            
            // Añadir elementos al slide
            slide.appendChild(img);
            slide.appendChild(caption);
            
            // Añadir el slide al carrusel
            carousel.appendChild(slide);
            
            // Crear el indicador
            const indicator = document.createElement('div');
            indicator.className = 'carousel-indicator';
            indicator.setAttribute('data-slide', index);
            
            // Añadir evento al indicador
            indicator.addEventListener('click', () => {
                goToSlide(index);
            });
            
            // Añadir el indicador a los indicadores
            indicators.appendChild(indicator);
        });
        
        // Mostrar el primer slide
        currentSlide = 0;
        updateCarouselPosition();
    }
    
    // Función para ir a un slide específico
    function goToSlide(index) {
        if (index < 0) {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        
        updateCarouselPosition();
    }
    
    // Función para actualizar la lista de slides
    function updateSlides() {
        // Actualizar el array de slides
        slides = Array.from(document.querySelectorAll('.carousel-slide'));
        
        // Actualizar los indicadores
        indicators.innerHTML = '';
        slides.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.className = 'carousel-indicator';
            indicator.setAttribute('data-slide', index);
            
            // Añadir evento al indicador
            indicator.addEventListener('click', () => {
                goToSlide(index);
            });
            
            // Añadir el indicador a los indicadores
            indicators.appendChild(indicator);
        });
        
        // Si el slide actual ya no existe, ir al primero
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        
        // Actualizar la posición
        updateCarouselPosition();
    }
    
    // Función para actualizar la posición del carrusel
    function updateCarouselPosition() {
        // Actualizar la posición del carrusel
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Actualizar los indicadores
        const allIndicators = document.querySelectorAll('.carousel-indicator');
        allIndicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Función para mostrar una imagen en pantalla completa
    function showFullscreen(src, caption) {
        // Crear el overlay
        const overlay = document.createElement('div');
        overlay.className = 'fullscreen-overlay';
        
        // Crear la imagen
        const img = document.createElement('img');
        img.className = 'fullscreen-image';
        img.src = src;
        img.alt = caption;
        
        // Crear el botón de cierre
        const closeBtn = document.createElement('div');
        closeBtn.className = 'close-fullscreen';
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
        
        // Añadir elementos al overlay
        overlay.appendChild(img);
        overlay.appendChild(closeBtn);
        
        // Añadir el overlay al body
        document.body.appendChild(overlay);
        
        // Mostrar el overlay con animación
        setTimeout(() => {
            overlay.classList.add('active');
        }, 10);
    }
    
    // Añadir eventos a los botones
    prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });
    
    // Exponer la función para que pueda ser llamada desde otros scripts
    window.updateCarousel = updateCarousel;
});
