const arr3 = [[1,2,3],['one',2,'three']];
const arr4 = [
    {name:'test',type:'object',luckyNumer:[5,7,13]},
    [
        {name:'Susan',type:'object'},
        {name:'Anthony',type:'object'},

    ],
    1,
    function(){return 'Hello World'},
    "three",
];

arr3.forEach((el)=>{
    console.log('arr3: '+el)
    el.forEach((el)=>{
        console.log('el: '+el)
    })
})

// arr4.forEach((el)=>{
//     console.log('arr4_foreach: '+el);
//     el.forEach(element => {

//     });
//     // el.forEach((element) => {
//     //     console.log('element: '+element);
//     // });

// })
for(let i in arr4)
{
    console.log('arr4: '+arr4[i])
}
//console.log(arr4)

//8.2.1 배열의 처음이나 끝에서 요소 하나를 추가하거나 제거하기 push,pop/unshift,shift
//push,pop stack 끝요소에
//shift,unshift queue 첫요소에
console.log('===========8.2.1============');

const arr =['b','c','d'];
arr.push('e')
console.log(arr);
arr.pop('a');
console.log(arr)
arr.unshift('a');
console.log(arr);
arr.shift();
console.log(arr);

console.log('===========8.2.2============');

//8.2.2 배열의 끝 여러 요수 추가하기 concat
//contat 배열의 끝에 추가한 사본을 반환한다. 원래 배열을 분해해서 배열에 추가한 사본 반환
const arr2 =[1,2,3];
console.log(arr2);
console.log(arr2.concat(4,5,6));
console.log(arr2.concat([4,5,6]))
console.log(arr2.concat([[4,5],6]));
console.log(arr2.concat([4,[5,6]]));


//8.2.3 배열 일부 가져오기
//배열의 일부를 가져오는 메소드 slice
//slice 메서드는 매개변수 두개를 받아 첫 번째 매개변수는 어디서부터 가져올지를, 두 번째 매개변수는 어디까지 가져올지를 지정합니다. slice(start,end)
//사본 반환
console.log('===========8.2.3============');
const arr5 = [1,2,3,4,5]
console.log(arr5.slice(3));
console.log(arr5.slice(2,5));
console.log(arr5.slice(-2));
console.log(arr5.slice(1,-2));
console.log(arr5.slice(-2,-1));

console.log('===========8.2.4============');
//8.2.4 임의의 위치에 요소 추가하거나 제거하기
// 배열을 자유롭게 수정하는 메소드 splice
// 첫 번쨎 매개변수는 수정을 시작할 인덱스, 두 번째 매개변수는 제거할 요소 숫자, 아무 요소도 제거하지 않을 때는 0을
// 나머지 매개변수는 배열에 추가될 요소 입니다.
//사본 반환x
const arr6 = [1,5,7]
arr6.splice(1,0,2,3,4) // 1번째 인덱스에 수정을 시작, 제거할 요소는 0, 2,3,4 추가 1,2,3,4,5,7
console.log(arr6);//1,2,3,4,5,7
arr6.splice(5,0,6) // 5번째 인덱스에 수정 시작, 6 추가
console.log(arr6);//1,2,3,4,5,6,7
arr6.splice(1,2)//1번째 인덱스부터 2개의 인덱스 제거
console.log(arr6);//1,4,5,6,7
arr6.splice(2,1,'a','b')//2번째 인덱스부터 1개의 인덱스 제거 , 'a','b' 추가
console.log(arr6);//1,4,'a','b',6,

console.log('===========8.2.5============');
//8.2.5 배열 안에서 요소 교체하기
//copyWithin은 ES6에서 도입한 새 메서드, 배열 요소를 복사해서 다른 위치에 붙여넣고, 기존의 요소를 덮어씁니다.
//첫 번째 매개변수는 복사한 요소를 붙여넣을 위치, 두 번째 매개변수는 복사를 시작할 위치이고, 세 번째 매개변수는 복사를 끝낼 위치
//slice와 마찬가지로 음수 인덱스를 사용하면 배열의 끝에서 시작
const arr7 = [1,2,3,4]
arr7.copyWithin(1,2)// 1번짹 인덱스에 2번째부터 복사하여 붙여 넣음 3,4 복사
console.log(arr7);//1,3,4,4
arr7.copyWithin(2,0,2) // 2번째 인덱스에 0번째부터 복사하여 2번째 까지?
console.log(arr7)//1,3,1,3
arr7.copyWithin(0,-3,-1)// 0번째 인덱스에 -3번째부터 복사하여 -1까지
console.log(arr7);

