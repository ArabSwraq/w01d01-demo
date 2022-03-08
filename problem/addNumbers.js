// We are tasked to create a program that takes 
// in any number of command line arguments
// which will be numbers, and adds them toghether 
// in and returns a sum of all the numbers.
// 1,2,3,4,5 <
// 15 >

// splice, slice
const addNumbers = function(arr) {
    let sum = 0;
    // For of ....
    for (let element of arr) {
        sum += Number(element);  // sum = sum + ____

    }    
    return sum;
}

const arguments = process.argv;
const numbers = arguments.slice(2);
const answer = addNumbers(numbers);
console.log("Input: ",numbers, "Output ==>",answer);