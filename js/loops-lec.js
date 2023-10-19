///while loops
//let i= 0;

// while (i < 10){
//     console.log(i);
//     i++
// }

/// do while loops

// let i = 12

// do {
//     console.log(i);
//     i++
//
// } while (i < 12)

// if browers gets stuck
// to exit
//d do (command + option + esc)
// or shutdown your computer using the pkysical button

/// --------------------------- mini exercise--------------

// let num = 0

// while (num < 100){
//     console.log(num);
//     num += 5
// }

// while (num < 100){
//     console.log(num = num + 5);
// } // will end at 100 unlike the above

// do {
//     console.log(num);
//     num += 5
// } while (num < 100);

// do {
//     console.log(num = num + 5)
// } while (num < 100)
///// this one still ends on 100 unlike above

// const secretNumber =7
// let guess;
// let attempt = 0
// //do while loop
//
// do {
//     guess = parseInt(prompt("guess the secret number (1-10):"));
//     attempt++
//     if (guess === secretNumber){
//         console.log("you got it soup for you")
//     } else {
//         if (guess < secretNumber){
//             console.log("A little low.")
//         } else {
//             console.log("just like these prices its too high")
//         }
//         console.log(`guess again or no soup for you. after ${attempt} many trys you would think you would get it `)
//     }
//
// }while (guess !== secretNumber)

////////////////////////////-----for loops------//////////////////////////////////////////////////
//for (/*initialization*/; /*condition*/; /*increment*/) {
    // body
//}

// for (let i = 10; i <= 20; i++){
//     console.log(i)
// }
//
// for (let num  = 0; num < 100; num = num + 5 ){
//     console.log(num)
// }
//
// let hello =" hello"
// for ( let i = 0; i <= hello.length; i++){ // .length in this function takes out each letter so it can be seen
//     console.log(hello[i]) // [] tells it to pull out each will go over in arrays
//     //console.log(hello.charAt(i)) // same as the log above
// }

//for (/*initialization*/; /*condition*/; /*increment*/) {
    // body
//}
// for (let i = 0, j = 100; i <= 100; i++, j--){
//     console.log('for loop iteration #' + ' i=' + i + ' j=' + j);
// }///// not a common type of for

//-----------break-----------//
for (let i =0; i<100; i += 5){
    console.log(i)
    if (i === 50){
        break;

    }
}
console.log('trying to break')

//-------continue--------//

for (let i =1; i <= 5; i++){
    if (i === 3){
        continue; //// means skip over the true statment
    }
    console.log(i)
}

for (let i = 1; i < 100 ; i++){
    if (i % 2 !== 0){ // skips odd
    //if (i % 2 === 0){ // skips evens
        continue; // skips odd numbers as continue is telling the function to continue even when true is
    }
    console.log(`here be that even number ${i}`)
}