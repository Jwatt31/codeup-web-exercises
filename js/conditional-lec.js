// console.log("hello world") //// conditional - lec. html
//
// let age = 16
//
// if (age >= 16){
//     console.log("You're eligible to drive")
// }
//
// if (age < 16) {
//     console.log("you cant drive yet")
// }
//
// // same example with if/else and not if {}if
//
// if (age >= 16){
//     console.log("you can drive")
// } else {
//     console.log("grow up")
// }

//let currentDay = prompt("what day is today").toLowerCase()

// if (currentDay === 'monday' || currentDay === 'tuesday' || currentDay === 'wednesday'){
//     console.log("i love " + currentDay)
//
//
// } else {
//     console.log(currentDay + " is not a valid day")
// }
//
// let letsplay = confirm("Do you want to play")
//
// if(letsplay){
//     console.log("great lets play a game ")
// } else {
//     console.log("maybe next time")
// }


// const username = "user"
// const password = "password"
//
// // prompt the user to enter a username and a password
// const userUsername = prompt("please enter a username")
// const userPassword = prompt("please enter a password")

// next i want to console. log " you are logged in" if user name and pass word match

// if (username === userUsername && password === userPassword){
//     console.log("your logged in")
// } else if (username!== userUsername && password !== userPassword) {
//     console.log("incorrect password")
// } else if (username !== userUsername){
//     console.log("incorrect username")
// }else if (password !== userPassword){
//     console.log("wrong password tip: try password123!")
// } else {
//     console.log("unexpected error!!!!!")
// }

// // nested con example
// if (username === userUsername) {
//     if (password === userPassword) {
//         console.log("logged in")
//     } else {
//         console.log("try again this time dont miss the !#$& word")
//     }
// } else {
//     console.log("You got that name wrong how do You mess up on that")
// }
//
// // ternary operator
// // ? -> represents put true condition
// // : -> represents else condition
// let name = "jim"
// let greeting = (name === "bob") ? ("hello, " + name) : ("Hello stranger!");
// console.log(greeting)
// /// preferd way shorter but less oraganized
// let currentCurrentDay = currentDay ==='monday'|| currentDay === 'tuesday'|| currentDay === 'wednsday' ? 'i love ' + currentDay : currentDay + "? come back later like on a monday";
// console.log(currentCurrentDay)

////switch statment is faster and readable but takes up a lot of room in the code
// let daysOfWeek = "mondays";
//
// switch (daysOfWeek){
//     case 'mondays':
//     case 'tuesday':
//     case 'wednesday':
//     case 'thursday':
//     case 'friday':
//         console.log("its a weekday");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("its a weekend day.")
//         break;
//     default:
//         console.log("invalid day of the week");
// }

// using function and if/else
function sayHello (name) {
    if (name.length <= 20){
        return `hello, ${name}`
    } else {
        return "thats way to long of a name can u give a nickname instead like karen. *whisper y do i always get the werid ones"
    }
}

console.log(sayHello("lassoijiiiihihiiihihiihihi"))