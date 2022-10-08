const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
// const TimerTotal = document.getElementById('timerTotal')

const timeToLaunch = "25 oct 2022"

function countdown(){
    const timeToLaunchDate = new Date(timeToLaunch)
    const currentDay = new Date()

    const timeRest = (timeToLaunchDate - currentDay) / 1000// seconds for day of lauch
    console.log(timeRest)
    const days = Math.floor(timeRest / 3600 / 24); //3600 = 60s * 60m
    const hours = Math.floor(timeRest / 3600) % 24;
    const minutes = Math.floor(timeRest / 60) % 60;
    const seconds = Math.floor(timeRest % 60)

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    // TimerTotal.innerHTML = `${days}:${hours}:${minutes}:${seconds}`
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;

}


countdown()

setInterval(countdown, 1000) // for refresh the countdown for 1000ms or 1s