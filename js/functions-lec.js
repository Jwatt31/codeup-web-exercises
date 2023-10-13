"use strict"

// creat a function named sum that takes in two number and returns the sum.

function sum(num1, num2){
    return num1 + num2;
}
// calling the function and execute the function

console.log(sum(3,5));

// creat a function named fullName that takes in two inputs a first and last name and returns them together
function myname(firstname, lastname){
  // this will never run due to the return being before the log
    return `${firstname} ${lastname}`;
}

console.log(myname("james", "whatley"))
console.log(`hello ${myname('jay', "arr")} ,'did you know 5+5 = ${sum(5,5)}'}`)


//// anonymous function


const decrement = function (input){
    return input-1
}
console.log(decrement(5))