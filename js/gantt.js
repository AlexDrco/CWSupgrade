// Gantt Chart Implementation para visualizar actividades y duración

document.addEventListener('DOMContentLoaded', function() {
    const ganttContainer = document.getElementById('gantt-container');
    
    if (!ganttContainer) {
        console.warn('Gantt container not found');
        return;
    }
    
    createGanttChart();
});

function createGanttChart(selectedDate = null) {
    const activities = ganttData.activities;
    const categories = ganttData.categories;
    
    // Calcular fechas mín y máx
    const dates = activities.flatMap(a => [new Date(a.start), new Date(a.end)]);
    const minDate = new Date(Math.min(...dates));
    minDate.setHours(0, 0, 0, 0);
    const maxDate = new Date(Math.max(...dates));
    maxDate.setHours(0, 0, 0, 0);
    
    // Obtener fecha actual
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Actualizar estados basados en fechas reales
    activities.forEach(activity => {
        const activityEnd = new Date(activity.end);
        activityEnd.setHours(0, 0, 0, 0);
        const activityStart = new Date(activity.start);
        activityStart.setHours(0, 0, 0, 0);
        
        if (activityEnd < today) {
            activity.status = 'completed';
        } else if (activityStart <= today && activityEnd >= today) {
            activity.status = 'in-progress';
        } else {
            activity.status = 'pending';
        }
    });
    
    const container = document.getElementById('gantt-container');
    container.innerHTML = '';
    
    // Crear estructura principal con diseño unificado
    const ganttWrapper = document.createElement('div');
    ganttWrapper.className = 'gantt-wrapper';
    
    // Crear línea de tiempo con fechas (encabezado)
    const timelineHeader = document.createElement('div');
    timelineHeader.className = 'gantt-timeline-header-row';
    
    // Espacio para las etiquetas de actividad
    const headerLabelsSpace = document.createElement('div');
    headerLabelsSpace.className = 'gantt-header-labels-space';
    timelineHeader.appendChild(headerLabelsSpace);
    
    // Crear cabecera de fechas
    const dateHeaderContainer = document.createElement('div');
    dateHeaderContainer.className = 'gantt-date-header';
    
    // Calcular el offset del día actual respecto a minDate
    let todayOffset = Math.floor((today - minDate) / (1000 * 60 * 60 * 24));
    
    // Si se proporciona una fecha seleccionada, calcular su offset
    let selectedOffset = -1;
    if (selectedDate) {
        const selected = new Date(selectedDate);
        selected.setHours(0, 0, 0, 0);
        selectedOffset = Math.floor((selected - minDate) / (1000 * 60 * 60 * 24));
    }
    
    // Generar fechas para la cabecera (cada día)
    const daysDiff = Math.ceil((maxDate - minDate) / (1000 * 60 * 60 * 24)) + 1;
    let currentDate = new Date(minDate);
    
    for (let i = 0; i < daysDiff; i++) {
        const dateCell = document.createElement('div');
        dateCell.className = 'gantt-date-cell';
        
        // Marcar celda de hoy
        if (i === todayOffset && todayOffset >= 0 && todayOffset <= daysDiff) {
            dateCell.classList.add('gantt-today');
            dateCell.title = 'TODAY: ' + currentDate.toLocaleDateString('en-US', { 
                weekday: 'short', 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
            });
        } else {
            dateCell.title = currentDate.toLocaleDateString('en-US', { 
                weekday: 'short', 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
            });
        }
        
        // Marcar celda seleccionada desde timeline
        if (i === selectedOffset && selectedOffset >= 0 && selectedOffset <= daysDiff) {
            dateCell.classList.add('gantt-selected');
        }
        
        dateCell.textContent = currentDate.getDate();
        dateHeaderContainer.appendChild(dateCell);
        currentDate.setDate(currentDate.getDate() + 1);
    }
    
    timelineHeader.appendChild(dateHeaderContainer);
    ganttWrapper.appendChild(timelineHeader);
    
    // Crear contenedor de filas (cada actividad es una fila)
    const rowsContainer = document.createElement('div');
    rowsContainer.className = 'gantt-rows-container';
    
    // Crear cada actividad como una fila unificada
    activities.forEach((activity, index) => {
        const row = document.createElement('div');
        row.className = 'gantt-row';
        
        // Sección izquierda: etiqueta de actividad
        const labelSection = document.createElement('div');
        labelSection.className = 'gantt-row-label';
        
        const categoryTag = document.createElement('span');
        categoryTag.className = 'gantt-category-tag';
        categoryTag.style.backgroundColor = categories[activity.category].color;
        categoryTag.title = categories[activity.category].label;
        categoryTag.textContent = categories[activity.category].icon;
        
        const activityName = document.createElement('span');
        activityName.className = 'gantt-activity-name';
        activityName.textContent = activity.name;
        
        const durationBadge = document.createElement('span');
        durationBadge.className = 'gantt-duration-badge';
        durationBadge.textContent = `${activity.duration}d`;
        
        labelSection.appendChild(categoryTag);
        labelSection.appendChild(activityName);
        labelSection.appendChild(durationBadge);
        
        // Sección derecha: barra de Gantt
        const barSection = document.createElement('div');
        barSection.className = `gantt-row-bar gantt-row-bar-${activity.status}`;
        
        const bar = document.createElement('div');
        bar.className = `gantt-bar gantt-bar-${activity.status}`;
        bar.style.backgroundColor = activity.color;
        
        // Calcular posición y ancho de la barra
        const startDaysOffset = Math.floor((new Date(activity.start) - minDate) / (1000 * 60 * 60 * 24));
        const barWidth = Math.ceil((new Date(activity.end) - new Date(activity.start)) / (1000 * 60 * 60 * 24)) + 1;
        
        bar.style.marginLeft = `${startDaysOffset * 24}px`;
        bar.style.width = `${barWidth * 24 - 3}px`;
        
        // Agregar información al hover
        const dateRange = `${formatDate(activity.start)} - ${formatDate(activity.end)}`;
        const statusText = activity.status === 'completed' ? 'Completed' : 
                          activity.status === 'in-progress' ? 'In Progress' : 'Pending';
        bar.title = `${activity.name}\n${dateRange}\n${activity.duration} days\nStatus: ${statusText}`;
        
        // Crear etiqueta de fechas en la barra
        const dateLabel = document.createElement('span');
        dateLabel.className = 'gantt-bar-date-label';
        dateLabel.textContent = `${new Date(activity.start).getDate()}/${new Date(activity.start).getMonth() + 1}`;
        bar.appendChild(dateLabel);
        
        barSection.appendChild(bar);
        
        row.appendChild(labelSection);
        row.appendChild(barSection);
        rowsContainer.appendChild(row);
    });
    
    // Agregar línea vertical del día actual o seleccionado
    const displayOffset = selectedOffset >= 0 ? selectedOffset : todayOffset;
    if (displayOffset >= 0 && displayOffset < daysDiff) {
        const highlightLine = document.createElement('div');
        highlightLine.className = selectedOffset >= 0 ? 'gantt-selected-line' : 'gantt-today-line';
        highlightLine.style.left = `${150 + (displayOffset * 24)}px`;
        rowsContainer.appendChild(highlightLine);
    }
    
    ganttWrapper.appendChild(rowsContainer);
    
    // Agregar leyenda
    const legend = createLegend(categories);
    
    const ganttSection = document.getElementById('gantt-container');
    ganttSection.appendChild(ganttWrapper);
    ganttSection.appendChild(legend);
}

function createLegend(categories) {
    const legend = document.createElement('div');
    legend.className = 'gantt-legend';
    
    const legendTitle = document.createElement('h4');
    legendTitle.textContent = 'Activity Categories';
    legend.appendChild(legendTitle);
    
    const legendGrid = document.createElement('div');
    legendGrid.className = 'gantt-legend-grid';
    
    Object.entries(categories).forEach(([key, category]) => {
        const item = document.createElement('div');
        item.className = 'gantt-legend-item';
        
        const colorBox = document.createElement('div');
        colorBox.className = 'gantt-legend-color';
        colorBox.style.backgroundColor = category.color;
        
        const label = document.createElement('span');
        label.textContent = `${category.icon} ${category.label}`;
        
        item.appendChild(colorBox);
        item.appendChild(label);
        legendGrid.appendChild(item);
    });
    
    legend.appendChild(legendGrid);
    return legend;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        day: 'numeric', 
        month: 'short', 
        year: '2-digit' 
    });
}
