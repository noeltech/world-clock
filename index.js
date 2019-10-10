console.log("app is online");
// make an element variable of seconds

cities = [
  { name: "manila", offset: 8 },
  { name: "paris", offset: 2 },
  { name: "new-york", offset: -4 }
];

function computeCurrentTime(offset) {
  let now = new Date();
  let localOffset = now.getTimezoneOffset() * 60000;
  let currentUTC = now.getTime() + localOffset;
  let currentTime = currentUTC + offset * 3600000;
  return new Date(currentTime);
}

timers = [];
// getInititalTime();

function activateClock(city, offset) {
  let longhand = document.querySelector(`#longhand__${city}`);
  let minuteHand = document.querySelector(`#minuteHand__${city}`);
  let hourHand = document.querySelector(`#hourHand__${city}`);
  //  set the current time
  let dateTime_elem = document.querySelector(`.dateTimeText__${city}`);
  let intitalTime = computeCurrentTime(offset);
  rotateHand(intitalTime.getSeconds(), longhand, 6);
  rotateHand(intitalTime.getMinutes(), minuteHand, 6);
  rotateHand(intitalTime.getHours(), hourHand, 30);

  // update the time every seconds
  console.log(city);
  let interval = setInterval(updateTime, 1000);
  function updateTime() {
    let now = computeCurrentTime(offset);
    let dateTime_text = now.toLocaleTimeString();
    let sec = now.getSeconds();
    dateTime_elem.textContent = dateTime_text;

    if (sec == 0) rotateHand(now.getMinutes(), minuteHand, 6);

    let min = now.getMinutes();
    if (min == 0) rotateHand(now.getHours(), hourHand, 30);

    rotateHand(sec, longhand, 6);
  }
  timers.push(interval);
}

activateClock(cities[2].name, cities[2].offset);
activateClock(cities[0].name, cities[0].offset);
activateClock(cities[1].name, cities[1].offset);

// setTimeout(() => {
//   clearInterval(timers[0]);
//   document.querySelector("#clock_new-york").remove();
//   timers.splice(0, 1);
// }, 3000);

function rotateHand(time, element, multiplier) {
  console.log(multiplier);
  if (time == 0) {
    element.setAttribute("style", `transform:rotate(0deg)`);
  } else {
    element.setAttribute("style", `transform:rotate(${time * multiplier}deg)`);
  }
}

// function rotateMinutes(min, city) {
//   let minuteHand = document.querySelector(`#minuteHand__${city}`);

//   let deg = 0;
//   min == 0
//     ? ((deg = 0), updateRotation(deg, minuteHand))
//     : ((deg = min * 6), updateRotation(deg, minuteHand));
// }

// function rotateHour(hour, city) {
//   let hourHand = document.querySelector(`#hourHand__${city}`);

//   let deg = 0;
//   if (hour == 24) {
//     deg = 0;
//     updateRotation(deg, hourHand);
//   } else {
//     deg = hour * 30;
//     updateRotation(deg, hourHand);
//   }
// }
// activateClock();

// let activeClocks = [];
// function clock() {
//   (this.name = "England Clock"),
//     (this.initial_time = 12),
//     (this.activClock = function() {
//       getInititalTime();
//     });
// }

// setTimeout(() => {
//   let clock1 = new clock();
//   clock1.activClock();
//   activeClocks.push(clock1);
// }, 2000);
// let name = "Paris Clock";
// clock.activClock();
