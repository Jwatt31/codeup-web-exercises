"use strict";

/**
 * TODO:
 * Create an array of 4 people's names and store it in a variable called
 * 'names'.
 */
let names = ['James', 'Lacey', 'Sam', 'Johonny']
console.log(names)
/**
 * TODO:
 * Create a log statement that will log the number of elements in the names
 * array.
 */
console.log('this many names on the list ' + names.length)
/**
 * TODO:
 * Create log statements that will print each of the names individually by
 * accessing each element's index.
 */

console.log(`the first name is ${names[0]}`)
console.log(`the second name is ${names[1]}`)
console.log(`the third name is ${names[2]}`)
console.log(`the fourth name is ${names[3]}`)
/**
 * TODO:
 * Write some code that uses a for loop to log every item in the names
 * array.
 */
for (let i = 0; i < names.length; i++) {
    console.log(`the names are listed at ${i}: ${names[i]}`)
}
/**
 * TODO:
 * Refactor your above code to use a `forEach` loop
 */
names.forEach(names => console.log(`here are the names of those attending ${names}`))
// names.forEach(function (name) {
// })
// console.log('this is in the function ' + name)

for (let name of names) {
    console.log("this is in the for loop " + name)
}

/**
 * TODO:
 * Create the following three functions, each will accept an array and
 * return an an element from it
 * - first: returns the first item in the array
 * - second: returns the second item in the array
 * - last: returns the last item in the array
 *
 * Example:
 *  > first([1, 2, 3, 4, 5]) // returns 1
 *  > second([1, 2, 3, 4, 5]) // returns 2
 *  > last([1, 2, 3, 4, 5]) // return 5
 */
let numArray = ['birb', 2, 'dog', 45, 'cat']

function firstNum(array) {
    return array[0]
}

function secoundNum(array) {
    return array[1]
}

function lastNum(array) {
    return array[4]
}

function lastNum2(array) {
    return (array.slice(-1))
}
function lastNum3(array) {
    return array[array.length -1]
}


console.log(firstNum(numArray))
console.log(secoundNum(numArray))
console.log(lastNum(numArray))
console.log(lastNum2(numArray))
console.log(lastNum3(numArray))

