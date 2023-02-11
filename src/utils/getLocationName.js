import { lookUpRaw } from "geojson-places"

function getLocationName(latitude, longitude) {
    const locationName = lookUpRaw(latitude, longitude)
    console.log(locationName)

    const country = locationName.features[0].properties.admin
    const region = locationName.features[0].properties.region
    const regionName = locationName.features[0].properties.region_name

    return { userCountry: country, address: `${region}, ${regionName}` }
}

export default getLocationName