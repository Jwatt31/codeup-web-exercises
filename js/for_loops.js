'use strict'

////// loops ex 2
function showMultiplicationTable(input){
    for (let i = 0; i <=10; i++){
        console.log(input + " x " + i + " = " + i * input )
    }
}
showMultiplicationTable(7)

///////loops ex 3
//let ranNum = Math.floor(Math.random() * 180) + 20
for (let j =0 ; j < 10 ; j++ ){
    let ranNum = Math.floor(Math.random() * 180) + 20
    if (ranNum % 2 === 0){
        console.log(`${ranNum} is even`)
    } else {
        console.log(`${ranNum} is odd`)
    }
}

/////////////////--------------- 4 ex

for(let i = 1; i < 10; i++ ){
    console.log(i.toString().repeat(i))
}

////////////////----- 5 ex
for (let i = 100; i > 0; i -= 5){
    console.log(i)
}