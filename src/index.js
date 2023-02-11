import getLocation from './utils/getLocation';
import getBrackgroundColor from './utils/getBackgroundColor';
// MAIN APP

getLocation();

// getHours() gives you an integer from 0 to 23
// (the ints are floored btw, for example if its 
//  1:40pm rn, its gonna give you 13 cuz its the
//  13th hour of the day)
// so im gonna make more bg colors to fit the
// times better

const userTime = new Date().getHours();
document.body.style.backgroundColor = getBrackgroundColor(userTime);

console.log(userTime)