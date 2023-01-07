export default function pairTempWithDates(temp, time) {
    return temp.map((x, index) => ({ temp: x, time: new Date(time[index]) }))
}

