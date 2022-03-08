// We are tasked to create a program that takes 
// in any number of command line arguments
// which will be numbers, and adds them toghether 
// in and returns a sum of all the numbers.
// 1,2,3,4,5 <
// 15 >

// splice, slice
const addNumbers = function() {
    const arguments = process.argv;
    const numbers = arguments.slice(2);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        // How do I add numbers toghether ?
        sum = sum + Number(numbers[i]);
    }    
    console.log("RESULT !!!!!", sum);
}

addNumbers();