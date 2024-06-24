function updateTimer() {
    let hours = parseInt(document.getElementById('hours').textContent);
    let minutes = parseInt(document.getElementById('minutes').textContent);
    let seconds = parseInt(document.getElementById('seconds').textContent);
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
      if (minutes < 0) {
        minutes = 59;
        hours--;
        if (hours < 0) {
          clearInterval(timerInterval);
          return;
        } else {
          document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        }
      }
      document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    }
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }
  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer();