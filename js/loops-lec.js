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

let num = 0

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

const secretNumber =7
let guess;
let attempt = 0
//do while loop

do {
    guess = parseInt(prompt("guess the secret number (1-10):"));
    attempt++
    if (guess === secretNumber){
        console.log("you got it soup for you")
    } else {
        if (guess < secretNumber){
            console.log("A little low.")
        } else {
            console.log("just like these prices its too high")
        }
        console.log(`guess again or no soup for you. after ${attempt} many trys you would think you would get it `)
    }

}while (guess !== secretNumber)