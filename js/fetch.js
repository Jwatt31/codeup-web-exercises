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
    .then(data => {
        console.log(data)
    })

function getLAstCommit(username, token) {
    return fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {
            'Authorization': "token" + token
        }
    })
        .then(response => response.json)
}

getLAstCommit('Jwatt31', GITHUB_API_KEY)
    .then(data => {
        console.log(data)
        let commit = data.filter(event => event.type === 'PushEvent')
        console.log(commit);
        console.log(new Date(commit[0].created_at));
    })