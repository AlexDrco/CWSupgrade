// Sample data for the CWS machine update
const projectData = {
    // Each day has its own entry with details and images
    days: [
        {
            id: 1,
            date: "2026-01-20T12:00:00",
            title: "Project Start",
            description: `
                <h3>Initial Assessment</h3>
                <p>Today the project to upgrade the CWS 3979 sterilizer began. The technical team performed a comprehensive assessment of the current system status.</p>
                
                <h3>Key Findings</h3>
                <ul>
                    <li>Obsolete control system requiring complete upgrade</li>
                    <li>Mechanical components in good general condition</li>
                    <li>Outdated and unintuitive user interface</li>
                    <li>Missing parts, new ones will be ordered</li>
                    <li>Steam valve and actuator fixed, Thanks Facilities</li>
                </ul>
                
                <h3>Action Plan</h3>
                <p>An update schedule has been established that includes:</p>
                <ol>
                    <li>Information backups prior dissasembly</li>
                    <li>Dismantling of old electronic components</li>
                    <li>Installation of new control system</li>
                    <li>Installation of new software</li>
                    <li>Restore recipes and user accounts </li>
                    <li>Full system testing</li>
                    <li>Validation, Completion and Delivery</li>
                    
                </ol>
            `,
            progress: "11%",
            // Las imágenes se cargarán desde la carpeta correspondiente
            imageFolder: "dia1"
        },
        {
            id: 2,
            date: "2026-01-21T12:00:00",
            title: "Component Disassembly",
            description: `
                <h3>Control System Disassembly</h3>
                <p>The technical team proceeded with the careful disassembly of the old control system. All connections and configurations were documented to ensure a smooth transition.</p>
                
                <h3>Removed Components</h3>
                <ul>
                    <li>Main control board (S7-315)</li>
                    <li>User interface modules</li>
                    <li>Obsolete wiring</li>
                    <li>Old profibus network components</li>
                    <li>Old profibus valve systems</li>
                </ul>
                
                <h3>Preparation for New Components</h3>
                <p>The compartments that will house the new electronic components were cleaned and prepared. The integrity of electrical connections was verified, wiring being identified.</p>
                
                <h3>Challenges Encountered</h3>
                <p>Still waiting for the missing parts, they are already ordered</p>
                <p>The main control door was removed to modify the cavity where the new HMI PC will be installed..</p>
            `,
            progress: "11%",
            imageFolder: "dia2"
        },
        {
            id: 3,
            date: "2026-01-22T12:00:00",
            title: "New Hardware Installation Part 1",
            description: `
                <h3>Control System Installation</h3>
                <p>Today, the new control system based on cutting-edge technology was installed. The new controller offers greater precision, processing speed, and advanced diagnostic capabilities.</p>
                
                <h3>Installed Components</h3>
                <ul>
                    <li>CWS-3979 main controller S7-1500 on hold waiting replacement</li>
                    <li>Expansion modules for profinet network</li>
                    <li>S7-1500 expansion modules installed, REPLACEMENTS ARRIVED</li>
                    <li>New HMI's installed in the dryer area</li>
                </ul>
                
                <h3>Implemented Improvements</h3>
                <p>The new system includes many benefits and capabilities as well as a new generation of more reliable control and communications network.</p>
                
                <h3>Challenges Encountered</h3>
                <p>Still waiting for the missing parts, PLC SHOULD ARRIVE FRIDAY MORNING</p>
                <p>The main control door was removed to modify the cavity where the new HMI PC will be installed..</p>
            `,
            progress: "22%",
            imageFolder: "dia3"
        },
        {
            id: 4,
            date: "2026-01-23T12:00:00",
            title: "New Hardware Installation Part 2",
            description: `
                <h3>Control System Installation</h3>
                <p>Today the installation of the new control equipment continues</p>
                
                <h3>Installed Components</h3>
                <ul>
                    <li>CWS-3979 main controller S7-1500 Should arrive today</li>
                    <li>Expansion modules for profinet network</li>
                    <li>S7-1500 expansion modules installed</li>
                    <li>New HMI's installed in the dryer area</li>
                </ul>
                
                <h3>Implemented Improvements</h3>
                <p>The new system includes many benefits and capabilities as well as a new generation of more reliable control and communications network.</p>
                
                <h3>Next Steps</h3>
                <p>The equipment will be powered up for initial testing and software installation next Monday 26th.</p>
            `,
            progress: "22%",
            imageFolder: "dia4"
        },
        {
            id: 5,
            date: "2026-01-24T12:00:00",
            title: "New Hardware Installation Part 3",
            description: `
               <h3>Control System Installation</h3>
                <p>Significative progress in the main panel wiring, back on track </p>
                
                <h3>Installed Components</h3>
                <ul>
                    <li>CWS-3979 main controller S7-1500</li>
                    <li>Expansion modules for profinet network</li>
                    <li>S7-1500 expansion modules installed</li>
                    <li>New HMI's installed in the dryer area</li>
                    <li>Main panel wiring almost completed</li>
                </ul>
                
                <h3>Challenges on this stage</h3>
                <p>Verify UPS backup functioning, new batteries set, ready for install.</p>
                
                <h3>Next Steps</h3>
                <p>Main panel wiring almost completed , schedule activities on track, the equipment will be powered up for initial testing and software installation next Monday..</p>
            `,
            progress: "33%",
            imageFolder: "dia5"
        },
        {
            id: 6,
            date: "2026-01-25T12:00:00",
            title: "Weekend - No Work Scheduled",
            description: `
                <h3>Sunday - No Work Day</h3>
                <p>No work was scheduled for today as it falls on a Sunday. The upgrade project will resume on Monday.</p>
                
                <h3>Project Status</h3>
                <p>The project remains on schedule with all planned milestones for the previous week successfully completed.</p>
                
                <h3>Next Steps</h3>
                <p>Work will continue on Monday with the Software installation phase, focusing on implementing the new control interface and conducting usability tests.</p>
            `,
            progress: "33%",
            imageFolder: "dia6"
        },
        {
            id: 7,
            date: "2026-01-26T12:00:00",
            title: "New Hardware Installation Part 4",
            description: `
                <p>Today the installation of the new control equipment continues..</p>
                
                <h3>Activities..</h3>
                <p>The installation of equipment in the internal panels is being carried out today, network cabling, installation of touch panels for the dryer area, the challenge today was to begin initial power-on tests, unfortunately this stage has not been possible, a meeting will be scheduled with the Syntegon team to have the details of the delay that could affect the calendar of activities for this project..</p>
                
                <h3>Challenges on this stage</h3>
                <p>Check with Syntegon for any possible delay in the schedule of activities.</p>
                
                <h3>Next Steps</h3>
                <p>The equipment should be powered up for testing and the software installation hopefully tomorrow afternoon.</p>
            `,
            progress: "44%",
            imageFolder: "dia7"
        },
        {
            id: 8,
            date: "2026-01-27T12:00:00",
            title: "It's Alive!! Testing devices",
            description: `
                <p>The switch is ON, today testing devices stage began</p>
                
                <h3>Device testing with the equipment powered on began today</h3>
                <ul>
                    <li>Verifying communication with main controller S7-1500</li>
                    <li>Verifying communication with remote profinet network nodes</li>
                    <li>HMI PC Installed </li>
                    <li>Graph station installed</li>
                    <li>Verifying network performance</li>
                    <li>Client data restore</li>
                    <li>Initial software testing</li>
                </ul>
                <h3>Challenges on this stage</h3>
                <p>Test each device on the network, debuging stage, wiring verification.</p>
                
                <h3>Next Steps</h3>
                <p>The debug stage and device test execution time will determine how many days of delay will be added. Tomorrow, May 28, there will be a meeting with Syntegon to discuss this delay point and how our schedule will be affected.</p>
            `,
            progress: "44%",
            imageFolder: "dia8"
        },
        {
            id: 9,
            date: "2026-01-28T12:00:00",
            title: "Testing Devices Part 2",
            description: `
                <p>Testing devices and debugging stage continues</p>
                
                <h3>Device testing and debugging </h3>
                <ul>
                    <li>Alarms testing and clearing</li>
                    <li>Verifying communication with main controller S7-1500</li>
                    <li>Verifying communication with remote profinet network nodes</li>
                    <li>HMI PC Installed </li>
                    <li>Graph station installed</li>
                    <li>Verifying network performance</li>
                    <li>No more red lights in communication network</li>
                </ul>
                <h3>Challenges on this stage</h3>
                <p>Test each device on the network, debugging stage, alarms being tested and cleared.</p>
                
                <h3>Next Steps</h3>
                <p>According with Syntegon meeting today, We will have 4 days of delay over the original schedule. So, Please take the necessary measures regarding this delay in the schedule.</p>
            `,
            progress: "56%",
            imageFolder: "dia9"
        },
        {
            id: 10,
            date: "2026-01-29T12:00:00",
            title: "Testing Devices Part 3",
            description: `
                <p>Testing devices and debugging stage continues</p>
                
                <h3>Devices testing and debugging </h3>
                <ul>
                    <li>Very good progress in clearing Alarms</li>
                    <li>Confined space permit granted</li>
                    <li>WCS chamber sensor verification</li>
                </ul>
                <h3>Challenges on this stage</h3>
                <p>Test each device on the system, debugging stage, alarms being tested and cleared.</p>
                
                <h3>Next Steps</h3>
                <p>Please schedule your activities according with the 3 days of delay over the original schedule.</p>
            `,
            progress: "56%",
            imageFolder: "dia10"
        },
       {
            id: 11,
            date: "2026-01-30T12:00:00",
            title: "PRE-qualification tests Being performed",
            description: `
           <p>Prequalification in process to prepare machine for IQ on Monday</p>
                
                <h3>Devices testing and debugging </h3>
                <ul>
                    <li>Alarms were cleared!!</li>
                    <li>Confined space permit granted</li>
                    <li>WCS chamber Temperature sensors verification</li>
                    <li>Cyles for Prequalification stage will begin</li>
                </ul>
                <h3>Challenges on this stage</h3>
                <p>Pre-qualification stage TODAY, With the progress shown today, the delay in the schedule has been considerably reduced to only 1 or 2 days.</p>
                
                <h3>Next Steps</h3>
                <p>IQ will be performed on Monday</p>
            `,
            progress: "67%",
            imageFolder: "dia11"
        },
        {
            id: 12,
            date: "2026-01-31T12:00:00",
            title: "Cycle tests as part of IQ stage",
            description: `
        
            `,
            progress: "67%",
            imageFolder: "dia12"
        },
        {
            id: 13,
            date: "2026-02-01T12:00:00",
            title: "IQ Completion",
            description: `
                <h3>Installation Qualification Complete</h3>
                <p>The IQ stage has been successfully completed with all systems verified and functioning properly.</p>
                
                <h3>Verified Systems</h3>
                <ul>
                    <li>Main control system operational</li>
                    <li>All sensors calibrated and verified</li>
                    <li>Network communication stable</li>
                    <li>HMI interfaces responsive</li>
                </ul>
                
                <h3>Next Steps</h3>
                <p>Proceeding to OQ (Operational Qualification) phase.</p>
            `,
            progress: "78%",
            imageFolder: "dia13"
        },
        {
            id: 14,
            date: "2026-02-02T12:00:00",
            title: "OQ Phase - Part 1",
            description: `
                <h3>Operational Qualification Begins</h3>
                <p>Starting the OQ phase to verify all operational parameters and performance criteria.</p>
                
                <h3>Activities Performed</h3>
                <ul>
                    <li>Standard cycle execution tests</li>
                    <li>Temperature and pressure monitoring</li>
                    <li>Performance data collection</li>
                </ul>
                
                <h3>Status</h3>
                <p>All tests running within specifications.</p>
            `,
            progress: "78%",
            imageFolder: "dia14"
        },
        {
            id: 15,
            date: "2026-02-03T12:00:00",
            title: "OQ Phase - Part 2",
            description: `
                <h3>Operational Qualification Continues</h3>
                <p>Continuation of operational tests with extended cycle durations and stress testing.</p>
                
                <h3>Test Results</h3>
                <ul>
                    <li>All cycles completed successfully</li>
                    <li>Performance metrics within acceptable range</li>
                    <li>System stability confirmed</li>
                </ul>
                
                <h3>Status</h3>
                <p>OQ phase progressing on schedule.</p>
            `,
            progress: "89%",
            imageFolder: "dia15"
        },
        {
            id: 16,
            date: "2026-02-04T12:00:00",
            title: "OQ Phase - Part 3",
            description: `
                <h3>Final OQ Testing</h3>
                <p>Final validation tests and acceptance criteria verification.</p>
                
                <h3>Validation Checklist</h3>
                <ul>
                    <li>Performance parameters verified</li>
                    <li>Safety systems validated</li>
                    <li>Data logging confirmed</li>
                    <li>User training materials completed</li>
                </ul>
                
                <h3>Status</h3>
                <p>Ready for PQ (Performance Qualification) phase.</p>
            `,
            progress: "89%",
            imageFolder: "dia12"
        },
        {
            id: 17,
            date: "2026-02-05T12:00:00",
            title: "PQ Phase - Performance Qualification",
            description: `
                <h3>Performance Qualification Phase</h3>
                <p>Final validation phase with full operational cycles and documentation.</p>
                
                <h3>PQ Activities</h3>
                <ul>
                    <li>Extended performance testing</li>
                    <li>Final documentation review</li>
                    <li>System certification preparation</li>
                    <li>Handover to operations team</li>
                </ul>
                
                <h3>Status</h3>
                <p>Near completion. Final validation in progress.</p>
            `,
            progress: "100%",
            imageFolder: "dia12"
        },
        {
            id: 18,
            date: "2026-02-06T12:00:00",
            title: "Project Completion - Delivery",
            description: `
                <h3>CWS 3979 Controls Upgrade Complete!</h3>
                <p>The controls upgrade project has been successfully completed. The sterilizer is now operational with the new control system.</p>
                
                <h3>Project Summary</h3>
                <ul>
                    <li>New S7-1500 control system fully operational</li>
                    <li>All qualifications completed and documented</li>
                    <li>Staff trained on new interface</li>
                    <li>System handed over to operations</li>
                </ul>
                
                <h3>Final Status</h3>
                <p>Project complete and ready for production use.</p>
            `,
            progress: "100%",
            imageFolder: "dia12"
        }
    ]
};

