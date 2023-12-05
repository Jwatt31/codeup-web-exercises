"use strict"
import {geocode} from "./mapbox-geocoder-utils";

/*codes and calls*/
const coordinates = document.getElementById('coordinates');
const weatherOutPut = document.querySelector('#forecast')
mapboxgl.accessToken = MAPBOX_API;

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
            temp.innerText = `${weather.main.temp_max}\u00B0F / ${weather.main.temp_min}\u00B0F `; /*weather.main.temp_min*/
            Icon.src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
            Discrip.innerText = weather.weather[0].description;
            Humid.innerText = `Humidity ${weather.main.humidity}`;
            wind.innerText = `Wind Speed${weather.wind.speed}`;
            pressuer.innerText = `Under pressure${weather.main.pressure}`;


            /*adds them to the page*/
            weatherOutPut.appendChild(DataDiv)
            DataDiv.appendChild(time)
            DataDiv.appendChild(temp)
            DataDiv.appendChild(Discrip)
            DataDiv.appendChild(Icon)
            DataDiv.appendChild(Humid)
            DataDiv.appendChild(wind)
            DataDiv.appendChild(pressuer)
            DataDiv.classList.add('Weather-Data')


            if (Discrip.innerText === "clear sky") {
                DataDiv.style.backgroundImage = "url(image/clear-ligt.jpg)"
                DataDiv.style.color = 'DimGray'

            } else if (Discrip.innerText === "few clouds") {
                DataDiv.style.backgroundImage = "url(image/Cloudy.jpg)"

            } else if (Discrip.innerText === "scattered clouds") {
                DataDiv.style.backgroundImage = "url(image/scat-clouds.jpg)"


            } else if (Discrip.innerText === "broken clouds") {
                DataDiv.style.backgroundImage = "url(image/broken-clouds.jpg)"
                DataDiv.style.color = 'black'


            } else if (Discrip.innerText === "light rain") {
                DataDiv.style.backgroundImage = "url(image/light-rain.jpg)"


            } else if (Discrip.innerText === "heavy intensity rain") {
                DataDiv.style.backgroundImage = "url(image/rain.jpg)"


            } else if (Discrip.innerText === "light snow") {
                DataDiv.style.backgroundImage = "url(image/light-snow.jpg)"


            } else if (Discrip.innerText === "snow") {
                DataDiv.style.backgroundImage = "url(image/snow.jpg)"


            } else if (Discrip.innerText === "moderate rain") {
                DataDiv.style.backgroundImage = "url(image/Cloudy.jpg)"


            } else if (Discrip.innerText === "overcast clouds") {
                DataDiv.style.backgroundImage = "url(image/dark-over-clouds.jpg)"


            }

        }
    });


/*Search bar location */

document.getElementById("sub").addEventListener("click", function () { /*grab the button*/
    let Currentloca = geocode(document.getElementById("search").value, MAPBOX_API)
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
                        temp.innerText = ` ${weather.main.temp_max}\u00B0F / ${weather.main.temp_min}\u00B0F `; /*weather.main.temp_min*/
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
                        if (Discrip.innerText === "clear sky") {
                            DataDiv.style.backgroundImage = "url(image/clear-ligt.jpg)"
                            DataDiv.style.color = 'DimGray'

                        } else if (Discrip.innerText === "few clouds") {
                            DataDiv.style.backgroundImage = "url(image/Cloudy.jpg)"

                        } else if (Discrip.innerText === "scattered clouds") {
                            DataDiv.style.backgroundImage = "url(image/scat-clouds.jpg)"


                        } else if (Discrip.innerText === "broken clouds") {
                            DataDiv.style.backgroundImage = "url(image/broken-clouds.jpg)"
                            DataDiv.style.color = 'DimGray'


                        } else if (Discrip.innerText === "light rain") {
                            DataDiv.style.backgroundImage = "url(image/light-rain.jpg)"


                        } else if (Discrip.innerText === "heavy intensity rain") {
                            DataDiv.style.backgroundImage = "url(image/rain.jpg)"


                        } else if (Discrip.innerText === "light snow") {
                            DataDiv.style.backgroundImage = "url(image/light-snow.jpg)"


                        } else if (Discrip.innerText === "snow") {
                            DataDiv.style.backgroundImage = "url(image/snow.jpg)"


                        } else if (Discrip.innerText === "moderate rain") {
                            DataDiv.style.backgroundImage = "url(image/Cloudy.jpg)"


                        } else if (Discrip.innerText === "overcast clouds") {
                            DataDiv.style.backgroundImage = "url(image/dark-over-clouds.jpg)"


                        }


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
                temp.innerText = `${weather.main.temp_max}\u00B0F /  ${weather.main.temp_min}\u00B0F `; /*weather.main.temp_min*/
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
                if (Discrip.innerText === "clear sky") {
                    DataDiv.style.backgroundImage = "url(image/clear-ligt.jpg)"
                    DataDiv.style.color = 'DimGray'
                } else if (Discrip.innerText === "few clouds") {
                    DataDiv.style.backgroundImage = "url(image/Cloudy.jpg)"

                } else if (Discrip.innerText === "scattered clouds") {
                    DataDiv.style.backgroundImage = "url(image/scat-clouds.jpg)"


                } else if (Discrip.innerText === "broken clouds") {
                    DataDiv.style.backgroundImage = "url(image/broken-clouds.jpg)"
                    DataDiv.style.color = 'DimGray'


                } else if (Discrip.innerText === "light rain") {
                    DataDiv.style.backgroundImage = "url(image/light-rain.jpg)"


                } else if (Discrip.innerText === "heavy intensity rain") {
                    DataDiv.style.backgroundImage = "url(image/rain.jpg)"


                } else if (Discrip.innerText === "light snow") {
                    DataDiv.style.backgroundImage = "url(image/light-snow.jpg)"


                } else if (Discrip.innerText === "snow") {
                    DataDiv.style.backgroundImage = "url(image/snow.jpg)"


                } else if (Discrip.innerText === "moderate rain") {
                    DataDiv.style.backgroundImage = "url(image/Cloudy.jpg)"


                } else if (Discrip.innerText === "overcast clouds") {
                    DataDiv.style.backgroundImage = "url(image/dark-over-clouds.jpg)"


                }
            }
        })
}

marker.on('dragend', onDragEnd);


/*Dark mode add in */

setTimeout(() => {
    const e = document.querySelector('.animate');
    e.style.setProperty('--background-color', 'blue');
}, 2000);



