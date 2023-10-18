let num = 1

while (num < 65536 ){
    console.log(num = num * 2)
}

let allCones = Math.floor(Math.random() * 50) + 50;
let numSold;

// do {
//      numSold = Math.floor(Math.random() * 5) + 1; /// this gives us a random number
//     if (allCones < numSold ){ /// this is saying that as longg as all clones sold are less than number sold at that iterration of sale the statment is false once it becomes true it gives us the log
//         console.log(`sorry im out i can do `+ numSold + ' i have ' + allCones );
//         continue; //this is acting as a repetative telling the above to repeat until its true or if you have a set number or input that becomes false and is
//     }
//     allCones -= numSold //
//     console.log(numSold + ' cones sold')
// } while (allCones > 0)

do {
    numSold = Math.floor(Math.random() * 5) + 1;

    if (numSold <= allCones){
        console.log(`${numSold} Cones sold`)
        allCones -= numSold
    } else {
        console.log(`cannot sell ${numSold} cones i only have ${allCones}`)
    }
} while (allCones !== 0)
console.log('yeah!! i sold them all')


///////////faild
// do {
//     numSold = Math.floor(Math.random() * 5) + 1;
//     if (numSold === 5){
//         console.log("Hell yeah i got you")
//     }else if (numSold === 1){
//         console.log("would you like more?")
//     }
//
// }while (numSold + numSold !== allCones)