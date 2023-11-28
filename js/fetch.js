'use strict'

const searchForm = document.querySelector('#search')

searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let input = document.querySelector('#username').value
    fetch(`https://api.github.com/users/${input}/events/public`)
        .then(res => res.json())
        .then(data => console.log(`the user ${input} updated at ${data[0].created_at}`))
})

fetch(`https://api.github.com/users/Jwatt31/events/public`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })