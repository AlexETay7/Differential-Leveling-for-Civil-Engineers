/**
 * The back-end logic behind differential leveling.
 * @author Alex Taylor 12/24/23
 */
let initialElevation;
let currentHeightOfInstrument;
let shotId = 1;

function calculateShot() {
    // Get user inputs
    let initialElevationInput = document.getElementById('initialElevation').value;
    let isBacksight = document.getElementById('isBacksight').checked;
    let description = document.getElementById('description').value;
    let foresightInput = document.getElementById('foresight').value;

    // Parse inputs as floats
    let initialElevation = parseFloat(initialElevationInput);
    let foresight = parseFloat(foresightInput);

    // Check if initialElevation and foresight are valid numbers
    if (isNaN(initialElevation) || isNaN(foresight)) {
        alert('Please enter valid numbers for Initial Elevation and Foresight.');
        return;
    }

    // Calculate elevation for the shot
    let elevation;
    if (isBacksight) {
        currentHeightOfInstrument = initialElevation + foresight;
        elevation = currentHeightOfInstrument;
    } else {
        elevation = currentHeightOfInstrument - foresight;
    }

    // Display the current state
    let output = document.getElementById('output');
    output.innerHTML += `<p>Shot ${shotId}: ${description}, Elevation: ${elevation}</p>`;

    // Increment shotId
    shotId++;

    // Clear input fields
    document.getElementById('description').value = "";
    document.getElementById('foresight').value = "";
    document.getElementById('isBacksight').checked = false;
}
