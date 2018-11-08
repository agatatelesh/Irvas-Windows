function timer() {
    //Timer
let deadLine = '2019-07-04';

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor(t / 1000 % 60).toString(),
    minutes = Math.floor(t / 1000 / 60 % 60).toString(),
    hours = Math.floor(t / (1000 * 60 * 60) % 24).toString(),
    days = Math.floor(t / (1000 * 60 * 60 * 24)).toString();

        if (hours.length < 2) {
            hours = "0" + hours;
        }
        if (minutes.length < 2) {
            minutes = "0" + minutes;
        }
        if (seconds.length < 2) {
            seconds = "0" + seconds;
        }
        if (days.length < 2) {
            days = "0" + days;
        }

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,
            'days' : days
        };
}
function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        days = timer.querySelector('.days'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRemaining(endtime);
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;
        days.textContent = t.days;
         if (t.total <= 0) {                 
             clearInterval(timeInterval);
             hours.textContent = '00';
             minutes.textContent = '00';
             seconds.textContent = '00';
             days.textContent = '00';
         }
    }

}
  setClock('timer', deadLine);
}
module.exports = timer;