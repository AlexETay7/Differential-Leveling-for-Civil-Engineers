# Differential Leveling for Surveyors

---

- Project Differential Leveling
- Personal Project
- Date 12/23/2023
- Alex Taylor

---

### **_OVERVIEW:_**

Differential leveling is a surveying technique used to determine the difference in elevation between two points. This repository contains the front and back-end logic for a simple web-based tool designed for civil engineers/surveyors to perform differential leveling calculations. My dad is a civil engineer and hearing about this concept inspired me to design this tool to make the calculations easier.

### **_INCLUDED FILES:_**

- leveling.js - mostly back-end logic but some front-end logic for doing calculations
- index.html - HTML front-end code
- styles.css - styles for HTML
- README - program overview

### **_COMPILING AND RUNNING:_**

Currently, this app is not live on the internet yet. So, to run it you must do so locally by cloning the repository onto your computer and running the code on an HTML live server(or any other method that allows you to run it locally). I will make it easier to access in the future when it is finished.

### **_PROGRAM DESIGN AND IMPORTANT CONCEPTS:_**

The program captures user inputs related to initial elevation, backsights or foresights, descriptions, and measured values. It then calculates and displays the height of the target (HT) and the height of the instrument (HI) for each shot. Note that the first height of the target value (HT) should be undefined.

If your are using this repository and are not a surveyor, or do not understand the concept of differential leveling, I recommend reading about it at this wikipedia page: https://en.wikipedia.org/wiki/Levelling

#### 1. User Inputs

- **Initial Elevation:** The starting point elevation.
- **Backsight/Foresight:** Users toggle between backsight and foresight using a checkbox.
- **Description:** A brief description of the shot.
- **Measured Value (Foresight):** The height or distance measured from the initial point.

#### 2. Backsight/Foresight Toggle

- The program uses a toggle button to switch between backsight and foresight. This toggle influences the calculation of the height of the target.

#### 3. Calculation Logic

- The program calculates the initial height of the instrument based on the initial elevation and shot value.
- For backsights, it maintains a record of the previous height of the target to calculate subsequent heights.

#### 4. Output Display

- The calculated results, including shot number, description, initial elevation, height of the target, and height of the instrument, are displayed below the leveling tool.

#### 5. Validation

- The program includes numeric input validation to ensure that users enter valid numerical values.

#### 6. Styling and UI

- The program has a clean and user-friendly interface with styling to enhance the user experience.

#### 7. Results Display

- The results of each shot are appended below the leveling tool section, providing a record of the leveling process.

### **_TESTING:_**

No test class was made for this project.

### **_DISCUSSION:_**

The tool currently has all the functionality, however, I would like to improve how shots are displayed each time they are calculated.