// Función para obtener las imágenes de un día específico
function getDayImages(dayId) {
    // Encontrar el día en los datos
    const day = projectData.days.find(d => d.id === dayId);
    if (!day) return [];
    
    // En una implementación real, aquí se cargarían dinámicamente todas las imágenes de la carpeta
    // Como estamos usando HTML/JS estático, simularemos hasta 10 imágenes por día
    // pero solo se mostrarán las que realmente existan en la carpeta
    
    // Captions predeterminados para las imágenes
    const defaultCaptions = [
        "Click on image for a larger view",
        "Click on image for a larger view",
        "Click on image for a larger view",
        "Click on image for a larger view",
        "Click on image for a larger view",
        "Click on image for a larger view",
        "Click on image for a larger view",
        "Click on image for a larger view",
        "Click on image for a larger view",
        "Click on image for a larger view"
    ];
    
    // Crear un array con hasta 10 posibles imágenes
    const possibleImages = [];
    for (let i = 1; i <= 10; i++) {
        possibleImages.push({
            src: `images/${day.imageFolder}/imagen${i}.jpg`,
            caption: defaultCaptions[i-1] || `Imagen ${i} del día ${dayId}`
        });
    }
    
    // En una aplicación real, aquí verificaríamos qué imágenes existen realmente
    // y solo devolveríamos esas. Como no podemos hacer eso en JS estático,
    // el carrusel mostrará un placeholder para las imágenes que no existan.
    
    return possibleImages;
}

