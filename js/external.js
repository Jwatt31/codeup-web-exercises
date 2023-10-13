'use strict'

console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

let Userimput = prompt('whats your favorite color')
alert(`is this your color? ${Userimput}`)

/////Promot 1 info
    //You have rented some movies for your kids: The little mermaid (for 3 days),
    // Brother Bear (for 5 days, they love it),
    // and Hercules (1 day, you don't know yet if they're going to like it).
    // If price for a movie per day is $3, how much will you have to pay?
let price = 3;
let brotherBear = prompt("How many days would u like to rent Brother Bear");
let theLittleMermaid = prompt("How many days would u like to rent The Little Mermaid");
let hercules = prompt("How many days would u like to rent Hercules the animated movie");
let totalcost = ((price * brotherBear)+(price * theLittleMermaid)+(price * hercules));
console.log(totalcost);
alert(`$${totalcost.toFixed(2)}`);

/////promt 2
    //Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
    // they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
    // How much will you receive in payment for this week?
    // You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
let googlePayment = 400;
let amazonPayment = 380;
let facebookPayment = 350;
let googleHours = prompt("How many hours of work did you work for google");
let amazonHours = prompt("How many hours of work did you work for amozon");
let facebookHours = prompt("How many hours of work did you work for Facebook");
let totalPaymentG = (googlePayment * googleHours);
let totalPaymentA = (amazonPayment * amazonHours);
let totalPaymentF = (facebookPayment * facebookHours);
let totatPaymentO =(totalPaymentF + totalPaymentA + totalPaymentG)
console.log(totatPaymentO)
console.log(totalPaymentG)
console.log(totalPaymentA)
console.log(totalPaymentF)
alert('Your payment breakdown' +
    ` Google: $${totalPaymentG}`+ ` Amazon: $${totalPaymentA}`+
    ` Facebook: $${totalPaymentF}` + ` Total: $${totatPaymentO}`)
