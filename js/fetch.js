'use strict'

let username = document.querySelector("#container")
let btnuser = document.querySelector("#btnUser")

username.addEventListener('submit', (event) => {
    event.preventDefault()
    let input = document.querySelector('#username')
    console.log(`${input} no its clafairy`)
})


fetch(`application/vnd.github+json${username}`)
console.log(response => response.data)

// Octokit.js
// https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//     auth: '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'
// })
//
// await octokit.request('GET /users/{username}/events', {
//     username: 'USERNAME',
//     headers: {
//         'X-GitHub-Api-Version': '2022-11-28'
//     }
// })