const roles = new Set();

//set 데이터 추가시 add() 메서드 사용
roles.add('User');
roles.add('Admin');
//map 과 마찬가지로 size 프로퍼티 존재
console.log(roles.size);
roles.add('User');
console.log(roles.size);
//중복된 값은 추가되지 않는다.  

//데이터를 제거시 delete() 메서드를 사용
roles.delete('User');
console.log(roles.size);

const naughty = new WeakSet();

const children = [
    {name:"Messi"},
    {name:"Ronaldo"},
];

naughty.add(children[1]);

for (const child of children) {
    if(naughty.has(child))
        console.log(`Coal for ${child.name}`);
    else    
        console.log(`Present for ${child.name}`);
}
