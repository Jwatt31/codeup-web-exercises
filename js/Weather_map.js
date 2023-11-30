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

function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${coordinates.lng},${coordinates.lat}.json?access_token=${token}`)
        .then( res => res.json() )
        .then( data => data.features[0].place_name );
}

/*weather map fetch and map*/

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    zoom: 10,
    center: [-96.80315647882033, 32.777560104836496]
})

fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${OPEN_WEATHER_API}`+`&units=imperial`)
    .then(data => data.json())
    .then(result => {const date = new Date(result.dt * 1000);
        console.log(date.toLocaleDateString())
        console.log(result)
    });

/*Dark mode add in */
