let clockContainer = document.querySelector(".js-clock")
    clockTitle = clockContainer.querySelector("h1")

function getTime() {
    const date = new Date()
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    // clockTitle.innerText = `${hours}:${minutes}:${seconds}`

    if (hours < 10) {
        clockTitle.innerText = `0${hours}`
    }
    else {
        clockTitle.innerText = hours
    }
    if (minutes < 10) {
        clockTitle.innerText = clockTitle.innerText +`:0${minutes}`
    }
    else {
        clockTitle.innerText = clockTitle.innerText +`:${minutes}`
    }
    if (seconds < 10) {
        clockTitle.innerText = clockTitle.innerText +`:0${seconds}`            
    }
    else {
        clockTitle.innerText = clockTitle.innerText +`:${seconds}`            
    }
}


function init() {
    getTime()
    setInterval(getTime, 1000)
}

init()