function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let month = date.getMonth();
    let year = date.getFullYear();
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    let time = hour + ":" + min + ":" + sec;
    let watch = document.querySelector("#watch");
    watch.innerHTML = time;
}
/*function currentDate() {
    let cDate = new Date ();
    let month = cDate.getMonth();
    let year = cDate.getFullYear();

    let currentDay = month + ", " + year;
    let date2 = document.querySelector("#dias");
    date2.innerHTML = currentDay;
}*/

setInterval(currentTime, 1000)
