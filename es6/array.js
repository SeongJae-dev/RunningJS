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
arr10.sort((a,b)=>a.name[1]<b.name[1]) //arr은 name 프로퍼티의 두번째 글자의 역순으로 정렬됩니다.
console.log(arr10); 







