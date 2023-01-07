import getLocation from './utils/getLocation';

// MAIN APP
getLocation();
if (new Date().getHours() > 12) {
    console.log('This is late')
    document.body.style.backgroundColor = '#2b2626'
}
else {
    console.log('this is early')
    document.body.style.backgroundColor = '#dedc85'
}