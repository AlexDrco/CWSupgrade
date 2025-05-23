// Archivo principal de JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Forzar la inicialización del primer día
    if (projectData && projectData.days && projectData.days.length > 0) {
        const firstDayId = projectData.days[0].id;
        
        // Seleccionar el primer día en la línea de tiempo
        const timelineDays = document.querySelectorAll('.timeline-day');
        if (timelineDays.length > 0) {
            timelineDays[0].classList.add('active');
        }
        
        // Actualizar el panel de detalles con el primer día
        const dayTitle = document.getElementById('day-title');
        const dayDate = document.getElementById('day-date');
        const detailsContent = document.getElementById('details-content');
        
        if (dayTitle && dayDate && detailsContent) {
            const firstDay = projectData.days[0];
            dayTitle.textContent = firstDay.title;
            
            // Formatear la fecha con formato completo
            const dateObj = new Date(firstDay.date);
            // Use day and month names in English
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            
            const formattedDate = `${daysOfWeek[dateObj.getDay()]}, ${months[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
            
            dayDate.textContent = formattedDate;
            detailsContent.innerHTML = firstDay.description;
        }
        
        // Forzar la carga del carrusel para el primer día
        if (typeof updateCarousel === 'function') {
            updateCarousel(firstDayId);
        }
    }
    // Comprobar si las imágenes existen y crear directorios de ejemplo si es necesario
    checkAndCreateImageDirectories();
    
    // Añadir efecto de desplazamiento suave a los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Añadir animaciones de entrada cuando los elementos son visibles
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.details-panel, .carousel-panel').forEach(el => {
        observer.observe(el);
    });
    
    // Función para verificar y crear directorios de imágenes de ejemplo
    function checkAndCreateImageDirectories() {
        // Esta función simula la creación de directorios de imágenes
        // En una implementación real, esto se haría en el servidor
        console.log("Checking image directories...");
        console.log("Note: For the carousel to work correctly, you must create the following folders:");
        console.log("- images/dia1");
        console.log("- images/dia2");
        console.log("- images/dia3");
        console.log("- images/dia4");
        console.log("- images/dia5");
        console.log("And place the corresponding images in each folder with names: imagen1.jpg, imagen2.jpg, etc.");
    }
    
    // Gestionar errores de carga de imágenes
    document.addEventListener('error', function(e) {
        if (e.target.tagName.toLowerCase() === 'img') {
            // Reemplazar con una imagen de marcador de posición
            e.target.src = 'images/placeholder.jpg';
            console.log(`Error loading image: ${e.target.src}`);
        }
    }, true);
});
