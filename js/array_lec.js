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
console.log(`the secound shape is ${shapes[2]}`);
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



"use strict"
//
// //arrays
//
//     // [] // an empty array
//     //
//     // [1] // an array with one element
//     //
//     // [1, 2, 3, 4, 5] // an array with 5 elements
//     //
//     // ["one", 42, [8, 9, 10]]
// // an array with 3 elements all of different types
// // notice that the array above does *not* have 5 elements, rather the last
// // element is itself an array with 3 elements in it
//
// // storing arrays in variables
const shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // counting element of an array using .length
//
//
// console.log(shapes.length); // 4
//
// //accessing array element values using the index number
//
const numbers = [1, 2, 3, 4];
// console.log(numbers[0]); // 1
// console.log(numbers[1]); // 2
// console.log(numbers[2]); // 3
// console.log(numbers[3]); // 4
//
//
// console.log('There are ' + shapes.length + ' shapes in the array');
//
// console.log('The first shape is: ' + shapes[0]);
// // The first shape is: square
// //
// console.log('The second shape is: ' + shapes[1]);
// // The second shape is: rectangle
//
// console.log('The third shape is: ' + shapes[2]);
// // The third shape is: circle
//
// console.log('The fourth shape is: ' + shapes[3]);
// // The fourth shape is: triangle
//
// console.log('The fifth shape is: ' + shapes[4]);
// // The fifth shape is: undefined

//using for loops to iterate through an array
// loop through the array and log the values
// for (let i = 0; i < shapes.length; i++) {
//     console.log('The shape at index ' + i + ' is: ' + shapes[i]);
// }

//using for of loop to iterate through an array
// const iterable = [1, 2, 3, 4, 5];
//
// for (let element of iterable) {
//     console.log(element)
// }

// for(let num of numbers){
//     console.log(num)
// }
//using for each loop to iterate through an array
// shapes.forEach(shape => console.log(`Here is a lovely shape: ${shape}.`));
//
// numbers.forEach(num => console.log(`This is a number in my numbers array: ${num}`));

//  spread operator (...)
//  using spread operator to add element of one array to another array
const arr = [3, 5, 7];
//
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
// const newArr = [...arr, randomNumber(23, 42)];
// console.log(arr)
// console.log(newArr);

// using spread operator to use the values within an array as arguments of a function

const someNums = [5, 41];

function multiply(num1, num2){
    return num1 * num2;
}

console.log(multiply(...someNums));

// using spread operator in a function to define a variable number of parameters

function add (...args){
    let total = 0;
    for (let i = 0; i < args.length; i++){
        total += args[i];
    }
    return total;
}

// passing a various number of arguments of a function
const randNumArr1 =[55, 1, 58, 66, 65, 92, 6, 87, 71, 48, 36, 96];
console.log(add(...randNumArr1));

const randNumArr2 = [72, 5, 90, 11, 43, 22, 100, 21];
console.log(add(...randNumArr2));

