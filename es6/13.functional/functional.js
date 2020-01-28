function isCurrentYearLeapYear() {
  const year = new Date().getFullYear();
  if (year % 4 !== 0) return false;
  else if (year % 100 != 0) return true;
  else if (year % 400 != 0) return false;
  else return true;
}

const daysInMonth = [
  31,
  isCurrentYearLeapYear() ? 29 : 28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
if (isCurrentYearLeapYear()) console.log("It is a leap year");

function isLeapYeaar(year) {
  if (year % 4 !== 0) return false;
  else if (year % 100 != 0) return true;
  else if (year % 400 != 0) return false;
  else return true;
}

const getNextRainbowColor = (function() {
  const color = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
  ];
  let colorIndex = -1;
  return function() {
    if (++colorIndex >= color.length) colorIndex = 0;
    return color[colorIndex];
  };
})();

// setInterval(function() {
//   document.querySelector(".rainbow").style[
//     "background-color"
//   ] = getNextRainbowColor();
// });

function getRainbowIterator() {
  const color = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
  ];
  let colorIndex = -1;
  return {
    next() {
      if (++colorIndex >= color.length) colorIndex = 0;
      return { value: color[colorIndex], done: false };
    }
  };
}

// setTimeout(() => {
//   console.log("hello");
// }, 1500);

var index;

/*-1이 여섯번 출력된다 setTimeout이 반복문이 끝나고 실행이됨*/

// for (index = 5; index >= 0; index--) {
//   setTimeout(() => {
//     console.log(index === 0 ? "go" : index);
//   }, (5 - index) * 1000);
// }

for (index = 5; index >= 0; index--) {
  (index => {
    setTimeout(() => {
      console.log(index === 0 ? "go" : index);
    }, (5 - index) * 1000);
  })(index);
}

/*let을 사용하면 루프 단계마다 변수 index 복사본을 새로 만든다. */
for (let index = 5; index >= 0; index--) {
  setTimeout(() => {
    console.log(index === 0 ? "go" : index);
  }, (5 - index) * 1000);
}
