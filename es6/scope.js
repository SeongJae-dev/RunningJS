//scope: 시야, 범위라고 이해하면됩니다 
// 스코프는 프로그램의 현재 실행 중인 부분, 즉 시리행 컨텍스트에서 현재 보이고 접근할 수 있는 식별자들을 말합니다. 
// 반면 존재한다는 말은 그 식별자가 메모리가 할당된(예약된) 무언가를 가리키고 있다는 뜻입니다. 
// gc 자바스크립트의 가비지 콜렉션은 자동으로 일어나며, CPU 메모리를 심하게 혹사하는 애플리케이션이 아니라면 프로그래머가 신경 쓸 필요가 없다.

// function f(x){
//     return x + 3;
// }
// console.log(f(5));
//console.log(x);
// f(5);
//x; x is not defined

function f1(){
    console.log('one');
}
function f2(){
    console.log('two');
}

f2();
f1();
f2();

// const x = 3;

// function f(){
//     console.log(x);
//     console.log(y);
// }
// {//새 스코프
//     const y =5;
//     f();
// }
// 정적 스코프는 어떤 변수가 함수 스코프 안에 있는지 함수를 정의할 때 알 수 있다는 뜻, 호출할 때 알 수 있는것이 아니다.
// 자바스크립트의 정적 스코프는 전역스코프(Global scope)와 블록 스코프(block scpoe), 함수스코프(function scope)에 적용됩니다.

//7.3 전역 스코프
//let name = "Irena";
//let age = 25;

// function greet(){
//     console.log(`Hello, ${name}!`);
// }

// function getBirthYear(){
//     return new Date().getFullYear-age;
// }

//위 함수들은 컨텍스트(스코프) 의존적 어디서든 값(name,age) 이 변경될 수 있음
// greet()
// console.log(getBirthYear());

// eslint-disable-next-line no-unused-vars
let user = {
    name:'Irena',
    age:25,
}//단일 객체

// function greet(){
//     console.log(`Hello, ${user.name}!`);
// }

// function getBirthYear(){
//     return new Date().getFullYear()-user.age;
// }
//여전히 전역 user에 의존 이러면 이 객체는 어디서든 수정이 가능한 상태이다.

// function greet(user){
//     console.log(`Hello, ${user.name}!`);
// }

// function getBirthYear(user){
//     return new Date().getFullYear()-user.age;
// }
//이제 이 함수들은 모든 스코프에서 호출이 가능하고, 명시적으로 user를 전달받음

// greet()
// console.log(getBirthYear());

console.log(user)
console.log(user.name)
console.log(user.age)


console.log('before block');
{
    console.log('inside block');
    const x = 3;
    console.log(x);
}//블록 그 자체로도 유효한 문법 블록안에서만 유효
//console.log(`ouside block; x=${x}`); //ReferenceError: x는 정의되지 않았음 - 위 블록안에 변수x의 스코프 밖임

//7.5 변수 숨기기
{
    //block 1
    const x = 'blue';
    console.log(x); //"blue"
}
console.log(typeof x); //undefined 스코프 밖에서 호출
{
    //block2
    const x = 3;
    console.log(x); //"3"
}
console.log(typeof x); // undefined
// 위에 블록들의 변수 x는 이름만 같은 다른 스코프에 있음

{
    //외부 블록
    let x = 'blue';
    console.log(x);
    console.log('outside block')
    {
        //내부 블록
        let x = 3;
        console.log(x);
        console.log('inside block')
    }
    console.log(x);
    console.log('outside block')
}
console.log(typeof x)//스코프 밖에 있음

{
    // 외부 블록
    let x = {color:'blue'};
    let y = x;      // y와 x는 같은 객체를 가리킵니다.
    let z = 3; 
    {
        //내부 블록
        let x = 5;  // 이제 외부 x는 가려짐 (변수 섀도우)
        console.log(x); // 5
        console.log(y.color); //y는 blue 
        y.color = 'red';
        console.log(z); // 3; z는 숨겨지지 않음
    }
    console.log(x.color) // 'red' 객체는 내부 스코프에서 수정됐습니단.
    console.log(y.color) // 'red' x와 y는 같은 객체를 가리킵니다.
    console.log(z); //3
}

