// leveling.js

let initialElevation;
let currentHeightOfInstrument;
let shotId = 1;

function calculateShot() {
    // Get user inputs
    initialElevation = parseFloat(document.getElementById('initialElevation').value);
    let isBacksight = document.getElementById('isBacksight').checked;
    let description = document.getElementById('description').value;
    let foresight = parseFloat(document.getElementById('foresight').value);

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
