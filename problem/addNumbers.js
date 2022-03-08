// We are tasked to create a program that takes 
// in any number of command line arguments
// which will be numbers, and adds them toghether 
// in and returns a sum of all the numbers.
// 1,2,3,4,5 <
// 15 >

// splice, slice
const addNumbers = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // How do I add numbers toghether ?
        sum = sum + Number(arr[i]);
    }    
    console.log("RESULT !!!!!", sum);
}

const arguments = process.argv;
const numbers = arguments.slice(2);
addNumbers(numbers);
addNumbers([4,4,4,4]);