//7.6 함수, 클로저, 정적 스코프 
//클로저: 함수가 특정 스코프에 접근할 수 있도록 의도적으로 그 스코프에서 정의하는 경우(스코프를 함수 주변으로 좁히는것)
console.log('7.6 클로저')
let globalFunc; // 정의되지 않은 전역 함수
{
    let blockVar = 'a';
    globalFunc = function () {
        console.log(blockVar);
    }
}

globalFunc()//스코프 밖에서도 참조
//스코프 안에서 함수를 정의하면 해당 스코프는 오래 유지됩니다. 접근할 수 없는것에 접근할 수 있는 효과도 있다.

// let f; //정의되지않은 함수
// {
//     let o = {note:"Safe"};
//     f = function () {
//         return o;
//     }
//     console.log(o)
// }
// let oRef = f();// 함수를 이용해 스코프 밖에서 접근 
// console.log(oRef)
// oRef.note ="Not so safe after all!"; 
// console.log(oRef)

//7.7 즉시 호출하는 함수 표현식
//함수 표현식을 사용하면 즉시 호출하는 함수(IIFE) 생성 가능 IIFE는 함수를 선언하고 즉시 실행
// (function () {
//     //IIFE 바디
// })(); //IIFE함수표현

const message = (function () {
    const secret = "I'm a secret!";
    return `The secret is ${secret.length} characters long. `;
})();
console.log(message);

// const f = (function () {
//     let count = 0 ;
//     return function () {
//         return `I have been called ${++count} time(s).`;
//     }
// })();
// console.log(f());
// console.log(f());

// 7.8 함수 스코프와 호이스팅
//let 과 var의 차이 
//let으로 변수 선언하면 그 변수는 선언하기 전에 존재하지 않음
//var로 선언한 변수는 현재 스코프 안이라면 어디서든 사용할 수 있으며, 심지어 선언하기 ㅣ전에 사용할수 있음

let var1;
let var2 = undefined;
console.log(var1);
console.log(var2);
//undefinedVar;

//let을 쓰면 변수를 선언하기 전에 사용할수 없음
//x; //is not defined
//let x = 3;
//console.log(x);
//var를 쓰면 변수를 선언하면 선언하기 전에도 사용할 수 있음
// console.log(x); //undefined
// var x = 3;
// console.log(x);
//호이스팅(hoistring) 끌어올린다는 뜻

// if(x !== 3){
//     console.log(y);
//     var y = 5;
//     if(y === 5){
//         var x = 3;
//     }
//     console.log(y);
// }
// if(x === 3){
//     console.log(y)
// }

// var x = 3;
// if(x === 3){
//     var x = 2;
//     console.log(x);
// }
// console.log(x);

//7.9 함수 호이스팅
// 변수와 마찬가지로 함수 선언도 스코프 맨위로 끌어올려진다
// f();
// function f(){
//     console.log(f);
// }
// f();//ReferenceError: f is not defined
// let f = function(){
//     console.log(f);
// }
//let으로 호이스팅 방지 

//7.10 사각지대
//사각지대란 let으로 선언하는 변수는 선언하기 전까지 존재하지 않는다는 직관적 개념을 나타내는 표현

// if(typeof x === 'undefined'){
//     console.log("x dosen't exist or is undefined");
// }else{
//     //x를 사용해도 돌아감?
// } //돌아감 호이스팅 발생

// if(typeof x === 'undefined'){
//     console.log("x dosen't exist or is undefined");
// }else{
//     //x를 사용해도 돌아감?
// }
// let x = 5; //막힘

//7.11 스트릭트 모드
//스트릭트 모드는 암시적 전역 변수를 허용하지 않음
//"use strict"

//스코프 클로저 중요**