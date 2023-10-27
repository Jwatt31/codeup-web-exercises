'use strict'

function heading(string) {
    let heading1 = '<h1>';
    heading1 += string + '</h1>';
    return heading1
}

console.log(heading('how i met your mothers'))

function noOrder(item, item2, item3) {
    let top = '<ul>' +"\n";
    let first = top += "     "+ '<li>' + `${item2}`+`</li>`
    let second = "     "+ "<li>" + `${item}` + '</li>'
    let third= "     "+'<li>' + item3 + '</li>'
    return first + "\n" + second + "\n" + third +"\n" +'</ul>'
}
console.log(noOrder('cat','dog','snake'))


////// try to make a list like above with iterationg
function Order(str) {
    let newOrder = str.split(",")
    let orderList = '<ul>'
    for (let i = 0; i < Order.length; i++) {

    }

}

console.log(Order(['cat','dog','snake']))

///// try to make one with an orderd ...list method
////// ...listiteam