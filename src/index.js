import getLocation from './utils/getLocation';

// MAIN APP

getLocation();

// getHours() gives you an integer from 0 to 23
// (the ints are floored btw, for example if its 
//  1:40pm rn, its gonna give you 13 cuz its the
//  13th hour of the day)
// so im gonna make more bg colors to fit the
// times better

const userTime = new Date().getHours();

if (userTime >= 5 && userTime <= 7) {
    console.log('This is sunrise')
    document.body.style.backgroundColor = '#FFDB00'
}
else if (userTime >= 8 && userTime <= 15) {
    console.log('this is broad daylight')
    document.body.style.backgroundColor = '#fff'
}
else if (userTime >= 16 && userTime <= 18) {
    console.log('This is sunset')
    document.body.style.backgroundColor = '#FE8714'
}
else if (userTime >= 19 && userTime <= 4) {
    console.log('its nighttime')
    document.body.style.backgroundColor = '#27445C'
}

console.log(userTime)