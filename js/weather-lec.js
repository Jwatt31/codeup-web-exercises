"use strict"

fetch(`https://api.openweathermap.org/data/2.5/weather?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${OPEN_WEATHER_API}`+`&units=imperial`)
    .then(data => data.json())


    .then(result => {const date = new Date(result.dt * 1000);/*this is for the time */
        // console.log(date.getFullYear())/*only year*/
        console.log(date.toLocaleDateString())


        console.log(result)
    });
/*to get the forecast instead of weather*/
/*----------------------------------------------------replace weather with forecast*/
const weatherOutPut = document.querySelector('#forecast')
fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${OPEN_WEATHER_API}` +
    `&units=imperial`)
    .then(data => data.json())
    .then(result => {

    console.log(result)
    // result.list.forEach( weather => {
        // const  date =new Date(weather.dt * 1000);
        // console.log(date.toLocaleDateString())
        //
        // const time = document.createElement('p')
        // const temp = document.createElement('p')
        //
        // time.innerText = date.toLocaleDateString()
        // temp.innerText = weather.main.temp()
        //
        // weatherOutPut.appendChild(time)
        // weatherOutPut.appendChild(temp)
        //
        // })
        const day = result.list
        for (let i = 0; i < day.length; i+=8) {
            const weather = day[i]

            const  date =new Date(weather.dt * 1000);
            console.log(date.toLocaleDateString())

            const time = document.createElement('p')
            const temp = document.createElement('p')

            time.innerText = date.toLocaleDateString()
            temp.innerText = weather.main.temp;

            weatherOutPut.appendChild(time)
            weatherOutPut.appendChild(temp)

        }



    // });
})

/*to add impeirial */
// fetch(`https://api.openweathermap.org/data/2.5/weather?` +
//     `lat=29.426825118534886&lon=-98.48948239256946` +
//     `&appid=${OPEN_WEATHER_API}` +
//     `&units=imperial`)/*this adds in impeiral */
//     .then( data => data.json())
//     .then( currentWeather => console.log(currentWeather));
