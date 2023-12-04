import randomGreeting from "./greeting-logic.js";


document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    // console.log(event)
    document.querySelector('p').innerText = `${randomGreeting()} ${event.target[0].value}`;
    event.target[0].value = '';
});
