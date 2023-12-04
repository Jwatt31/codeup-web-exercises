'use strict'

import randomNumber from "./number-utils-lec.js";

export function rollD6(){
    return randomNumber(1, 6);
}

export function rollD20(){
    return randomNumber(1, 20);
}

console.log(rollD20())
console.log(rollD6())

// export { rollD6, rollD20 }