import getLocation from './utils/getLocation';
import getBackgroundColor from './utils/getBackgroundColor';
// MAIN APP

getLocation();

const userTime = new Date().getHours();
document.body.style.backgroundColor = getBackgroundColor(userTime);

console.log(userTime)