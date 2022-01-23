const clock = document.getElementById("clock")


timeGoesOn()

function timeGoesOn()
{
    const today = new Date()
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let AMorPM = ""
    let halfHours = ""
    if (hours > 12){
        AMorPM = "PM";
        halfHours = hours - 12
    } else 
    AMorPM = "AM"
    halfHours = hours

    let padHours = halfHours.toString().padStart(2,"0")
    let padMinutes = minutes.toString().padStart(2,"0")

    clock.innerText = `${AMorPM} ${padHours}:${padMinutes}`
}

setInterval(timeGoesOn, 1000);


