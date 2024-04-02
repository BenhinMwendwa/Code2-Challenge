//Create a function called prime with a parameter
function Prime(num) {
    const newA = [];// create an empty array
    if (num <= 1) return newA; // 1 and numbers less than 1 are not prime
    if (num <= 3) {
        newA.push(num); // 2 and 3 are prime so return to the empty array
        
        return newA;
    }

    // Check divisibility by numbers up to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return newA; // num is not prime if it's divisible
        }
    }

    newA.push(num); // num is prime if no condition is met
    return newA;
}

const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(value.map(num => Prime(num)));//use map to iterate across the numbers 


