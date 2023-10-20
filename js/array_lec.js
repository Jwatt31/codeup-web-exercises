'use strict'

//arrays
// []//an empty array
//
// [1]// an array of 1]
//
// [1,2,3,4] // an array of numbers







// storing an arrays in variables
const shapes = ['square', 'rect', 'tri', 'cir']

//counting element of an arrray using .length

console.log(shapes.length) //4

//accessing array element valsuses using

const numbers  = [1,2,3,4,];
console.log(1)
console.log(2)
console.log(3)
console.log(4)

console.log(`there are ${shapes.length} in the array`)

console.log(`the first shape is ${shapes[1]}`);
console.log(`the secound shape is ${shapes[2]}}`);
console.log(`the thrid shape is ${shapes[3]}`);
console.log(`the fourth shape is ${shapes[0]}`);

//using iteration loop

for (let i =0; i < shapes.length; i++){
    console.log(`the shape at index ${i} is: ${shapes[i]}`)
}

// using for of loop to iterate through an array
const iterable = [1,2,3,4,5];

for (let element of iterable) {
    console.log(element)
}

for (let num of numbers){
    console.log(num)
}


shapes.forEach(shapes => console.log(`here is a lovely shape: ${shapes}`));

numbers.forEach(num => console.log(`this is a number in my numbers array: ${num}`));

/// spread operator (...)
// using pread operator to add elements of one array to another array
const arr = [3,4,7]

function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min +1)+ min)
}
const newArr = [...arr,randomNumber(23,42)];
console.log(newArr)

// usning spread operator to use the values within an array as arguments of a function

const someNums = [5,41];

function multiply(num1,num2) {
    return num1 * num2;
}

console.log(multiply(...someNums))

// using spread operator in a function to define a variable number of parameters
function add(...args) {
    let total = 0
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

// passing a various number of argument of a function
const randNumArr1 = [55,1,58,66,65,92,6,87,71,48,36,96];
console.log(add(...randNumArr1));

const randNumberArr2 = [72,5,90,11,43,22,100,21];
console.log(add(...randNumberArr2))
