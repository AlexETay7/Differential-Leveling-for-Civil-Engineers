/**
 * Differential Leveling back-end logic.
 * @author Alex Taylor 12/24/23
 */

// Cache frequently accessed DOM elements
const initialElevationInput = document.getElementById('initialElevation');
const descriptionInput = document.getElementById('description');
const shotInput = document.getElementById('foresight'); 
const output = document.getElementById('output');

// Survey state
let initialElevation = null;
let initialHeightOfInstrument = null;
let currentHeightOfInstrument = null;
let previousHeightOfTarget = null; // Variable to store previous HT
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
function toggleBacksight() {
    isBacksight = !isBacksight; // Toggle the backsight value
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
    const shotValue = parseFloat(shotInput.value.trim()); 

    // Validate numeric inputs
    if (!isValidNumber(initialElevationValue, 'Initial Elevation') || !isValidNumber(shotValue, 'Foresight')) {
        return;
    }

    // Calculate initial height of the instrument
    initialHeightOfInstrument = (initialElevationValue + shotValue).toFixed(3); 

    // Calculate height of target
    let HeightOfTarget;
    if (isBacksight) {
        if (shotId === 1) {
            currentHeightOfInstrument = initialHeightOfInstrument;
            // If it's the first backsight, set the previousHeightOfTarget to the initial HT
            previousHeightOfTarget = currentHeightOfInstrument - shotValue;
        } else {
            HeightOfTarget = previousHeightOfTarget; // Use the previous HT for backsights
            currentHeightOfInstrument = (HeightOfTarget + shotValue).toFixed(3);
        }
    } else {
        HeightOfTarget = (currentHeightOfInstrument - shotValue).toFixed(3);
        // Update the previousHeightOfTarget for future backsights
        previousHeightOfTarget = HeightOfTarget;
    }

    // Display the current state
    output.innerHTML += `<p>Shot ${shotId}: "${descriptionValue}" <strong>|</strong> Initial Elevation: ${initialElevationValue} <strong>|</strong> HT: ${HeightOfTarget} <strong>|</strong> HI: ${currentHeightOfInstrument} \n</p>`;

    // Increment shotId
    shotId++;

    // Clear input fields
    descriptionInput.value = '';
    shotInput.value = ''; 
    isBacksight = null;
    updateButtonStyles();
}
