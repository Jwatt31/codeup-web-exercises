"use strict"
/*codes and calls*/
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

fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=32.75433667827946&lon=-97.31636650243732` +
    `&appid=${OPEN_WEATHER_API}` + `&units=imperial`)
    .then(data => data.json())
    .then(result => {
        const date = new Date(result.dt * 1000);
        console.log(date.toLocaleDateString())
        console.log(result)
        /*add in appends so these appear and disapper when search is made*/

    });


/*setting location */


// const location = document.getElementById("search").value;
document.getElementById("sub").addEventListener("click", function () { /*grab the button*/
    let Currentloca = geocode(document.getElementById("search").value, MAPBOX_API)
        // .then(result => result.json())
        .then(data => {
            console.log(data)
            let longitude = data[0]
            let latitude = data[1]
            map.setCenter([longitude, latitude])/*calll back to the map above in this code*/

            fetch(`https://api.openweathermap.org/data/2.5/forecast?APPID=` +
                OPEN_WEATHER_API + '&lat=' + latitude + '&lon=' + longitude +'&units=imperial')
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    const day = data.list
                    for (let i = 0; i < 40; i += 8 ) {/*40 because thats how many 3 hour cycals there are in a 3 day */
                        const weather = day[i]

                        const  date =new Date(weather.dt * 1000);
                        // console.log(date.toLocaleDateString()
                        // ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
                        // when asked for a state you get overlapping cards if time input an if statment to limet the cards that appear


                        const DataDiv = document.createElement('div');

                        const time = document.createElement('h2')
                        const temp = document.createElement('p')
                        const Icon = document.createElement('img')
                        const Discrip = document.createElement('p')
                        const Humid = document.createElement('p')
                        const wind = document.createElement('p')
                        const pressuer = document.createElement('p')

                        time.innerText = `${date.toLocaleDateString()}`
                        temp.innerText = `\u00B0F ${weather.main.temp_max} / \u00B0F ${weather.main.temp_min} `; /*weather.main.temp_min*/
                        // icon.innerText = weather.main.temp;
                        Discrip.innerText = weather.weather[0].description;
                        Humid.innerText = `Humidity ${weather.main.humidity}`;
                        wind.innerText = `Wind Speed${weather.wind.speed}`;
                        pressuer.innerText = `Under pressure${weather.main.pressure}`;

                        weatherOutPut.appendChild(DataDiv)
                        DataDiv.appendChild(time)
                        DataDiv.appendChild(temp)
                        DataDiv.appendChild(Discrip)
                        // weatherOutPut.appendChild(temp)
                        DataDiv.appendChild(Humid)
                        DataDiv.appendChild(wind)
                        DataDiv.appendChild(pressuer)

                        DataDiv.classList.add('Weather-Data')
                        if (DataDiv.length){
                            DataDiv[0].parentNode.removeChild()
                        }


                        /*need to add a remove function*/



                    }


                })
        })

})


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





