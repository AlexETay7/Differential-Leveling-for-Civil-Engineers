/**
 * Differential Leveling back-end logic.
 * @author Alex Taylor 12/24/23
 */

// Cache frequently accessed DOM elements
const initialElevationInput = document.getElementById('initialElevation');
const descriptionInput = document.getElementById('description');
const foresightInput = document.getElementById('foresight');
const output = document.getElementById('output');

// Survey state
let initialElevation = null;
let initialHeightOfInstrument = null;
let currentHeightOfInstrument = null;
let shotId = 1;
let isBacksight = null;

// Validation function for numeric inputs
function isValidNumber(value, fieldName) {
    if (isNaN(value)) {
        alert(`Please enter a valid number for ${fieldName}.`);
        return false;
    }
    return true;
}

// Set backsight value and update button styles
function setBacksight(value) {
    isBacksight = value;
    updateButtonStyles();
}

// Update button styles based on backsight value
function updateButtonStyles() {
    document.getElementById('yesButton').style.backgroundColor = isBacksight ? '#4caf50' : '#ccc';
    document.getElementById('noButton').style.backgroundColor = isBacksight === false ? '#4caf50' : '#ccc';
}

// Calculate shot based on user inputs
function calculateShot() {
    // Validate backsight selection
    if (isBacksight === null) {
        alert('Please select "Yes" or "No" for backsight.');
        return;
    }

    // Get user inputs
    const initialElevationValue = parseFloat(initialElevationInput.value.trim());
    const descriptionValue = descriptionInput.value.trim();
    const foresightValue = parseFloat(foresightInput.value.trim());

    // Validate numeric inputs
    if (!isValidNumber(initialElevationValue, 'Initial Elevation') || !isValidNumber(foresightValue, 'Foresight')) {
        return;
    }

    // Calculate initial height of the instrument
    initialHeightOfInstrument = initialElevationValue + foresightValue;

    // Calculate elevation for the shot
    let elevation;
    if (isBacksight) {
        currentHeightOfInstrument = initialHeightOfInstrument;
        elevation = currentHeightOfInstrument;
    } else {
        elevation = currentHeightOfInstrument - foresightValue;
    }

    // Display the current state
    output.innerHTML += `<p>Shot ${shotId}: "${descriptionValue}" <strong>|</strong> Initial Elevation: ${initialElevationValue} <strong>|</strong> HT: ${elevation} <strong>|</strong> HI: ${currentHeightOfInstrument} \n</p>`;

    // Increment shotId
    shotId++;

    // Clear input fields
    descriptionInput.value = '';
    foresightInput.value = '';
    isBacksight = null;
    updateButtonStyles();
}
