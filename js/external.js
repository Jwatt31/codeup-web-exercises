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
let price = 3
let brotherBear = 5
let theLittleMermaid = 3
let hercules = 1
let totalcost = ((price * brotherBear)+(price * theLittleMermaid)+(price * hercules))
console.log(totalcost)
prompt(totalcost)
