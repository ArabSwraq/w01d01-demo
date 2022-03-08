// We are tasked to create a program that takes 
// in any number of command line arguments
// which will be numbers, and adds them toghether 
// in and returns a sum of all the numbers.
// 1,2,3,4,5 <
// 15 >

// How do I get command Line arguments?
// console.log(process.argv);
const arguments = process.argv;
// How to Slice value to get rid of first 2 elements ?
console.log("-------------------------------");
// splice, slice
const numbers = arguments.slice(2);
console.log(numbers);
console.log('#####################3');
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    // How do I add numbers toghether ?
    console.log("i ", i);
    console.log("numbers[i] ",numbers[i]);
    sum = sum + Number(numbers[i]);
}

console.log("RESULT !!!!!", sum);
// once command line arguments have come back...
// How do I add multiple Numbers toghether (where size of elements is different) ?