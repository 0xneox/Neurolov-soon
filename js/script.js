const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

// Set the target date and time
const targetDate = new Date("2024-07-26T23:59:59").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    clearInterval(timeFunction);
    seconds.textContent = "00";
    minutes.textContent = "00";
    hours.textContent = "00";
    days.textContent = "00";
    return;
  }

  const daysValue = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursValue = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesValue = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const secondsValue = Math.floor((timeDifference % (1000 * 60)) / 1000);

  days.textContent = daysValue < 10 ? `0${daysValue}` : daysValue;
  hours.textContent = hoursValue < 10 ? `0${hoursValue}` : hoursValue;
  minutes.textContent = minutesValue < 10 ? `0${minutesValue}` : minutesValue;
  seconds.textContent = secondsValue < 10 ? `0${secondsValue}` : secondsValue;
};

const timeFunction = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display the countdown immediately
