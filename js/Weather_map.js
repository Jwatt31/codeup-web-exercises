"use strict"
/*codes and calls*/

mapboxgl.accessToken = MAPBOX_API;


/*Geocode */

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
        .then( res => res.json() )
        .then( data => data.features[0].center);
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
    `&appid=${OPEN_WEATHER_API}`+`&units=imperial`)
    .then(data => data.json())
    .then(result => {const date = new Date(result.dt * 1000);
        console.log(date.toLocaleDateString())
        console.log(result)

    });


/*setting location */

document.getElementById("sub").addEventListener("click", function () { /*grab the button*/
    let Currentloca = geocode(document.getElementById("search").value, MAPBOX_API);
    Currentloca.then(result => {
        console.log(result)
        map.setCenter([result[0], result[1]])/*calll back to the map above in this code*/
    })
    Currentloca.then()
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
let currentLocation = document.querySelector('.currentLocation')
currentLocation.innerText(`${geocode(document.getElementById("search").value)}`)






