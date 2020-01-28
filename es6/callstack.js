//11.4 예외 처리와 호출 스택
// 프로그램이 함수를 호출하고, 그 함수는 다른 함수를 호출하고, 호툴된 함수는 또 다른 함수를 호출하는 일이 반복됩니다.
// 자바스크립트 인터프린터는 이런 과정을 모두 추적하고 있어야 합니다.
// 완료되지 않은 함수가 쌓이는 것을 호출 스택 이라 부른다.

function a() {
    console.log('a: calling b');
    b();
    console.log('a:done');
}

function b() {
    console.log('b: calling c');
    c();
    console.log('b:done');
}

function c() {
    console.log('c: throwing error');
    throw new Error('c error');
    console.log('c: done');
}
function d() {
    console.log('d:calling c');
    c();
    console.log('d:done');
}

try{
    a();
}catch (e) {
    console.error(e.stack);
}

try{
    d();
}catch (e) {
    console.error(e.stack);
}
