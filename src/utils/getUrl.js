// TODO Generate URL

// for temps, time, etc.
export default function getUrl(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;
    return url
}