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
let car = [
    {
        make: 'Dodge',
        model: 'Journey',
        color: 'Grey'
    },
    {
        make:'Hyndia',
        model: 'Ionque 6',
        color: 'Green'
    },
    {
        make: 'Aston Martian',
        model: 'Vanquisher',
        color: 'Silver',
    }
];
car.forEach(car => console.log (`your NEW CAR is a ${car.color} ${car.make} ${car.model} `));
for (const carE of car) {
    console.log(`here is your NEW CAR!!! A beautiful ${carE.color} ${carE.make} ${carE.model}`)

}