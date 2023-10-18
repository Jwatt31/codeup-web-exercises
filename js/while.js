// let num = 1
//
// while (num < 65536 ){
//     console.log(num = num * 2)
// }

let allCones = Math.floor(Math.random() * 50) + 50;
let numSold;

do {
     numSold = Math.floor(Math.random() * 5) + 1;
    if (allCones < numSold ){
        console.log(`sorry im out i can do `+ numSold + ' i have ' + allCones );
        continue;
    }
    allCones -= numSold
    console.log(numSold + ' cones sold')
} while (allCones > 0)


// do {
//     numSold = Math.floor(Math.random() * 5) + 1;
//     if (numSold === 5){
//         console.log("Hell yeah i got you")
//     }else if (numSold === 1){
//         console.log("would you like more?")
//     }
//
// }while (numSold + numSold !== allCones)