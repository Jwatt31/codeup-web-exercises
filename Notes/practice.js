// arra = [1,23,5,4,9,7,6,9]
// function getRidofNine(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]=== 9){
//             arr.splice(i,1);
//             i--;
//         }
//     }return arr
//
// }
//
// console.log(getRidofNine(arra))
// function negative(num) {
//     return num < 0
// }
//
// console.log(negative(-9))

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


// function remove9s(num) {
//     let result =[] // creating a new array
//     for (let i = 0; i < num.length; i++) { // we want to useing the .length so that it reads out the whole array not just
//         if (num[i] !== 9){ // removes everything but 9 and passing any not 9s into the next argument below
//             result.push(num[i]); //  creates a new array without the 9 and pushes the new not 9 numbers into the array
//         }
//     }
//     return result; // returns new array no the original
// }
//
// //.filter // is an api
//
//
// console.log(remove9s([7, 8, 9, 10])) // [7, 8, 10]
// console.log(remove9s([1, 2, 3]) )    // [1, 2, 3]
// console.log(remove9s([9, 9, 9]))    // []
//
// ////// ---------NAME OBJECT NOTES
// function convertNameToObject(filenames) {
//     let name = filenames.split(' ')
//     return { // any time u see object u will need these braces
//         firstName: name[0],
//         lastName: name[1]} // has to be in the {} to ID as an object
// }
//
// console.log(convertNameToObject('Johonny Silverhand'))
//
// function capitalizeName(str) {
//      let arr = str.split(" ")
//      for (let i = 0; i < arr.length; i++) {
//          arr[i] = arr[i].charAt(0).toUpperCase()+ arr[i].slice(1);
//      }
//      let str2 = arr.join(" ")
//      return str2
// }
// console.log(capitalizeName('ron weasley')) // "Ron Weasley"
// console.log(capitalizeName('Harry Potter')) // "Harry Potter"
// console.log(capitalizeName('Nathan drake')) // "Nathan Drake"
//
// function countOdds(num) {
//     let oddsNum = 0;
//     let even = 0
//     for (let i = 0; i < num.length; i++){
//         if (num[i] % 2 !== 0){
//             oddsNum++ /// counts out the number of iterations that are true for the above statements
//             console.log(oddsNum);
//         } else if (num[i] % 2 === 0){
//             even++
//             console.log(even)
//         }
//     }
//     return oddsNum
// }
//
// console.log(countOdds([2453,83,92,1,82,73,64,56,2,4]));

/////////////////------------- NOTES FOR ASSESSMENT COMPLETE

// stringArr.forEach((elem) => {
//     console.log(elem);
// })
//  let name = 'My name'
//
// let names = name
//
// console.log(names)


// function checkNumber(input) {
//      if (input < 0){
//          return true
//      } else if (input > 0 ){
//          return false
//
//      }else {
//          return 0
//      }
// }
//
// console.log(checkNumber(-5))
//
// function getGrade(Score) {
//      if (Score >= 90 && Score <= 100 ){
//          return "A"
//      }else if (Score >= 80 && Score <= 89){
//          return "B"
//      }else if (Score >= 70 && Score <= 79){
//          return "C"
//      }else if (Score >= 60 && Score <= 69){
//          return "D"
//      }else {
//          return "Failed"
//      }
//
// }
//
// console.log(getGrade(89))
// console.log(getGrade(57))
// console.log(getGrade(90))
// console.log(getGrade(77))


// let numberArray = [12, 45, 3, 757, 86,] //filter numbers by divisables 3 and 5
// function filterNumbers(numbers) {
//     let result = []
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 3 == 0 && numbers[i] % 5 == 0) {
//             result.push(numbers[i])
//         }
//     }
//     return result
//
// }
//
// console.log(filterNumbers(numberArray))
//
// function calAreaOfRec(height, width) {
//     if (height <= 0 || width <= 0) {
//         return "plz enter positive and not 0 nombers"
//     } else {
//         return height * width
//     }
//
// }
//
// console.log(calAreaOfRec(69, 24))

// find largets number in an array of numbers
// function largestNum(number) {
//     if (number.length === 0) {
//         return null;
//     } else {
//         let largestNum2 = number[0] ///this must be above
//         for (let i = 0; i < number.length; i++) {
//
//             if (number[i] > largestNum2) {
//                 largestNum2 = number[i];
//
//             }
//
//         }
//         return largestNum2;
//     }
//
// }
// //
// let theseNums = [28, 759, 3, 84, 593, 484, 382, 284, 3, 2, 5, 22, 3, 23]
// console.log(largestNum(theseNums))

// find the avrage of a array of numbers
// function avgArraSum(nums) {
//     if (nums === 0){ /// if problem asks for a null value
//         return null;
//     }else{
//         let sum = 0
//         for (let i = 0; i < nums.length; i++) {
//                 sum += nums[i];
//             }
//         return sum / nums.length;
//
//         }
//
//
// }

// console.log(avgArraSum(theseNums))
// let sentice = 'will the real slim shady please stand up'
// // count vowles in a string of and returns the number of vowles in it
// function countVowles(str) {
//     let newstr = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i)==='a' ||str.charAt(i)=== 'e' || str.charAt(i)==='o' || str.charAt(i)==='i' || str.charAt(i)==='u'){
//             newstr++
//         }
//     }
//     return newstr
// }
//
// console.log(countVowles(sentice))

//reverse the string
// function reverseStr(str) {
//     return str.split('').reverse().join("")
// }
//
// console.log(reverseStr(sentice))

// let persons=[
//     {name: 'adam', age: 30},
//     {name: 'bill', age: 23},
//     {name: 'chris', age: 35},
//     {name: 'ann', age: 8},
//     {name: 'kyle', age: 12}
// ]
//
// //using the person chart above id whos an audlt based on age
// function isAdult(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].name.age <= 18){
//             console.log( `${arr[i].name} arent adults`)
//         }else{
//             return 'they are adults'
//         }
//
//     }
//     return arr[i]
//
// }
//
// console.log(isAdult(persons))
//
////find largest ni=umber
// function largstNum(input) {
//     let sum= 0
//     for (let i = 0; i < input.length; i++) {
//         sum += input[i]
//         if (input[i] === 0 ){
//             return null
//         }else if (input[i]  sum){
//             return sum
//
//         }
//
//     }
//
// }

/*random color gen*/
function changecolor() {
    let letters = '0123456789ABCDEF';
    let color="#";
    for (let i = 0; i < 6; i++) {
        color +=
            letters[Math.floor(Math.random()* 16)];
    }
    return color
}
let randomcolor=changecolor();
console.log(randomcolor)

/*code for coffee project */
function updateCoffees() {
    const selectedRoast = roastSelection.value.toLowerCase();
    const searchTerm = userTexts.value.trim().toLowerCase();

    const filteredCoffees = coffees.filter(coffee => {
        const matchesRoast = coffee.roast.toLowerCase() === selectedRoast || selectedRoast === 'all';
        const matchesSearch = coffee.name.toLowerCase().includes(searchTerm);
        return matchesRoast && matchesSearch;
    });

    coffeesList.innerHTML = renderCoffees(filteredCoffees);
}const userTexts = document.querySelector('#userText');