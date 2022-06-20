const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");

const items = document.querySelectorAll(".deadline-format h2");

const deadline = document.querySelector(".deadline");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();

const futureDate = new Date(tempYear, tempMonth, tempDay + 25, 22, 30, 0);

// let futureDate = new Date(2022, 6, 28, 4, 40, 0);
// console.log(futureDate);

const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
console.log(month);

let weekday = weekdays[futureDate.getDay()];
console.log(weekday);

giveaway.textContent = `Giveaway Ends On ${weekday}, ${date} ${month} ${year}
${hours}:${minutes}`;

function getRemainingTime() {
  const today = new Date().getTime();
  console.log(today);

  const t = futureDate - today;
  console.log(t);

  const oneDay = 1000 * 24 * 60 * 60;
  const oneHour = 1000 * 24 * 60;
  const oneMinute = 1000 * 24;

  let days = t / oneDay;
  days = Math.floor(days);

  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  console.log(seconds);

  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countBegin);
    deadline.innerHTML = `<h2 class="expired">sorry, this giveaway has expired</h2>`;
  }
}

let countBegin = setInterval(getRemainingTime, 1000);

getRemainingTime();
