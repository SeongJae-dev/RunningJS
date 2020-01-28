// const Money = require("math-money");

// const oneDollar = Money.Dollar(1);

// const Dollar = Money.Dollar;
// const twoDollars = Dollar(2);

const sin = Math.sin;
const cos = Math.cos;
const theta = Math.PI / 4;
const zoom = 2;
const offset = [1, -3];

//함수를 배열에 저장
const pipeline = [
  function rotate(p) {
    return {
      x: p.x * cos(theta) - p.y * sin(theta),
      y: p.x * sin(theta) - p.y * cos(theta)
    };
  },
  function scale(p) {
    return { x: p.x * zoom, y: p.y * zoom };
  },
  function translate(p) {
    return { x: p.x + offset[0], y: p.y + offset[1] };
  }
];

// pipeline은 2D 변형에 필요한 함수의 배열입니다.
// 함수가 배열의 순차적응로 실행된다.
const p = { x: 1, y: 1 };
let p2 = p;
for (let index = 0; index < pipeline.length; index++) {
  p2 = pipeline[index](p2);
}
console.log(p2);

//13.7 재귀

// function findNeedle(haystack) {
//   if (haystack.length === 0) return "no haystack here!";
//   if (haystack.shift() === "needle") return "find it!";
//   return findNeedle(haystack);
// }
const findNeedle = haystack => {
  if (haystack.length === 0) return "no haystack here!";
  if (haystack.shift() === "needle") return "find it!";
  return findNeedle(haystack);
}; //

console.log(findNeedle(["hey", "hay?", "needle"]));

const fact = n => {
  if (n == 1) return 1;
  console.log(n, n - 1);
  return n * fact(n - 1);
}; // |5*4*3*2*1| ->

console.log(fact(5));
