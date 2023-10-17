"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(input) {
//     if ("blue" === input) {
//         return "as blue as the ocean";
//     }else {
//     }if ("green" === input){
//         return 'as green as the grass I don't touch';
//     } else {
//     }if ('red' === input){
//         return 'lava me some red'
//     } else {
//         if (input) {
//             return `the hell is ${input}`
//         }
//     }
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//console.log(analyzeColor(randomColor))
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// let analyzeColor = 'red'
// switch (analyzeColor) {
//     case 'blue':
//         console.log("blue as the ocean")
//         break
//     case 'red':
//         console.log("lava me some red")
//         break
//     case 'orange':
//         console.log("I could go for some orange juice")
//         break
//     default:
//         console.log('the hell is that')
// }
////useing return instead of consol.log you dont need to put a break thats because log need to be taken out while return gives the answer
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// let analyzeColor = prompt("plz enter a color")
// switch (analyzeColor) {
//     case 'blue':
//         alert("blue as the ocean")
//         break
//     case 'red':
//         alert("lava me some red")
//         break
//     case 'orange':
//         alert("I could go for some orange juice")
//         break
//     default:
//         alert(`the hell is ${analyzeColor}`)
// }

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return v
 */
//0=0 1=10 2=25 3=35 4=50 5=free
//function calculateTota (cost,discoun) {
   // return cost - (cost * discount/100)
//}
function calculateTotal(luckyNumber,total)  {
    if (luckyNumber === 0){
        return total
    }else if (luckyNumber === 1){
        return total- (.10 * total);
    }else if (luckyNumber === 2){
        return total - (.25 * total);
    }else if (luckyNumber === 3){
        return total - (.35 * total);
    }else if (luckyNumber === 4){
        return total - (.50 * total);
    }else if (luckyNumber === 5){
        return "its free!!!!!!";
    }else {
        return "no sale no soup for you"
    }
}

//console.log(calculateTotal(5,100))
 /**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
  const luckyNumber = Math.floor(Math.random() * 6);

let userbill =prompt("What was you total")

alert(`your lucky number was ${luckyNumber}`+ ` your total before ${userbill} `+ `ypur total after ${calculateTotal(luckyNumber,userbill)}`)

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//function asknumber() {
    let entreNumber =confirm('enter the number plz')
    if (entreNumber) {
        let userNum = prompt("number?")
        if (!isNaN(userNum)) {
            userNum = parseFloat(userNum);
            let evenorodd = userNum % 2 === 0 ? 'even' : 'odd';
            alert(`the number is ${evenorodd}`)
        } else {
            alert (userNum =prompt("added to 100" + '${usernum}' ))
        }
    }
//}



// let asknumber = confirm('would you like to enert a number')
// if (asknumber){
//     prompt("please enter a number from 1-100");
// } else if parseFloat()
// {
//     alert( 'fine i didint want to work anyways')
// }

//
let userCon = confirm('would u like to enter a number?')
if (userCon){
    let userinput = parseFloat(prompt('enter a number'))
    if (isNaN(!userinput)){
        alert('you didnt input a number');
    }else {
        alert(iseven(userinput))
        alert(addOne(userinput))
        alert(posNeg(userinput))
    }
}

function iseven(num) {
    if (num %2 === 0){
        return 'is even'
    } else if (num % 2 === 1) {
        return 'is odd'
    } else {
        return 'is neither'
    }

}

function addOne(num){
    return `${num} + 100 is ${100+num}`
}

function posNeg(num){
    if(num > 0){
        return `${num} is pos `
}else if (num < 0){
        return `${num} is neg`
    } else {
        return ('not a neg or pos')
    }
}