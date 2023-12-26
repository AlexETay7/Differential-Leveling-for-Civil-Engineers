/**
 * Differential Leveling back-end logic.
 * @author Alex Taylor 12/24/23
 */
let initialElevation;
let initialHeightOfInstrument;
let currentHeightOfInstrument;
let shotId = 1;
let isBacksight = null;

function setBacksight(value) {
    isBacksight = value;
    updateButtonStyles();
}

function updateButtonStyles() {
    document.getElementById('yesButton').style.backgroundColor = isBacksight ? '#4caf50' : '#ccc';
    document.getElementById('noButton').style.backgroundColor = isBacksight === false ? '#4caf50' : '#ccc';
}

function calculateShot() {
    if (isBacksight === null) {
        alert('Please select "Yes" or "No" for backsight.');
        return;
    }

    // Get user inputs
    let initialElevationInput = document.getElementById('initialElevation').value.trim();
    let description = document.getElementById('description').value.trim();
    let foresightInput = document.getElementById('foresight').value.trim();

    // Parse inputs as floats
    let initialElevation = parseFloat(initialElevationInput);
    let foresight = parseFloat(foresightInput);

    // Check if initialElevation and foresight are valid numbers
    if (isNaN(initialElevation) || isNaN(foresight)) {
        alert('Please enter valid numbers for Initial Elevation and Foresight.');
        return;
    }

    // Calculate initial height of the instrument
    initialHeightOfInstrument = initialElevation + foresight;

    // Calculate elevation for the shot
    let elevation;
    if (isBacksight) {
        // For backsight, the initial height of the instrument is used
        currentHeightOfInstrument = initialHeightOfInstrument;
        elevation = currentHeightOfInstrument;
    } else {
        // For foresight, the elevation is calculated based on the current height of the instrument
        elevation = currentHeightOfInstrument - foresight;
    }

    // Display the current state
    let output = document.getElementById('output');
    output.innerHTML += `<p>Shot ${shotId}: ${description}, Initial Elevation: ${initialElevation}, HoT: ${elevation}, HI: ${currentHeightOfInstrument}</p>`;

    // Increment shotId
    shotId++;

    // Clear input fields
    document.getElementById('description').value = "";
    document.getElementById('foresight').value = "";
    isBacksight = null;
    updateButtonStyles();
}
