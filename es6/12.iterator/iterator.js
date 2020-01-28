const book = [
  "Twinkle, twinkle, little bat!",
  'How I Wonder what you"re at!',
  "Up above the world you fly",
  "Like a tea tray in the sky",
  "Twinkle, twinkle, little bat!",
  'How I wonder what you"re at!'
];

const it = book.values();


console.log(it.next());

let current = it.next();
while (!current.done) {
  console.log(current.value);
  current = it.next();
}

const it1 = book.values();
const it2 = book.values();

console.log(it1.next());
console.log(it1.next());

console.log(it2.next());

console.log(it1.next());

console.log();

class Log {
  constructor() {
    this.messages = [];
  }
  add(message) {
    this.messages.push({ message, timestamp: Date.now() });
  }
  [Symbol.iterator]() {
    return this.messages.values();
  }
}

const log = new Log();
log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vessel");

//로그를 순회
for (let entry of log) {
  console.log(`${entry.message} @ ${entry.timestamp}`);
}

class Log2 {
  [Symbol.iterator]() {
    let i = 0;
    const messages = this.messages;
    return {
      next() {
        if (i >= messages.length) return { value: undefined, done: true };
        return { value: messages[i++], done: false };
      }
    };
  }
}

class FinonacciSequence {
  [Symbol.iterator]() {
    let a = 0,
      b = 1;
    return {
      next() {
        let rval = { value: b, done: false };
        console.log(rval);

        b += a;
        a = rval.value;
        return rval;
      }
    };
  }
}

const fib = new FinonacciSequence();
let i = 0;
for (let n of fib) {
  console.log(n);
  if (++i > 9) break;
}
