
const prompt = require("prompt-sync")({ sigint: true });

//promt user to enter numbers
const userInput = prompt("Enter numbers ");

// Convert the input string into an array of numbers
const numbers = userInput.split(',').map(numStr => parseInt(numStr.trim(), 10));

// Function to determine if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    if (num <= 3) {
        return true; // 2 and 3 are prime numbers
    }

    // Check divisibility by numbers up to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // num is not prime if it's divisible
        }
    }

    return true; // num is prime if condition is met 
}

// Function to filter prime numbers from an array of numbers
function filterPrimes(numbers) {
    return numbers.filter(num => isPrime(num));
}

// Filter prime numbers from the input array
const primeNumbers = filterPrimes(numbers);

// Display the prime numbers
console.log("Prime numbers:", primeNumbers);
