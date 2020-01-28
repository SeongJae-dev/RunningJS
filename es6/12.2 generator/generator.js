// generator 란 이터레이터를 사용해 자신의 실행을 제어하는 함수
// 일반적인 함수는 매개변수를 받고 값을 반환하지만, 호출자는 매배견수 외에는 함수의 실행을 제어할 방법이 없습니다.
// 함수를 호출하면 그 함수가 종료될 때까지 완전히 넘기는 겁니다.
// 제네리이터는 그렇지 않습니다bundleRenderer.renderToStream

// 제네리어트는 두 가지 새로운 개념을 도입했습니다. 하나는 함수의 실행을 개별적 단계로 나눔으로써 함수의 실행을 제어한다는 것입니다.
// 1. 함수의 실행을 개별적 단계로 나눔으로써 함수의 실행을 제어한다는 것입니다.
// 2. 실행 중인 함수와 통신

//요약
// 제네레이터는 언제든 호출자에게 제어권을 넘길(yield) 수 있습니다.
// 제네레이터는 호출한 즉시 실행되지는 않습니다. 대신 이터레이터를 반환하고, 이터레이터의 next 메서드를 호출함에 따라 실행됩니다.
// 제네레이터는  function 뒤에 * 를 붙입니다.

function* rainbow() {
  //* 는 제네레이터 기본 문법
  yield "red";
  yield "orange";
  yield "yellow";
  yield "green";
  yield "blue";
  yield "indigo";
  yield "violet";
}

// const it = rainbow();
// it.next();
// it.next();
// it.next();
// it.next();
// it.next();
// it.next();
// it.next();

for (const color of rainbow()) {
  //제네레이터는 이터레이터를 반환하므로 for..of 가능
  console.log(color);
}

//12.2.1 yield 표현식과 양방향 통신
//yield 표현ㅅ닉을 통해 통신
//yield는 표현식이므로 반드시 어떤 값으로 평가됩니다.

function* interrogate() {
  const name = yield "What is your name?";
  const color = yield "What is your favorite color?";
  return `${name}'s favorite color is ${color}.`;
}

const it = interrogate();
console.log(it.next());
console.log(it.next("Ethan"));
console.log(it.next("orange"));
// generator 는 화살표 함수로 표기법을 만들수 없으며 function*로 써야 한다.
//generator는 return을 반환하려 하지 말고 yield를 써야한다. return 제네레이터를 중간에 종료하는 목적으로만 사용하는 것이 좋다.
