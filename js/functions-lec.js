"use strict"

// creat a function named sum that takes in two number and returns the sum.

//function sum(num1, num2){
    //return num1 + num2;
//}
// calling the function and execute the function

//console.log(sum(3,5));

// creat a function named fullName that takes in two inputs a first and last name and returns them together
//function myname(firstname, lastname){
  // this will never run due to the return being before the log
  //  return `${firstname} ${lastname}`;
//}

//console.log(myname("james", "whatley"))
//console.log(`hello ${myname('jay', "arr")} ,'did you know 5+5 = ${sum(5,5)}'}`)


//// anonymous function


//const decrement = function (input){
 //   return input-1
//}
//console.log(decrement(5))

/// arrow function

// functions declaration
//function myname(firstname, lastname){

    //return `${firstname} ${lastname}`};

//smol arrow function
//const fullName = (firstname, lastname) => firstname + " " + lastname;

//long arrow function

//const fullName = (firstname, lastname) => {
    //return firstname + " " + lastname
//}
//console.log(fullName('mick','myers'))

// create a function that take a string and returns the string in lowercase
//let lowerCase = "hoW DoEs thIS WoRk"
//function Lg(str){
    //lowerCase= str.toLowerCase();
//}

//console.log(lowerCase); /// gives og text
//Lg(lowerCase); // converts
//console.log(lowerCase); // new text
//const Lowercase =

//arrow function

//const lowerCaseString = (str) => {
    //lowerCase = str.toLowerCase();
//};

//console.log(lowerCase);
//lowerCaseString(lowerCase);
//console.log(lowerCaseString(lowerCase));
//console.log(lowerCase);
///////////////////

// cannot log value if nothing is returned the results would be undefined
//function incrument(num) {
  // alert (num + 1)
//}
// cannot log value if nothing is returned the results would be undefined
//console.log(incrument(5))

function greeting(greeting = 'howdey') {
    return greeting;
}

console.log(greeting());
console.log(greeting('greetings!'));

let globalVar = "hello! My name is Globir!"

function test(){
    let localVar ='Hello, my name is Lola';
    console.log(globalVar);
    {
        console.log(innervar) // won't work because it's a local var which means it won't run outside the function
        console.log(localVar) // won't work because it's a local var which means it won't run outside the function
    }
    console.log(globalVar)//can be used outside and inside the function because its ID of let us outside the function
}
console.log(localVar) // won't work because it's a local var which means it won't run outside the function
test();
//{ } acts like an isolated function
//////example
//let x = 300;
//let y = 100;

//function scopeExample() {
    //let x = 1;
    //let y = 2;
    //console.log(`x: ${x} y: ${y}`); // x: 1 y: 2
    //return x + y;
//}

//console.log(`x: ${x} y: ${y}`); // x: 300 y: 100
//let returnValue = scopeExample();
//console.log(returnValue); // 3
//////end of Ex