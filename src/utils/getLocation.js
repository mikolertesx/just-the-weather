import getUrl from "./getUrl"
import pairTempWithDates from "./pairTempWithDates"
import { clockDiv, temperatureDiv, countryDiv, cityDiv } from "../selectors"
import { format } from "date-fns"
import getLocationName from "./getLocationName"

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
    const tempsWithDates = pairTempWithDates(weatherJson.hourly.temperature_2m, weatherJson.hourly.time)

    const currentTempWithDate = tempsWithDates[0]
    console.log(tempsWithDates)
    console.log(currentTempWithDate, '<-- current temp with date')

    clockDiv.innerText = format(currentTempWithDate.time, 'eeee PPpp')
    temperatureDiv.innerText = currentTempWithDate.temp + 'c'


    const locationName = getLocationName(latitude, longitude)
    console.log('LOCATION --->', locationName)

    countryDiv.innerText = locationName.userCountry
    cityDiv.innerText = locationName.address
}

function fail() {
    alert('Something bad happened :(')
}
