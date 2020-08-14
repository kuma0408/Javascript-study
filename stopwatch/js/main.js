'use strict';

{
    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');

    let startTime;
    let timoutId
    let elapsedTime = 0;

    const countUp = () => {
        const d = new Date(Date.now() - startTime + elapsedTime);
        const minute = String(d.getMinutes()).padStart(2, '0');
        const sec = String(d.getSeconds()).padStart(2, '0');
        const msec = String(d.getMilliseconds()).padStart(3, '0');

        timer.textContent = `${minute}:${sec}.${msec}`

        timoutId = setTimeout(() => {
            countUp();
        }, 10);
    };

    start.addEventListener('click', () => {
        if (start.classList.contains('inactive')) {
            return;
        }
        setButtonStateRunning();
        startTime = Date.now()
        countUp();
    });

    stop.addEventListener('click', () => {
        if (stop.classList.contains('inactive')) {
            return;
        }
        setButtonStateStopped();
        clearTimeout(timoutId);
        elapsedTime += Date.now() - startTime;
    });

    reset.addEventListener('click', () => {
        if (reset.classList.contains('inactive')) {
            return;
        }
        setButtonStateInitial();
        timer.textContent = '00:00.000';
        elapsedTime = 0;
    });

    function setButtonStateInitial() {
        start.classList.remove('inactive');
        stop.classList.add('inactive');
        reset.classList.add('inactive');
    }

    setButtonStateInitial();

    function setButtonStateRunning() {
        start.classList.add('inactive');
        stop.classList.remove('inactive');
        reset.classList.add('inactive');
    }
    function setButtonStateStopped() {
        start.classList.remove('inactive');
        stop.classList.add('inactive');
        reset.classList.remove('inactive');
    }
}