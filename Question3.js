//Create a function called prime with a parameter
    function Prime(num) {
        if (num <= 1) return false; // 1 and numbers less than 1 are not prime
        if (num <= 3) return true; // 2 and 3 are prime
    
        // Check divisibility by numbers up to the square root of num
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false; // num is not prime if its divisible
            }
        }
    
        return true; //  num is prime if no condition is met
    }
    function Prime2(value) { //function
        const pNumbers = [];// create a new array
        for (let num of value) { // loop to iterate over each element
            if (Prime(num)) { //calls the function to check if its an array or not
                pNumbers.push(num); 
            }
        }
        return pNumbers;
    }
    
    const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(Prime2(value))