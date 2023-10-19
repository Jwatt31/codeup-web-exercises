'use strict'
///////----1.
while (true){
    let usernum = parseInt(prompt("enter you fav odd number between 1-50"));
    if (usernum >= 1 && usernum <= 50 && usernum % 2 ===1){
        console.log(`number entered ${usernum}`)
        for (let i =1; i <= 50; i += 2){
            if (i === usernum){
                console.log(`yikes! skipping numbers: ${usernum}`)
                continue
            }
            console.log(`here is an odd number ${i}`)
        }
        break;
    } else {
        alert("invaild input")
    }
}