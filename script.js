const clock = document.getElementById('clock');

function clockSettings (){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let hour = hours < 10 ? `0${hours}`: hours
    let minute = minutes < 10 ? `0${minutes}`: minutes
    let second = seconds < 10 ? `0${seconds}`: seconds
    clock.innerHTML = `${hour}:${minute}:${second}`
    console.log(`${hour}:${minute}:${second}`)
    setTimeout(() => {
        clockSettings()
    }, 1000)
}

clockSettings()

