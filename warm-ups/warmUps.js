// // James Whatley
// // "Daily Warm-up
// let name = "James Whatley"
// let year = "2011"
// console.log("my name is " + name +" I graduated high School in " + year);
// //console.log(`my name is ${name} and I graduated high school in ${year}`); (alt)
//
//
// const capitalizeFirstLetter = (str) => str.substring(0,1).toUpperCase() + str.substring(1);
//// this takes out the first letter changes its value thrn adds it back in

////replace method is another way the issue come in when your dont know the word being written in
//const

//console.log(capitalizeFirstLetter("hello world"))

/////oct 17 warm up find the heighest number

// function largestNum (in1, in2, in3){
//     return Math.max (in1, in2, in3)
// }
//
// console.log(largestNum(5,10,15))
// function largestnum (){
// let num1 = parsenInt(prompt('') /// repeat as needed
// let largestNum = math.max
// alart(
// largestNum()

/////// warmup oct 19
let num = 100
// while (num -= 5) {
//     if (num % 2 === 0) {
//         console.log(`${num} even`)
//     } else console.log(num)
// }

// while (num >= 5) {
//      num -=5
//      console.log(num);
// if (num % 2 === 0){
// console.log('even' + num)}
//     } else {
//     console.log(num)
// } //need to look over this on my own time

////// (`${num -= 5} even`)

// do {
//     num -= 5
//     if (num % 2 === 0 && num !== 0){
//         console.log(`${num} is even`)
//     }else {
//         console.log(num)
//     }
// } while (num > 1)
///// ^^ try to change this to a while statment can move the formula over
////////////////////////////////////////////////


//////////////////------------- warm up oct 20
//     for (i = 100; i > 0; i--){
//     if (i % 2 === 0){
//         console.log(` ${i} is even `)
//     }else {
//         console.log(i)
//     }
// }
////////
//  function nam(i) {
//     for (i = 100; i > 0; i-- )
//         if (i % 2 === 0){
//             console.log(`${i} is even`)
//         }else {
//         }
//
//  }
//nam()
//////////////
//  function returnEvennam() {
//      for(let i = 100; i > 0; i--){
//       if (i % 2 === 0){
//        console.log(i+ ' is even');
//       }
//
//      }
//  }
//  returnEvennam()
///////////////////////////////////////////////////////////////////////////
////// oct 23

// let favMovie = ['To hell and back', 'Atlas cloud', 'Saving pvt ryan', 'Hercules', 'Tenacious D and the pick of destiny']
// favMovie.sort()
// // console.log(favMovie)
// // favMovie.forEach((movie)=>console.log(movie));
//
// for (const movie of favMovie) {
// }


////////////////////// oct 24
// let car = [
//     {
//         make: 'Dodge',
//         model: 'Journey',
//         color: 'Grey'
//     },
//     {
//         make: 'Hyndia',
//         model: 'Ionque 6',
//         color: 'Green'
//     },
//     {
//         make: 'Aston Martian',
//         model: 'Vanquisher',
//         color: 'Silver',
//     }
// ];
// car.forEach(car => console.log(`your NEW CAR is a ${car.color} ${car.make} ${car.model} `));
// for (const carE of car) {
//     console.log(`here is your NEW CAR!!! A beautiful ${carE.color} ${carE.make} ${carE.model}`)
//
// }
// //Objective: Create a function that takes in an array and returns an array of the names of people who know JavaScript.
//
// // Data Structure/Example Input:
// let developers = [
//     {
//         name: "Jonathan",
//         languages: {
//             frontend: ["HTML", "JavaScript", "CSS"],
//             backend: ["Java"]
//         }
//     },
//     {
//         name: "Bonnie",
//         languages: {
//             frontend: ["JavaScript"],
//             backend: []
//         }
//     },
//     {
//         name: "Raj",
//         languages: {
//             frontend: [],
//             backend: ["C#", "Java", "Python"]
//         }
//     },
//     {
//         name: "Carmen",
//         languages: {
//             frontend: ["JavaScript", "HTML", "CSS", "React"],
//             backend: ["C#", "Java", "Python", "TypeScript"]
//         }
//     },
// ]


// function peopleWhoKnow(people) {
//     let newArray= []
//     for (let i = 0; i < people.length; i++) {
//         if (people[i].languages.frontend.includes('javascript')){
//             newArray
//         }
//
//     }
// }

// function peopleWhoKnow(people) {
//     let newArray = []
//     people.forEach((dev) => {
//         if (dev.languages.frontend.includes('JavaScript')) {
//             newArray.push(dev.name);
//         } else {
//             return 'no des'
//         }
//
//     })
//     return newArray;
// }
//
// console.log(peopleWhoKnow(developers))
//
// let knowsJS = (arr) => {
//     let javaScriptDevs = [];
//     for (let i = 0; i < arr.length; i++) {
//         //console.log(arr[i])
//         for (let j = 0; j < arr[i].languages.frontend.length; j++) {
//             if (arr[i].languages.frontend[j] === 'JavaScript') {
//                 javaScriptDevs.push(arr[i].name)
//             }
//         }
//
//     }
//     return javaScriptDevs;
// }
// console.log(knowsJS(developers))
//
//
//
//
// let elements = [
//     {
//         el: "button",
//         style: {
//             backgroundColor: "white",
//             el: "p",
//             style: {
//                 backgroundColor: "white",
//                 color: "black"
//             },
//             content: "Our company is better at doing company things than your company."
//         },
//     {
//         el: "h2",
//         style: {
//             backgroundColor: "white",
//             color: "black"
//         },
//         content: "Welcome Back!"
//     }
// ];            color: "black"
//         },
//         content: "Submit"
//     },
//     {
//

// function findElements(input) {
//     let sum = [];
//     for (let i = 0; i < input.length; i++) {
//        if (input[i].style.backgroundColor){
//            sum.push(input[i].el, input[i].style.backgroundColor, input[i].style.color)
//        }
//
//     }
//     return sum
// }
// function changeObjects(input, bgcolor, txtcolor) {
//     for (let i = 0; i < input.length; i++) {
//         input[i].style.backgroundColor = bgcolor;
//         input[i].style.color = txtcolor; ///by adding an input u can make a new variable in the object list under style
//     }
//     return input
//
// }
//
// console.log(changeObjects(elements,'green','blue'))

//make a function called fizzbuzz that says fizz for multiples of 3 and buzz for multiples of 5 and fizzbuzz fror multiples of both

// for (let i = 0; i < 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 5 === 0) {
//         console.log('buzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz')
//     }else {
//         console.log(i)
//     }
// }

// (i % 3=== 0 && i % 5=== 0 ){
//     console.log('FizzBuzz')

//nov 28 2023 warm up
 let imgs = document.querySelector('.image')
// let newpara = document.querySelector('#Pokemon')/*adding anything to the div will replace the img*/

fetch(`https://pokeapi.co/api/v2/pokemon/onix`)
.then(res => res.json())
.then(data => {
    imgs.src =data.sprites.front_shiny/*i can put this directly to the imgage class because its an image */

})

let onix = document.querySelector('#answer')
// let


