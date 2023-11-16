const box1=document.querySelector('.box1');
const parent = box1.parentElement/*if u chain these u can go all the way to the body*/
console.log(parent)

/*3 things that make an elemet
* 1. starting
*
*
* nodes are made of elements */

// const stateParksLIs = document.querySelector("#state-parks-texas").children;
// for(let i = 0; i < stateParksLIs.length; i++) {/*to target each of these Li u must have a for loop*/
//     stateParksLIs[i].style.fontWeight = "bold";
// }
const stateParksUL = document.getElementById('state-parks-texas');

stateParksUL.parentElement.style.backgroundColor='lightblue';
/* ---------------------------------------------------------- */
const stateParksLis=document.querySelector('#state-parks-texas').children;

for (let i = 0; i < stateParksLis.length; i++) { stateParksLis[i].style.color='red'
    stateParksLis[2].style.fontWeight='bold'
    stateParksLis[4].style.fontSize='30px'

}
/*----------------------------------------------------------------------------------*/
const nationalParksUL =document.querySelector('#national-parks')

nationalParksUL.firstElementChild.style.color="green";

nationalParksUL.lastElementChild.style.backgroundColor='beige';

/*-----------------------------------------------------------------*/
const nationalParksHeading= document.querySelector('#national-parks-heading');
nationalParksHeading.nextElementSibling.style.backgroundColor='salmon'