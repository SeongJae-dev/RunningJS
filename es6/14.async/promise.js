// 14.3 프로미스(promise)
// 프로미스는 콜백의 단점을 해결하려는 시도 속에서 만들어졌다.

function countdown(seconds) {
  return new Promise(function(resolve, reject) {
    for (let i = seconds; i > 0; i--) {
      setTimeout(function() {
        if (i === 13) return reject(new Error("Oh my god"));
        if (i > 0) console.log(i + "...");
        else resolve(console.log("GO!"));
      }, (seconds - i) * 1000);
    }
  });
}

countdown(13).then(
  function() {
    console.log("countdown completed successflly");
  },
  function(err) {
    console.log("countdown experienced an error: " + err.message);
  }
);

const p = countdown(13);
p.then(function() {
  console.log("countdown completed successfully");
});
p.catch(function(err) {
  console.log("counttdown experienced an err: ", err.message);
});
