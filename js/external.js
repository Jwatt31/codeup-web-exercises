'use strict'

console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

let Userimput = prompt('whats your favorite color')
alert(`${Userimput} is my favorite color too`)

/////Prompt 1 info
    //You have rented some movies for your kids: The little mermaid (for 3 days),
    // Brother Bear (for 5 days, they love it),
    // and Hercules (1 day, you don't know yet if they're going to like it).
    // If price for a movie per day is $3, how much will you have to pay?
let price = 3;

let brotherBear = parseInt(prompt("How many days would you like to rent Brother Bear"));

alert(`you have selected ${brotherBear}`)

let theLittleMermaid = parseInt(prompt("How many days would you like to rent The Little Mermaid"));

alert(`you have selected ${theLittleMermaid}`)

let hercules = parseInt(prompt("How many days would you like to rent Hercules the animated movie"));

alert(`you have selected ${hercules}`)

alert(`in total you are renting Brother Bear ${brotherBear}, The little Mermaid for ${theLittleMermaid}, and Hurcules the Animated movie ${hercules}`)

let totalcost = ((price * brotherBear)+(price * theLittleMermaid)+(price * hercules));
console.log(totalcost);

alert(`For the total coast of $${totalcost.toFixed(2)}`);

prompt("please enter CC number and SS#")

/////prompt 2
    //Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
    // they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
    // How much will you receive in payment for this week?
    // You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
alert("plz only put the number of hours and pay ")
let googlePayment = parseInt(prompt("how much is your hourly pay for google this week"));

let amazonPayment = parseInt(prompt("how much is your hourly pay for amazon this week"));

let facebookPayment = parseInt(prompt("how much is your hourly pay for facebook this week"));

let googleHours = parseInt(prompt("How many hours of work did you work for Google"));

let amazonHours = parseInt(prompt("How many hours of work did you work for Amazon"));

let facebookHours = parseInt(prompt("How many hours of work did you work for Facebook"));

let totalPaymentG = (googlePayment * googleHours);

let totalPaymentA = (amazonPayment * amazonHours);

let totalPaymentF = (facebookPayment * facebookHours);

let totatPaymentO =(totalPaymentF + totalPaymentA + totalPaymentG);

console.log(totatPaymentO);
console.log(totalPaymentG);
console.log(totalPaymentA);
console.log(totalPaymentF);

alert('Your payment breakdown' +
    ` Google: $${totalPaymentG.toFixed(2)}`+ ` Amazon: $${totalPaymentA.toFixed(2)}`+
    ` Facebook: $${totalPaymentF.toFixed(2)}` + ` Total: $${totatPaymentO.toFixed(2)}`);

