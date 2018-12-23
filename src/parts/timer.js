function timer() {
    let days = document.querySelector("#days"),
        hours = document.querySelector("#hours"),
        minutes = document.querySelector("#minutes"),
        seconds = document.querySelector("#seconds"),
        deadLine = "2018-12-31";

    let timer = setInterval(() => countdown(deadLine), 1000);

    function countdown(time){
        let timeNow = (new Date()).getTime() - (new Date()).getTimezoneOffset()*60*1000;

        let diff = Math.floor((Date.parse(time) - timeNow)/1000);

        let sec = diff % 60,
            min = Math.floor((diff % 3600) / 60),
            h = Math.floor((diff % (60 * 60 * 24)) / 3600),
            d = Math.floor((diff % (60 * 60 * 24 * 365)) / (3600 * 24));
    
        seconds.textContent = ("0" + sec).slice(-2);
        minutes.textContent = ("0" + min).slice(-2);
        hours.textContent = ("0" + h).slice(-2);
        days.textContent = ("0" + d).slice(-2);

        if(diff <= 0){
            clearInterval(timer);
            seconds.textContent = "00";
            minutes.textContent = "00";
            hours.textContent = "00";
            days.textContent = "00";
        }
    }
}

module.exports = timer;