//create function with parameters
function Array(initial, final) {
    const result = []; //  create an empty array that will store the value
    // Loop from initial to final 
    for (let i = initial; i <= final; i++) {
      result.push(i); // add an element
    }
    return result;
  }
  

  const array1 = Array(4, 7); //initialize
  console.log(array1);
  
  const array2 = Array(-4, 7);
  console.log(array2);
  