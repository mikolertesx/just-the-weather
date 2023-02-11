/** getBackgroundColor returns you a color based on the timeset */
export default function getBackgroundColor(userTime) {
    if (userTime >= 5 && userTime <= 7) {
        console.log('This is sunrise')
        return '#FFDB00';
    }
    else if (userTime >= 8 && userTime <= 15) {
        console.log('this is broad daylight')
        return '#fff';
    }
    else if (userTime >= 16 && userTime <= 18) {
        console.log('This is sunset')
        return '#FE8714';
    }
    else if (userTime >= 19 || userTime <= 4) {
        console.log('its nighttime')
        return '#27445C';
    }
}
