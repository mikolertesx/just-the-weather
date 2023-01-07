import getUrl from "./getUrl"
import pairTempWithDates from "./pairTempWithDates"

// TODO Get Location
export default function getLocation() {
    navigator.geolocation.getCurrentPosition(succeed, fail)
}

async function succeed(pos) {
    //poggers
    const { latitude, longitude } = pos.coords

    console.log('Success!')

    const url = getUrl(latitude, longitude)
    const response = await fetch(url)
    const weatherJson = await response.json()

    console.log(pairTempWithDates(weatherJson.hourly.temperature_2m, weatherJson.hourly.time))
}

function fail() {
    alert('Something bad happened :(')
}


