/*to make thinsg easier make a const with  document.querySelector('#newContent') */

const newContent= document.querySelector('#newContent')/*ex*/
const createButton = document.querySelector("#create-a-div");

let myNEWp = document.createElement('p')
myNEWp.innerText="I'm a paragraph"
myNEWp.id='myNEWp'
myNEWp.classList.add('fs-2','fw-bold','text-center')




/*adds the content */

document.querySelector('#newContent').appendChild(myNEWp)



/*remove methods*/

const myNewP = document.createElement("p");
myNewP.innerText = "I'm a new paragraph!";
myNewP.id = "myNewP";
myNewP.classList.add("fs-2", "fw-bold", "text-center");
document.querySelector("#newContent").appendChild(myNewP);

// document.querySelector("#newContent").removeChild(myNewP)

// document.querySelector("#newContent").remove(myNEWp)
myNEWp.remove();



/*replace element */

const myAwesomeP = document.createElement("p");
myAwesomeP.innerText = "I'm an EVEN BETTER paragraph";
myAwesomeP.classList.add("fs-1", "text-center");

// this is the code for the replacement
document.querySelector("#newContent").replaceChild(myAwesomeP, myNewP);



/*before and after method to add new elemts to the section*/
const three = document.querySelector("#three");

const twoAndAHalf = document.createElement("li");
twoAndAHalf.innerText = "Two and a half";
three.before(twoAndAHalf);

const two = document.querySelector("#two");

const twoAndAHalfAfter = document.createElement("li");
twoAndAHalfAfter.innerText = "Two and a half After";
two.after(twoAndAHalfAfter);

/*////////////// DO NOT USE INNERHTML += IT REPLACES THE ELEMENT AND WILL MESS UP YOUR CODE \\\\\\\\\\\\\*/


/*user input adding it to the log */
// get references to the to-do input and its parent form
const toDoInput = document.querySelector("#to-do");
const toDoForm = toDoInput.parentElement;

// declare a callback to handle the user input
const handleUserInput = (event) => { /*event must be in this code to get it to stick into the log */
    event.preventDefault();
    // console.log(toDoInput.value);
    alert(toDoInput.value);
    toDoInput.value = '';/*this is needed to clear the input value after submit is hit */
}

// output user input to the DOM
toDoForm.addEventListener('submit', handleUserInput);
/*must add an event handel to keep th log */

/*dynamic DIV*/
// function to create new divs
// within each div there is a button with the class `event-trigger`
const createDiv = () => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("dynamic-div");
    newDiv.innerHTML = "<p>I'm a new div!</p>" +
        "<button class='event-trigger'>Click Me!</button>";/*this is saying select */
    document.querySelector("#new-div-section").appendChild(newDiv);
    /*this is added to make the click me button work*/
    // const eventButtons = document.querySelectorAll(".event-trigger");
    // const buttonEvent = () => console.log('Clicked!');
    // eventButtons.forEach( button => button.addEventListener('click', buttonEvent));
}
// add the click handler to the button
createButton.addEventListener('click', createDiv);

// THIS CODE WILL NOT WORK
// const eventButtons = document.querySelectorAll(".event-trigger");
// const buttonEvent = () => console.log('Clicked!');
// eventButtons.forEach( button => button.addEventListener('click', buttonEvent));

/*attempt to fix above code must be attached to the parent code or another approch below
*  */
const newDivSection = document.querySelector("#new-div-section");
newDivSection.addEventListener('click', (e)=>{
    if (e.target.classList.contains('event-trigger')){
        console.log('Clicked!');
    }
});