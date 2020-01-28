// const start = new Date();
// let i = 0;

// const instervalId = setInterval(function() {
//   let now = new Date();
//   if (now.getMinutes() !== start.getMinutes() || ++i > 10) {
//     return clearInterval(instervalId);
//   }
//   console.log(`{i}: ${now}`);
// }, 5 * 1000);

function countdown() {
  console.log("Countdown: ");
  for (let i = 5; i >= 0; i--) {
    setTimeout(function() {
      console.log(i === 0 ? "GO" : i);
    }, (5 - i) * 1000);
  }
}
countdown();

// 14.2.3 오류 우선 콜백
