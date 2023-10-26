arra = [1,23,5,4,9,7,6,9]
function getRidofnine(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]=== 9){
            arr.splice(i,1);
            i--;
        }
    }return arr

}

console.log(getRidofnine(arra))
function negative(num) {
    return num < 0
}

console.log(negative(-9))

// Write a function named average that accepts an array of numbers and returns the average of those numbers.
function avrage(array) {
    let avg = array.reduce((acc))

}

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

