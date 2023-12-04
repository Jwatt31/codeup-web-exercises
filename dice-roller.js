'use strict'
import {rollD20, rollD6} from "./Dice-lec";

document.querySelector("#rollD6").addEventListener('click', () => {
    document.querySelector("#d6Result").innerHTML = rollD6().toString();
});

document.querySelector("#rollD20").addEventListener('click', () => {
    document.querySelector("#d20Result").innerHTML = rollD20().toString();
});