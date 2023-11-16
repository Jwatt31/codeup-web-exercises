let myNEWp = document.createElement('p')
myNEWp.innerText="I'm a paragraph"
myNEWp.id='myNEWp'
myNEWp.classList.add('fs-2','fw-bold','text-center')

document.querySelector('#newContent').appendChild(myNEWp)

const myNewP = document.createElement("p");
myNewP.innerText = "I'm a new paragraph!";
myNewP.id = "myNewP";
myNewP.classList.add("fs-2", "fw-bold", "text-center");
document.querySelector("#newContent").appendChild(myNewP);

// document.querySelector("#newContent").removeChild(myNewP)

// document.querySelector("#newContent").remove(myNEWp)
myNEWp.remove();

const myAwesomeP = document.createElement("p");
myAwesomeP.innerText = "I'm an EVEN BETTER paragraph";
myAwesomeP.classList.add("fs-1", "text-center");
document.querySelector("#newContent").replaceChild(myAwesomeP, myNewP);

