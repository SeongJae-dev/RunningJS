const obj ={};
//멤버 접근 연산자-프로퍼티 이름에 유효한 식별자를 써야할때
obj.color = "yellow";
//프로퍼티에 이름을 쓸때 접근 연산자
obj["not an identifier"] = 3;
//유효한 식별자가 아닐때는 대괄호로 접근 가능, 유효한 식별자도 접근가능
obj["not an indentfier"]
obj["color"];

const SIZE = Symbol();
obj[SIZE]=8;
obj[SIZE];

console.log(obj)

// eslint-disable-next-line no-unused-vars
const sam1 = {
    name: 'Sam',
    age:4
};

// eslint-disable-next-line no-unused-vars
const sam2 = {name:'Sam',age:4};

const sam3 = {
    name: 'Sam',
    classfication:{
        kingdom:'Anamalia',
        phylum:'Chordata',
        class:'Mamalia',
        order:'Carnivoria',
        family:'Felidae',
        subfamily:'Felinae',
        genus:'Felis',
        species:'catus',
    }
}

console.log(sam3.classfication.family)
console.log(sam3["classfication"].family)
console.log(sam3.classfication["family"])
console.log(sam3["classfication"]["family"])

//sam3 객체에 함수 추가
sam3.speak = () =>{return "Meow!";};

console.log(sam3.speak())
console.log(sam3)

delete sam3.classfication; //classfication 트리 전체 삭제
delete sam3.speak;
console.log(`삭제후`)
console.log(sam3)


//날짜 자바스크립트 내장객체 Date를 사용 Java의 Date 객체를 가져온것

const now = new Date();
console.log(now);

//월은 0부터 시작
const halloween = new Date(2016,9,31);
console.log(halloween)

//자바스크립트 문자 숫자 캐스팅 Number()
const numStr = '33.3';
const num = Number(numStr);
console.log(num)

//Date 객체를 숫자로 변환 valueOf
const d = new Date();
const ts = d.valueOf(); //밀리세컨즈로 변환
console.log(ts)

//문자열 변환 toString()
const n = 35.5;
const s = n.toString();
console.log(s);
//배열에 문자열 변환시 요소들을 연결하여 반환
const arr = [1,true,'hello']; 
console.log(arr.toString())

//불리언으로 변환