console.log('===========8.2.6============');
//8.2.6 특정 값으로 배열 채우기
//fill은 ES6에 도입한 새 메서드, 정해진 값으로 배열을 채웁니다.
//크기를 지정해서 배열을 생성하는 Array 생성자와 잘 어울림
//배열의 일부만 채우려 할 때는 시작 인데스와 끝 인덱스를 지정, 음수 인덱스도 사용 가능
const arr8 = new Array(5).fill(1) // 1,1,1,1,1
console.log(arr8);
arr8.fill('a') // a,a,a,a,a
console.log(arr8);
arr8.fill('b',1)//1번 인덱스부터 b로 채워라
console.log(arr8); //a,b,b,b,b
arr8.fill('c',2,4)//2번 인덱스부터 4번까지 c로 채워라
console.log(arr8);//a,b,c,c,b
arr8.fill(5.5,-4)//-4번 인덱스부터 5.5로 채워라
console.log(arr8)//a,5.5,5.5,5.5,5.5
arr8.fill(0,-3,-1)//-3번 인덱스부터 -1까지 0으로 채워라
console.log(arr8);//a,5,5,0,0,5.5

console.log('===========8.2.7============');
//8.2.7 배열 정렬과 역순 정렬
// reverse 는 이름 그대로 배열은 역순으로 정렬 하는 메서드
const arr9 = [1,2,3,4,5]
arr9.reverse()
console.log(arr9); // 5,4,3,2,1
// sort 는 배열 요소를 순서를 정렬 하는 메서드
arr9.sort() //1,2,3,4,5
console.log(arr9);
// sort는 정렬 함수를 받을 수 있습니다. 매우 편리한 기능
// 일반적으로 객체가 들어 있는 배열을 정렬할 수 없지만, 정렬 함수를 사용하면 가능

const arr10 = [{name:'Suzanne'},{name:'Jein'},{name:'Trevor'},{name:'Amanda'}]
arr10.sort();
console.log(arr10);
arr10.sort((a,b)=>a.name > b.name) // arr은 name 프로퍼티의 알파벳 순으로 정렬
console.log(arr10);
arr10.sort((a,b)=>a.name[1] < b.name[1]) //arr은 name 프로퍼티의 두번째 글자의 역순으로 정렬됩니다.
console.log(arr10);

console.log('===========8.3============');
//8.3 배열 검색
//indexOf() 찾고자 하는 값과 정확한 일치(===) 하는 첫 번째 인덱스 반환
//lastIndexOf 배열의 끝에서부터 찾아서 반환
// 일치하는 값이 없을 경우 -1 반환

const o = {name:'Jerry'}
const arr11 = [1,5,'a',o,true,5,[1,2],'9'];
console.log(arr11.indexOf(5));
console.log(arr11.lastIndexOf(5));
console.log(arr11.indexOf('a'));
console.log(arr11.lastIndexOf('a'));
console.log(arr11.indexOf({name:'Jerry'}));//-1
console.log(arr11.indexOf(o));//3
console.log(arr11.indexOf([1,2])); //-1
console.log(arr11.indexOf('9'));
console.log(arr11.indexOf(9));//-1

console.log(arr11.indexOf('a',5));
console.log(arr11.indexOf(5,5));//두번째 매개변수는 배열의 위치를 지정함 5인덱스에 5가 있는지 확인
console.log(arr11.indexOf(5,4));
console.log(arr11.indexOf(1,0));
//findIndex() indexOf와 비슷하지만 보조 함수를 써서 검색 조건을 지정할 수 있으므로 indexOf보다 더 다양항 상황에 활용이 가능하다.
//시작할 인덱스를 지정할 수 없고, 뒤에서 부터 찾는 lastfindIndex 도 없다

const arr12 = [{id:5,name:'Judith'},{id:7,name:'Francis'}];
console.log(arr12.findIndex(o=>o.id === 5)); //0번째 인덱스에 id 5 존재 위치 0반환
console.log(arr12.findIndex((o=>o.name === 'Francis')));//1번째 인덱스에 name Francis 존재 1반환
console.log(arr12.findIndex(o=>console.log(o)) );

//find() 인덱스가 아니라 요소 자체를 원할때 findIndex와 마찬가지로 검색 조건을 함수로 전달 가능, 없을때 undefined 반환
console.log(arr12.find(o=>o.id===5)); // id: 5, name: 'Judith' } 요소를 반환
console.log(arr12.find(o=>o.id===2)); //undefind

//특정 인덱스보다 뒤에 있는 제곱수 찾기
const arr13 = [1,17,16,5,4,16,10,3,49]
console.log(arr13.find((x,i)=>i>2 && Number.isInteger(Math.sqrt(x)))); //4

