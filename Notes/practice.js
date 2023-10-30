arra = [1,23,5,4,9,7,6,9]
function getRidofNine(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]=== 9){
            arr.splice(i,1);
            i--;
        }
    }return arr

}

console.log(getRidofNine(arra))
function negative(num) {
    return num < 0
}

console.log(negative(-9))

// Write a function named average that accepts an array of numbers and returns the average of those numbers.
// function avrage(array) {
//     let avg = array.reduce((acc))
//
// }

//console.log(avrage(45))
// function getAvg(grades) {
//     const total = grades.reduce((acc, c) => acc + c, 0);
//     return total / grades.length;
// }

// Write a function named capitalizeName that accepts a string that is a first and last name separated by a space, and returns a string that that has the first and last names capitalized.
//
//     For this problem, you may assume that the function will only ever be called with a string that has two words separated by a single space.




// Write a function named analyzeWord. It should take in a string and return an object with information about the input word. The object returned should have the following properties:
//
//     word: the original word that was passed into the function
// numberOfLetters: the number of letters in the word
// numberOfVowels: the number of vowels in the word







// Write a function named convertNameToObject that accepts a string that contains a first name and last name separated by a space character,








// write a function named countVowels that accepts a string and returns the number of vowels in that string. (Don't worry about or count "y" as a vowel)


function remove9s(num) {
    let result =[] // creating a new array
    for (let i = 0; i < num.length; i++) { // we want to useing the .length so that it reads out the whole array not just
        if (num[i] !== 9){ // removes everything but 9 and passing any not 9s into the next argument below
            result.push(num[i]); //  creates a new array without the 9 and pushes the new not 9 numbers into the array
        }
    }
    return result; // returns new array no the original
}

//.filter // is an api


console.log(remove9s([7, 8, 9, 10])) // [7, 8, 10]
console.log(remove9s([1, 2, 3]) )    // [1, 2, 3]
console.log(remove9s([9, 9, 9]))    // []

////// ---------NAME OBJECT NOTES
function convertNameToObject(filenames) {
    let name = filenames.split(' ')
    return { // any time u see object u will need these braces
        firstName: name[0],
        lastName: name[1]} // has to be in the {} to ID as an object
}

console.log(convertNameToObject('Johonny Silverhand'))

function capitalizeName(str) {
     let arr = str.split(" ")
     for (let i = 0; i < arr.length; i++) {
         arr[i] = arr[i].charAt(0).toUpperCase()+ arr[i].slice(1);
     }
     let str2 = arr.join(" ")
     return str2
}
console.log(capitalizeName('ron weasley')) // "Ron Weasley"
console.log(capitalizeName('Harry Potter')) // "Harry Potter"
console.log(capitalizeName('Nathan drake')) // "Nathan Drake"

function countOdds(num) {
    let oddsNum = 0;
    let even = 0
    for (let i = 0; i < num.length; i++){
        if (num[i] % 2 !== 0){
            oddsNum++ /// counts out the number of iterations that are true for the above statements
            console.log(oddsNum);
        } else if (num[i] % 2 === 0){
            even++
            console.log(even)
        }
    }
    return oddsNum
}

console.log(countOdds([2453,83,92,1,82,73,64,56,2,4]));

/////////////////------------- NOTES FOR ASSESSMENT COMPLETE

// stringArr.forEach((elem) => {
//     console.log(elem);
// })
 let name = 'My name'

let names = name

console.log(names)


function checkNumber(input) {
     if (input < 0){
         return true
     } else if (input > 0 ){
         return false

     }else {
         return 0
     }
}

console.log(checkNumber(0))

function getGrade(Score) {
     if (Score >= 90 && Score <= 100 ){
         return "A"
     }else if (Score >= 80 && Score <= 89){
         return "B"
     }else if (Score >= 70 && Score <= 79){
         return "C"
     }else if (Score >= 60 && Score <= 69){
         return "D"
     }else {
         return "Failed"
     }

}

console.log(getGrade(89))
console.log(getGrade(57))
console.log(getGrade(90))
console.log(getGrade(77))


let numberArray = [12,45,3,757,86,]
function filterNumbers(numbers) {

}