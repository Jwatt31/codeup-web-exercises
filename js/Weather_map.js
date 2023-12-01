"use strict"
/*codes and calls*/
const coordinates = document.getElementById('coordinates');
const weatherOutPut = document.querySelector('#forecast')
mapboxgl.accessToken = MAPBOX_API;


/*Geocode */

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
        .then(res => res.json())
        .then(data => data.features[0].center);
}

/*weather map fetch and map*/

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    zoom: 10,
    center: [-97.31636650243732, 32.75433667827946]
})

/*makes the og cards at load*/
fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=32.75433667827946&lon=-97.31636650243732` +
    `&appid=${OPEN_WEATHER_API}` + `&units=imperial`)
    .then(data => data.json())
    .then(result => {
        const day = result.list
        for (let i = 0; i < 40; i += 8) {/*40 because thats how many 3 hour cycals there are in a 3 day */
            const weather = day[i]
            const date = new Date(weather.dt * 1000)
            // console.log(date.toLocaleDateString())
            // console.log(result)

            /*add in appends so these appear and disapper when search is made*/
            let DataDiv = document.createElement('div');
            let time = document.createElement('h2')
            let temp = document.createElement('p')
            let Icon = document.createElement('img')
            let Discrip = document.createElement('p')
            let Humid = document.createElement('p')
            let wind = document.createElement('p')
            let pressuer = document.createElement('p')

            /*creates the content in the cards*/
            time.innerText = `${date.toLocaleDateString()}`
            temp.innerText = `\u00B0F ${weather.main.temp_max} / \u00B0F ${weather.main.temp_min} `; /*weather.main.temp_min*/
            Icon.src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
            Discrip.innerText = weather.weather[0].description;
            Humid.innerText = `Humidity ${weather.main.humidity}`;
            wind.innerText = `Wind Speed${weather.wind.speed}`;
            pressuer.innerText = `Under pressure${weather.main.pressure}`;

            weatherOutPut.appendChild(DataDiv)
            DataDiv.appendChild(time)
            DataDiv.appendChild(temp)
            DataDiv.appendChild(Discrip)
            DataDiv.appendChild(Icon)
            DataDiv.appendChild(Humid)
            DataDiv.appendChild(wind)
            DataDiv.appendChild(pressuer)
            DataDiv.classList.add('Weather-Data')

        }
    });


/*setting location */

document.getElementById("sub").addEventListener("click", function () { /*grab the button*/
    let Currentloca = geocode(document.getElementById("search").value, MAPBOX_API)
        // .then(result => result.json())
        .then(data => {
            console.log(data)
            let longitude = data[0]
            let latitude = data[1]
            map.setCenter([longitude, latitude])/*calll back to the map above in this code*/

            fetch(`https://api.openweathermap.org/data/2.5/forecast?APPID=` +
                OPEN_WEATHER_API + '&lat=' + latitude + '&lon=' + longitude + '&units=imperial')
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    /*deleates the existing tags*/
                    weatherOutPut.innerHTML = ''

                    const day = data.list
                    for (let i = 0; i < 40; i += 8) {/*40 because thats how many 3 hour cycals there are in a 3 day */
                        const weather = day[i]
                        const date = new Date(weather.dt * 1000);

                        /*Creates the Tags to be populated*/
                        const DataDiv = document.createElement('div');
                        const time = document.createElement('h2')
                        const temp = document.createElement('p')
                        const Icon = document.createElement('img')
                        const Discrip = document.createElement('p')
                        const Humid = document.createElement('p')
                        const wind = document.createElement('p')
                        const pressuer = document.createElement('p')

                        /*creates the content in the cards*/
                        time.innerText = `${date.toLocaleDateString()}`
                        temp.innerText = `\u00B0F ${weather.main.temp_max} / \u00B0F ${weather.main.temp_min} `; /*weather.main.temp_min*/
                        Icon.src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
                        Discrip.innerText = weather.weather[0].description;
                        Humid.innerText = `Humidity ${weather.main.humidity}`;
                        wind.innerText = `Wind Speed${weather.wind.speed}`;
                        pressuer.innerText = `Under pressure${weather.main.pressure}`;

                        weatherOutPut.appendChild(DataDiv)
                        DataDiv.appendChild(time)
                        DataDiv.appendChild(temp)
                        DataDiv.appendChild(Discrip)
                        DataDiv.appendChild(Icon)
                        DataDiv.appendChild(Humid)
                        DataDiv.appendChild(wind)
                        DataDiv.appendChild(pressuer)

                        /*sets the class*/

                        DataDiv.classList.add('Weather-Data')


                        /*need to add a remove function*/


                    }


                })
        })

})

