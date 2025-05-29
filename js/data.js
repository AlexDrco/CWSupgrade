// Sample data for the CWS machine update
const projectData = {
    // Each day has its own entry with details and images
    days: [
        {
            id: 1,
            date: "2025-05-20T12:00:00",
            title: "Project Start",
            description: `
                <h3>Initial Assessment</h3>
                <p>Today the project to upgrade the CWS 3978 sterilizer began. The technical team performed a comprehensive assessment of the current system status.</p>
                
                <h3>Key Findings</h3>
                <ul>
                    <li>Obsolete control system requiring complete upgrade</li>
                    <li>Mechanical components in good general condition</li>
                    <li>Outdated and unintuitive user interface</li>
                    <li>Temperature and pressure sensors requiring calibration</li>
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
            progress: "10%",
            // Las imágenes se cargarán desde la carpeta correspondiente
            imageFolder: "dia1"
        },
        {
            id: 2,
            date: "2025-05-21T12:00:00",
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
                <p>The main control door was removed to modify the cavity where the new HMI PC will be installed..</p>
            `,
            progress: "20%",
            imageFolder: "dia2"
        },
        {
            id: 3,
            date: "2025-05-22T12:00:00",
            title: "New Hardware Installation Part 1",
            description: `
                <h3>Control System Installation</h3>
                <p>Today, the new control system based on cutting-edge technology was installed. The new controller offers greater precision, processing speed, and advanced diagnostic capabilities.</p>
                
                <h3>Installed Components</h3>
                <ul>
                    <li>CWS-2025 main controller S7-1500</li>
                    <li>Expansion modules for profinet network</li>
                    <li>S7-1500 expansion modules installed</li>
                    <li>New HMI's installed in the dryer area</li>
                </ul>
                
                <h3>Implemented Improvements</h3>
                <p>The new system includes many benefits and capabilities as well as a new generation of more reliable control and communications network.</p>
                
                <h3>Next Steps</h3>
                <p>Tomorrow we will continue the installation and identification of the new controls wiring.</p>
            `,
            progress: "30%",
            imageFolder: "dia3"
        },
        {
            id: 4,
            date: "2025-05-23T12:00:00",
            title: "New Hardware Installation Part 2",
            description: `
                <h3>Control System Installation</h3>
                <p>Today the installation of the new control equipment continues</p>
                
                <h3>Installed Components</h3>
                <ul>
                    <li>CWS-2025 main controller S7-1500</li>
                    <li>Expansion modules for profinet network</li>
                    <li>S7-1500 expansion modules installed</li>
                    <li>New HMI's installed in the dryer area</li>
                </ul>
                
                <h3>Implemented Improvements</h3>
                <p>The new system includes many benefits and capabilities as well as a new generation of more reliable control and communications network.</p>
                
                <h3>Next Steps</h3>
                <p>Depending on the progress made in the equipment installation during friday and saturday, the equipment will be powered up and the software installation will begin on Monday..</p>
            `,
            progress: "40%",
            imageFolder: "dia4"
        },
        {
            id: 5,
            date: "2025-05-24T12:00:00",
            title: "New Hardware Installation Part 3",
            description: `
               <h3>Control System Installation</h3>
                <p>Significative progress in the main panel wiring, back on track </p>
                
                <h3>Installed Components</h3>
                <ul>
                    <li>CWS-2025 main controller S7-1500</li>
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
            progress: "50%",
            imageFolder: "dia5"
        },
        {
            id: 6,
            date: "2025-05-25T12:00:00",
            title: "Weekend - No Work Scheduled",
            description: `
                <h3>Sunday - No Work Day</h3>
                <p>No work was scheduled for today as it falls on a Sunday. The upgrade project will resume on Monday.</p>
                
                <h3>Project Status</h3>
                <p>The project remains on schedule with all planned milestones for the previous week successfully completed.</p>
                
                <h3>Next Steps</h3>
                <p>Work will continue on Monday with the Software installation phase, focusing on implementing the new control interface and conducting usability tests.</p>
            `,
            progress: "50%",
            imageFolder: "dia6"
        },
        {
            id: 7,
            date: "2025-05-26T12:00:00",
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
            progress: "60%",
            imageFolder: "dia7"
        },
        {
            id: 8,
            date: "2025-05-27T12:00:00",
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
            progress: "70%",
            imageFolder: "dia8"
        },
        {
            id: 9,
            date: "2025-05-28T12:00:00",
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
            progress: "70%",
            imageFolder: "dia9"
        },
        {
            id: 10,
            date: "2025-05-29T12:00:00",
            title: "Testing Devices Part 3",
            description: `
                <p>Testing devices and debugging stage continues</p>
                
                <h3>Devices testing and debugging </h3>
                <ul>
                    <li>Still working in clearing Alarms</li>
                    <li>Confined space permit granted</li>
                    <li>WCS chamber sensor verification</li>
                </ul>
                <h3>Challenges on this stage</h3>
                <p>Test each device on the system, debugging stage, alarms being tested and cleared.</p>
                
                <h3>Next Steps</h3>
                <p>Please schedule your activities according with the 3 days of delay over the original schedule.</p>
            `,
            progress: "75%",
            imageFolder: "dia10"
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
        "Vista general del proceso de actualización",
        "Detalle de los componentes instalados",
        "Equipo técnico realizando ajustes",
        "Resultados de las pruebas realizadas",
        "Comparativa antes y después de la actualización",
        "Calibración de sensores y equipos",
        "Pruebas de funcionamiento del sistema",
        "Documentación del proceso",
        "Capacitación del personal",
        "Finalización de la etapa"
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
