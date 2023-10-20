//unshift
const daysOfTheWeek = ['mon', 'tue', 'wed', 'thu']

console.log(daysOfTheWeek)

// ///////adding sunday
daysOfTheWeek.unshift('sun')

console.log(daysOfTheWeek)

/////// add friday saturday
daysOfTheWeek.push ('fri' ,'sat')

console.log(daysOfTheWeek)

/////// remove
const toDoList =[ 'take out trash', 'clean the car', 'pay bills'];

console.log('todo list')
console.log(toDoList)

console.log('completing the last item: ' + toDoList[toDoList.length-1 ])
/// returning the last iteam in the list

let removedItem = toDoList
console.log('task complete ' + removedItem)
console.log(removedItem)

//console.log('task done '+ doneItem)

let colors = ['red', 'yellow', 'green', 'red', 'white', 'blue']
let index= colors.indexOf('green')
console.log(index)

index = colors.indexOf('red')

index = colors.lastIndexOf('red')

let slice = colors.slice(2,4)
console.log(slice)

slice = colors.slice(3)
console.log(slice)


console.log('reversing colors')