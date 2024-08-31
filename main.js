let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;
let isPaused = false;

function updateDisplay() {
  document.querySelector(".milliseconds").innerHTML = milliseconds.toString().padStart(3, '0');
  document.querySelector(".seconds").innerHTML = seconds.toString().padStart(2, '0');
  document.querySelector(".minutes").innerHTML = minutes.toString().padStart(2, '0');
  document.querySelector(".hours").innerHTML = hours.toString().padStart(2, '0');
}

function startTimer() {
  interval = setInterval(function() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
      milliseconds = 0;
      seconds += 1;
    }
    if (seconds >= 60) {
      seconds = 0;
      minutes += 1;
    }
    if (minutes >= 60) {
      minutes = 0;
      hours += 1;
    }
    updateDisplay();
  }, 10);
}

document.getElementById('start').addEventListener('click', function() {
  clearInterval(interval);
  isPaused = false;
  startTimer();
  document.getElementById('pause-resume').innerHTML = '<i class="fa fa-pause"></i> Pause';
});

document.getElementById('stop').addEventListener('click', function() {
  clearInterval(interval);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  isPaused = false;
  document.getElementById('pause-resume').innerHTML = '<i class="fa fa-pause"></i> Pause';
});

document.getElementById('pause-resume').addEventListener('click', function() {
  if (isPaused) {
    startTimer();
    this.innerHTML = '<i class="fa fa-pause"></i> Pause';
    isPaused = false;
  } else {
    clearInterval(interval);
    this.innerHTML = '<i class="fa fa-play"></i> Resume';
    isPaused = true;
  }
});