/*making marker and moving that marker when dragged*/

const marker = new mapboxgl.Marker({draggable: true})
    .setLngLat([-97.31636650243732, 32.75433667827946])
    .addTo(map)

function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`


    let longitude = lngLat.lng
    let latitude = lngLat.lat
    map.setCenter([longitude, latitude])/*calll back to the map above in this code*/
    fetch(`https://api.openweathermap.org/data/2.5/forecast?APPID=` +
        OPEN_WEATHER_API + '&lat=' + latitude + '&lon=' + longitude + '&units=imperial')
        .then(res => res.json())
        .then(data => {
            console.log(data)

            weatherOutPut.innerHTML = ''

            const day = data.list
            for (let i = 0; i < 40; i += 8) {/*40 because thats how many 3 hour cycals there are in a 3 day */
                const weather = day[i]
                const date = new Date(weather.dt * 1000);
                // console.log(date.toLocaleDateString()
                // ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
                // when asked for a state you get overlapping cards if time input an if statment to limet the cards that appear


                /*Creates the Tags to be populated*/
                const DataDiv = document.createElement('div');
                const time = document.createElement('h2')
                const temp = document.createElement('p')
                const Icon = document.createElement('img')
                const Discrip = document.createElement('p')
                const Humid = document.createElement('p')
                const wind = document.createElement('p')
                const pressuer = document.createElement('p')

                /*creates the content in the cards*/
                time.innerText = `${date.toLocaleDateString()}`
                temp.innerText = `\u00B0F ${weather.main.temp_max} / \u00B0F ${weather.main.temp_min} `; /*weather.main.temp_min*/
                Icon.src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
                Discrip.innerText = weather.weather[0].description;
                Humid.innerText = `Humidity ${weather.main.humidity}`;
                wind.innerText = `Wind Speed${weather.wind.speed}`;
                pressuer.innerText = `Under pressure${weather.main.pressure}`;

                weatherOutPut.appendChild(DataDiv)
                // DataDiv.style.backgroundImage = `url(image/sunny.jpg)`
                DataDiv.appendChild(time)
                DataDiv.appendChild(temp)
                DataDiv.appendChild(Discrip)
                DataDiv.appendChild(Icon)
                DataDiv.appendChild(Humid)
                DataDiv.appendChild(wind)
                DataDiv.appendChild(pressuer)

                /*sets the class*/

                DataDiv.classList.add('Weather-Data')


                /*need to add a remove function*/
            }
        })
}

marker.on('dragend', onDragEnd);


/*Dark mode add in */

// function switchToDarkModeIfNeeded() {
//     let currentDate = new Date();
//     let currentHour = currentDate.getHours();
//     if (currentHour >= 14) {
//         document.body.classList.add ('dark-mode');
//     }else {
//         document.body.classList.remove('dark-mode');
//     }
// }
//
// setInterval(switchToDarkModeIfNeeded, 6000);

// setTimeout()

/*location in header*/


/*have the cards colors change based on the weather*/
// document.querySelector('.Weather-Data.').value
//     if (Discrip.innerText === 'clear sky'){
//     return DataDiv.style.backgroundImage = "url(image/sunny.jpg)"
// }else if (Discrip.innerText === 'overcast clouds'){
//     return DataDiv.style.backgroundImage = "url(image/Cloudy.jpg)"
// }


// if (Discrip.innerText === 'clear sky'){
//     return DataDiv.style.backgroundImage = "url(image/sunny.jpg)"
// }else if (Discrip.innerText === 'overcast clouds'){
//     return DataDiv.style.backgroundImage = "url(image/Cloudy.jpg)"
// }

