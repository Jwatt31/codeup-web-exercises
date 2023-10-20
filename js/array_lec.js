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