// Funcionalidad para la línea de tiempo
document.addEventListener('DOMContentLoaded', function() {
    const timelineContainer = document.getElementById('timeline');
    
    // Función para crear la línea de tiempo
    function createTimeline() {
        // Limpiar el contenedor
        timelineContainer.innerHTML = '';
        
        // Crear el elemento de línea de tiempo
        const timelineElement = document.createElement('div');
        timelineElement.className = 'timeline';
        
        // Asegurar que la línea de tiempo tenga suficiente ancho para todos los días
        const totalDays = projectData.days.length;
        // El ancho total debe considerar el ancho de cada día (100px) más los márgenes (2rem = ~32px)
        const timelineWidth = totalDays * 132;
        // Establecer el ancho de la línea de tiempo
        timelineElement.style.width = `${timelineWidth}px`;
        
        // Agregar el elemento de línea de tiempo al contenedor
        timelineContainer.appendChild(timelineElement);
        
        // Crear un elemento para cada día en los datos
        projectData.days.forEach(day => {
            // Crear el elemento del día
            const dayElement = document.createElement('div');
            dayElement.className = 'timeline-day';
            dayElement.setAttribute('data-day-id', day.id);
            
            // Crear el círculo con el número del día
            const circleElement = document.createElement('div');
            circleElement.className = 'timeline-day-circle';
            
            const numberElement = document.createElement('span');
            numberElement.className = 'timeline-day-number';
            numberElement.textContent = day.id;
            
            circleElement.appendChild(numberElement);
            
            // Crear la etiqueta con la fecha
            const labelElement = document.createElement('div');
            labelElement.className = 'timeline-day-label';
            
            // Formatear la fecha - usar la fecha exacta especificada en los datos
            const dateObj = new Date(day.date);
            // Force the correct date regardless of timezone
            const formattedDate = `${dateObj.getDate()} ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][dateObj.getMonth()]}`;
            
            labelElement.textContent = formattedDate;
            
            // Crear el indicador de progreso
            const progressElement = document.createElement('div');
            progressElement.className = 'timeline-day-progress';
            progressElement.textContent = day.progress;
            
            // Añadir todos los elementos al día
            dayElement.appendChild(circleElement);
            dayElement.appendChild(labelElement);
            dayElement.appendChild(progressElement);
            
            // Añadir evento de clic
            dayElement.addEventListener('click', function() {
                selectDay(day.id);
            });
            
            // Añadir el día al elemento de línea de tiempo
            timelineElement.appendChild(dayElement);
        });
        
        // Seleccionar el primer día por defecto e inicializar el carrusel
        if (projectData.days.length > 0) {
            // Seleccionar el primer día
            selectDay(projectData.days[0].id);
            
            // Asegurarse de que el carrusel se inicialice correctamente
            if (typeof updateCarousel === 'function') {
                updateCarousel(projectData.days[0].id);
            }
        }
    }
    
    // Función para seleccionar un día
    function selectDay(dayId) {
        // Encontrar el día en los datos
        const selectedDay = projectData.days.find(day => day.id === dayId);
        if (!selectedDay) return;
        
        // Actualizar la clase activa en la línea de tiempo
        const timelineDays = document.querySelectorAll('.timeline-day');
        timelineDays.forEach(day => {
            if (parseInt(day.getAttribute('data-day-id')) === dayId) {
                day.classList.add('active');
            } else {
                day.classList.remove('active');
            }
        });
        
        // Actualizar el panel de detalles
        updateDetailsPanel(selectedDay);
        
        // Actualizar el carrusel de imágenes
        updateCarousel(dayId);
    }
    
    // Función para actualizar el panel de detalles
    function updateDetailsPanel(day) {
        const dayTitle = document.getElementById('day-title');
        const dayDate = document.getElementById('day-date');
        const detailsContent = document.getElementById('details-content');
        
        // Aplicar animación de desvanecimiento
        detailsContent.style.opacity = '0';
        
        // Actualizar el contenido después de un breve retraso para la animación
        setTimeout(() => {
            dayTitle.textContent = day.title;
            
            // Formatear la fecha con formato completo
            const dateObj = new Date(day.date);
            // Use day and month names in English
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            
            const formattedDate = `${daysOfWeek[dateObj.getDay()]}, ${months[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
            
            dayDate.textContent = formattedDate;
            detailsContent.innerHTML = day.description;
            
            // Mostrar el contenido con animación
            detailsContent.style.opacity = '1';
        }, 300);
    }
    
    // Inicializar la línea de tiempo
    createTimeline();
});