console.log('===========Person============');
class Person{
    constructor(name){
        this.name = name;
        this.id = Person.nextId++;
    }
}
Person.nextId = 0;
const jamie = new Person('Jamie');
    juliet = new Person('Juliet')
    peter = new Person('Peter');
    jay = new Person('Jay')
const arr_person = [jamie,juliet,peter,jay];

// id를 직접 비교하는 방법
console.log(arr_person.find(p=>p.id === juliet.id));

// this 매개변수를 이용하는 방법
console.log(
    arr_person.find(function (p) {
        return p.id === this.id
    },juliet)
);
console.log('===========some============');
//some 메서드 조건에 맞는 요소가 하나라도 찾으면 즉시 검색을 맞추고 true 반환  없으면 false 반환
const arr14 = [5,7,12,15,17]
console.log(arr14.some(x => x%2 === 0)); //2로 나눠 나머지가 0인거 true
console.log(arr14.some(x => Number.isInteger(Math.sqrt(x)))); //sqrt(제곱함수) 배열에 제곱 수가 없음 false
console.log('===========every============');
//every 메서드는 모든 요소가 조건에 맞아야 true 그렇지 않다면 false 반환
//every는 조건에 맞지 않는 요소를 찾으면 검색을 멈추고 false, 맞지 않다면 끝까지 검색

const arr15 = [4,6,16,36]
console.log(arr15.every(x => x%2===0)); // 배열 요소가 2로 나눠서 0이 되는지 true
console.log(arr15.every(x => Number.isInteger(Math.sqrt(x)))); // 배열 요소가 모두 제곱수인지 false
//some,every 콜백함수를 호출할 대 this 사용할 값을 두 번째 매개변수로 받을수 있다.

console.log('===========8.4============');
//map과 filter는 배열 메서드 중 가장 유용한 메서드?
//map은 배열 요소를 변형합니다.  숫자가 들어있는 객체의 숫자만, 함수로 구성된 배열에서 프로미스(promise)만 수정할 때 등 유용하다.
//사본을 반환
console.log('===========map()============');
const cart = [{name:'Widget',price:9.95},{name:'Gadget',price:22.95}];
const names = cart.map(x => x.name); // 배열의 name만 찾아서 사본 배열을 반환
console.log(names);//[ 'Widget', 'Gadget' ]
const prices = cart.map(x => x.price).map(x=>x*0.8); // 배열의 price만 찾아서 사본 배열을 반환
console.log(prices);//[ 9.95, 22.95 ]
const discountPirces = prices.map(x => x*0.8) //prices 배열 요소에 0.8을 곱하라
console.log(discountPirces);//[ 7.96, 18.36 ]

const items = ['Widget','Gadget'];
const cart2 = items.map((x, i) => ({name:x, price:prices[i]})); //객체를 괄호로 감싼 이유 화살표 표기법에서 객체 리터럴의 중괄호를 블록으로 판단해서
console.log(cart2)


console.log('===========filter()============');
//카드 덱을 만듭니다.
const cards=[];
for (let suit of ['H','C','D','S']) // 하트, 클로버, 다이아, 스페이드
    for(let value=1; value<=13; value++)
        cards.push({suit,value});

    // value 가 2인 카드
    const card = cards.filter(c => c.value === 2);
    //[ { suit: 'H', value: 2 },
    //   { suit: 'C', value: 2 },
    //   { suit: 'D', value: 2 },
    //   { suit: 'S', value: 2 } ]
    console.log(card)

    // 여기서부터는 지면을 생각해서 반환되니 배열의 길이만 적습니다.

    //다이아몬드
    const card2 = cards.filter(c => c.suit === 'D')
    console.log(card2.length)
    //킹, 퀸, 주니어
    const card3 = cards.filter(c => c.value > 10)
    console.log(card3.length)
    // 하트의 킹, 퀸, 주니어
    const card4 = cards.filter(c => c.value > 10&&c.suit === 'H')
    console.log(card4)


console.log('===========map() + filter()============');

function cardToString(c) {
    const suits = {'H':'\u2665','C':'\u2663','D':'\u2666','S':'\u2660'};
    const values = {1:'A',11:'J',12:'Q',13:'K'}
    //cardToString을 호출할 때마다 매번 값을 만드는건 그리 효율적인 방법이 아닙니다.
    for(let i=2; i<=10; i++) values[i] = i;
    return values[c.value] + suits[c.suit];
}

//value가 2인 카드
const val2 = cards.filter(c => c.value === 2)
    .map(cardToString);

