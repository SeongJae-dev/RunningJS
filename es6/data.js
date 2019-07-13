

// const dialog = "He lloked up and said \"don't do that!\" to max. ";
// const s1  = "In JavaScript, use \\ asa an escape character in strings.";
// const n  = "In JavaScript, \nuse  asa an escape character in strings.";
// const r = "Windows line 1\r\nWindows line2";
// const t = "Speed:\t60kph";
// // eslint-disable-next-line no-useless-escape
// const d = "Don\'t";
// const dd = 'Sam said \"hello\".';
// const reverse = "Use \\\\ to represent \\!";

// //특수문자
// const nul = "ASCII NUL: \0";
// const vt = "Vertical tab: \v";
// const bs = "Backspace: \b";
// const ff = "From feed: \f";

// //es6 
// const backtick = `New in ES6: \` string. `;
// //const usd = `New in ES6: ${interpolation}`;

// //문자열 템플릿
let currentTemp = 19.5;
// const message = `The current temparature is ${currentTemp}\u00b0C`;



// console.log(dialog);
// console.log(s1);
// console.log(n);
// console.log(r);
// console.log(t);
// console.log(d);
// console.log(dd);
// console.log(backtick);
// //console.log(usd);
// console.log(reverse);
// console.log(nul);
// console.log(vt);
// console.log(bs);
// console.log(ff);
// console.log(message);

//줄바꿈안됨
// const multiline = "line1\
// line2";

//줄바꿈 됨
// const multiline = "line1\n\
// line2";

//백틱을 이용한 줄바꿈
// const multiline = `line1
// line2`;
// const multiline = `line1
// line2
// line3`;

const multiline = 'Current temperature:\n'+
`\t${currentTemp}\u00b0c\n`+
"Don't worry... the heat is on!";


console.log(multiline)

// let heating = true;
// let cooling = false;