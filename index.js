let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;
let lapCount = 1;
let lapTimes = [];

let timerInterval;

startBtn.addEventListener('click', function () {
    timer = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
    lapBtn.disabled = false;
    timerInterval = setInterval(stopWatch, 10);
});

stopBtn.addEventListener('click', function () {
    timer = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(timerInterval);
});

resetBtn.addEventListener('click', function () {
    timer = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
    lapBtn.disabled = true;
    clearInterval(timerInterval);
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    lapCount = 1;
    lapTimes = [];
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    document.getElementById('lapList').innerHTML = "";
});

lapBtn.addEventListener('click', function () {
    if (timer) {
        const lapTime = {
            hour,
            minute,
            second,
            count
        };
        lapTimes.push(lapTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCount}: ${formatTime(lapTime)}`;
        document.getElementById('lapList').appendChild(lapItem);
        lapCount++;
    }
});

function formatTime(time) {
    return `${time.hour.toString().padStart(2, '0')}:
            ${time.minute.toString().padStart(2, '0')}:
            ${time.second.toString().padStart(2, '0')}:
            ${time.count.toString().padStart(2, '0')}`;
}

function stopWatch() {
    if (timer) {
        count++;
 
        if (count == 100) {
            second++;
            count = 0;
        }
 
        if (second == 60) {
            minute++;
            second = 0;
        }
 
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
 
        document.getElementById('hr').innerHTML = hour.toString().padStart(2, '0');
        document.getElementById('min').innerHTML = minute.toString().padStart(2, '0');
        document.getElementById('sec').innerHTML = second.toString().padStart(2, '0');
        document.getElementById('count').innerHTML = count.toString().padStart(2, '0');
    }
}