console.log(val2);
//하트의 킹, 퀸, 주니어
const val1 = cards.filter(c => c.value > 10 && c.suit === 'H')
    .map(cardToString);

console.log(val1);

const arrt = [null,'1',2,'t',null,undefined]
const ts1 = arrt.filter(x=>x !== null && x !== undefined) //es6
const ts2 = arrt.filter( function(x) {  // es5
    return x !== null && x !== undefined;
})
console.log(ts2);

console.log('===========reduce()============');
// map이 배열의 각 요소를 변형 한다면 reduce는 배열 자체를 변형한다.
// reduce 라는 이름은 배열을 값 하나를 줄이는데 쓰이기 때문에 붙었다.
// map, filter 등 배열 메서드 동작의 대부분의 대체 가능
// reduce가 받는 첫번째 매개변수는 배열이 줄어드는 대상인 어큐뮬레이터(accumulator)=누적값, 두 번재 매개변수부터는 콜백 순서대로 배열요소, 인덱스, 배열 자체
const arr16 = [5,7,2,4];
const sum = arr16.reduce((a,x)=>a += x,0)// a의 초기값 0 x의값 배열앞에서 부터 5 
console.log(sum);

const sum2 = arr16.reduce((a,x)=>a+=x) // 초기값 생략 가능 a=5부터 시작
console.log(sum2);

//reduce 영단어로 이루어진 배열 첫 글자에 따라 묶기
console.log('===========alphabetical============');
const words = ['Beadchball','Rodeo','Angel','Aardvark','Xylophone','Noveber','Chocolate','Papaya','Uniform','Joker','Clover','Bail'];
const alphabetical = words.reduce((a,x)=>{
    if(!a[x[0]]) a[x[0]] = []; //a.프로퍼티가 없으면 배열 생성
    a[x[0]].push(x);//배열에 x값 push
    return a;
},{})
console.log(alphabetical);
// { B: [ 'Beadchball', 'Bail' ],
//   R: [ 'Rodeo' ],
//   A: [ 'Angel', 'Aardvark' ],
//   X: [ 'Xylophone' ],
//   N: [ 'Noveber' ],
//   C: [ 'Chocolate', 'Clover' ],
//   P: [ 'Papaya' ],
//   U: [ 'Uniform' ],
//   J: [ 'Joker' ] }
console.log('===========data============');
//데이터 셋의 평균과 분산을 계산
const data = [3.3,5,7.2,12,4,6,10.3]
//도널드 커누스가 분산 계산을 위해 만든 알고리즘
const stats = data.reduce((a,x)=>{
    a.N++;
    let delta = x - a.mean;
    a.mean += delta/a.N;
    a.M2 += delta*(x - a.mean);
    return a;
},{N:0,mean:0,M2:0})
if(stats.N>2){
    stats.variance = stats.M2 / (stats.N -1);
    stats.stdev = Math.sqrt(stats.variance)
}
console.log(stats);

//문자열 누적값 예제
const longWords = words.reduce((a,w)=>w.length>6 ? a+" "+w:a," ").trim();
console.log(longWords);
console.log(names)


console.log('===========8.6============');
//삭제되거나 정의되지 않은 요소를
//map, filter, reduce 는 삭제되거나 젖ㅇ의되지 않은 요소들에게 콜백 함수를 호출하지 않는다
//ex)
const arr_test = Array(10).map(function(x){return 5});
console.log(arr_test);

const arr_test2 = [1,2,3,4,5];
delete arr_test2[2];
arr_test.map(x => 0);
console.log(arr_test2);

console.log('===========8.7============');
// 문자열 병합
// Array.prototype.join은 매개변수로 구분자 하나를 받고 요소들을 하나로 합친 문자열 반환
// 매개변수가 생략됐을 때 기본값 쉼표, 문자열 요소를 합칠 때 정의되지 않은 요소, 삭제된 요소, null, undefined 모두 빈 문자열로 취급합니다.
const arr_join = [1,null,'hello','world',true,undefined];
delete arr_join[3];
console.log(arr_join.join()); //1,,hello,,true, 매개변수 생략 기본값 쉼표
console.log(arr_join.join('')); //1hellotrue 삭제된 요소, null undefined 빈 문자열 취급하여 제거하고 조인
console.log(arr_join.join(' -- '));//1 --  -- hello --  -- true --

const attributes = ['Nimble','Perceptive','Generous'];
const html = '<ul><li>'+attributes.join('</li><li>')+'</li></ul>'
console.log(html); //<ul><li>Nimble</li><li>Perceptive</li><li>Generous</li></ul>