// ===== DATOS PARA GANTT CHART (ACTIVIDADES Y TIMELINE) =====
const ganttData = {
    activities: [
        {
            id: 1,
            name: "Site Visit",
            category: "preparación",
            start: "2026-01-20",
            end: "2026-01-20",
            duration: 1,
            status: "completed",
            color: "#FF6B6B"
        },
        {
            id: 2,
            name: "Electrical Installation",
            category: "instalación",
            start: "2026-01-21",
            end: "2026-01-27",
            duration: 5,
            status: "completed",
            color: "#4ECDC4"
        },
        {
            id: 3,
            name: "Startup and Testing",
            category: "inicio",
            start: "2026-01-28",
            end: "2026-01-28",
            duration: 1,
            status: "completed",
            color: "#95E1D3"
        },
        {
            id: 4,
            name: "IQ Execution",
            category: "pruebas",
            start: "2026-01-29",
            end: "2026-01-29",
            duration: 1,
            status: "completed",
            color: "#45B7D1"
        },
        {
            id: 5,
            name: "Alarm Test Execution",
            category: "pruebas",
            start: "2026-01-30",
            end: "2026-02-02",
            duration: 2,
            status: "completed",
            color: "#45B7D1"
        },
        {
            id: 6,
            name: "Computer Test Execution",
            category: "pruebas",
            start: "2026-01-30",
            end: "2026-02-02",
            duration: 2,
            status: "completed",
            color: "#45B7D1"
        },
        {
            id: 7,
            name: "Temperature, Pressure, Conductivity Calibration",
            category: "calibración",
            start: "2026-02-03",
            end: "2026-02-03",
            duration: 1,
            status: "in-progress",
            color: "#FFA502"
        },
        {
            id: 8,
            name: "Operational Qualification Execution",
            category: "calificación",
            start: "2026-02-03",
            end: "2026-02-06",
            duration: 4,
            status: "in-progress",
            color: "#6C5CE7"
        },
        {
            id: 9,
            name: "Temperature Distribution Test Execution",
            category: "pruebas",
            start: "2026-02-04",
            end: "2026-02-05",
            duration: 2,
            status: "pending",
            color: "#45B7D1"
        }
    ],
    
    // Configuración de categorías para código de color
    categories: {
        preparación: { label: "Preparation", color: "#FF6B6B", icon: "📍" },
        instalación: { label: "Installation", color: "#4ECDC4", icon: "⚙️" },
        inicio: { label: "Start", color: "#95E1D3", icon: "▶️" },
        pruebas: { label: "Testing", color: "#45B7D1", icon: "✓" },
        calibración: { label: "Calibration", color: "#FFA502", icon: "📏" },
        calificación: { label: "Qualification", color: "#6C5CE7", icon: "📋" }
    }
};
