# (Question1)

#### By BENHIN MUSYOKA MWENDWA
### 01/04/2024

## (NB) Project set up for all the Three challenges
Make sure you have created repository then after you have checked your work and its perfectly running follow the following steps
Git add .
Git commit -m"//comment"
Git push 
Copy the link and then paste it in the space link provided


## Description
This is a program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.




//Create function to store the values
function swap(value) {
    let update = "";// create an empty string where updated data gets stored after its updated
    for (let i = 0; i < value.length; i++) { //Create a loop that runs across the characters
        const character = value[i];
        if (character === character.toLowerCase()) {//checks if the character is lowercase then changes it to upper 
            update += character.toUpperCase();
        } else {
            update += character.toLowerCase();//changes character to lower if its upper
        }
    }
    return update;
}

console.log(swap("The Quick Brown Fox")); //call the function



## (Question2)
This is a program  that accepts two numbers to generate an array between them.


//create function with parameters
function Array(initial, final) {
    const result = []; //  create an empty array that will store the value
    // Loop from initial to final 
    for (let i = initial; i <= final; i++) {
      result.push(i); // add an element
    }
    return result;
  }
  

## Question3
This is a program that allows integers to be put then checks for prime numbers in the values put


Create a function called prime with a parameter
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
    function Prime2(value)  //function
        const pNumbers = [];// create a new array
        for (let num of value) { // loop to iterate over each element
            if (Prime(num)) { //calls the function to check if its an array or not
                pNumbers.push(num); 
            }
        }
        return pNumbers;




     

# Live Link
https://github.com/BenhinMwendwa/Code2-Challenge

## (Technologies used)
Github
Javascript

