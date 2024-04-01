
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
