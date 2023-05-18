function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    //let month = date.getMonth();
    //let year = date.getFullYear();
    //let day = date.getDay();
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    let time = hour + ":" + min + ":" + sec;
    let watch = document.querySelector("#watch");
    watch.innerHTML = time;
    
    // para cambiar de color el dia de la semana
    
    let dias = document.querySelectorAll(".dias li");
    let diaActual = new Date().getDay();
    dias[diaActual].style.color = "#780000"
}
setInterval(currentTime, 1000)