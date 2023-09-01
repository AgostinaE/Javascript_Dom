import weather from '../data/current-weather.js'
import {formatDate, formatTemp} from './utils/format-data.js'   
function setCurrentCity ($el, city) {
$el.textContent = city
}
function setCurrentTemp ($el, temp) {
    $el.textContent = formatTemp(temp)
}
function setCurrentDate ($el) {
    const date = new Date()
    const formattedDate = formatDate(date)
    $el.textContent = date
}
function solarStatus($el) {
    return 'morning'
    return 'nigth'
}

function setBackground ($el, solarStatus) {
    $el.style.backgroundImage = `url(./images/${solarStatus}-drizzle.jpg)`	
}
function configCurrentWeather(weather) {
    const $currentWeatherDate = document.querySelector('#current-weather-date')
    setCurrentDate($currentWeatherDate)

    const $currentWeatherCity = document.querySelector('#current-weather-city')
    const city = weather.name
    setCurrentCity($currentWeatherCity, city)

    const $currentWeatherTemp = document.querySelector('#current-weather-temp')
    const temp = weather.main.temp
    setCurrentTemp($currentWeatherTemp, temp)
//background
const $app = document.querySelector('#app')
setBackground($app, solarStatus())
}
export default function currentWeather(){
    configCurrentWeather(weather)
}
