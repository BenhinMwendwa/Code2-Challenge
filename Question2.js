
const prompt = require("prompt-sync")();

// Function to create an array of numbers from initial to final
function Array(initial, final) {
    const result = []; // Initialize an empty array to store values

    // Loop from initial to final and add each number to the result array
    for (let i = initial; i <= final; i++) {
        result.push(i); 
    }

    return result; // Return the array containing numbers from initial to final
}

// Prompt the user to enter the initial and final values
const initial = parseInt(prompt("Enter the initial value: "));
const final = parseInt(prompt("Enter the final value: "));

// Create an array 
const array1 = Array(initial, final);

// Display the created array
console.log("output", array1);

  