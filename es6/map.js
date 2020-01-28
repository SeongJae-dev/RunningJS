const u1 = {name:'Cynthia'};
const u2 = {name:'Jackson'};
const u3 = {name:'Olive'};
const u4 = {name:'James'};


// userRoles.set(u1,'User')
// userRoles.set(u2,'User')
// userRoles.set(u3,'Admin')
//맵 객체 생성
//위와 같음 메소드 체인으로 타이핑을 줄임
const userRoles = new Map([
    [u1,'User'],
    [u2,'User'],
    [u3,'Admin'],
])

userRoles
.set(u1,'User')
.set(u2,'User')
.set(u3,'Admin')


console.log(userRoles.get(u2));
console.log(userRoles);

console.log(userRoles.has(u1));
console.log(userRoles.has(u4));
console.log(userRoles.get(u1));
console.log(userRoles.get(u4));

console.log(userRoles.set(u1,'SuperAdmin'));

console.log(userRoles.size);

console.log(userRoles.keys());
console.log(userRoles.values());
console.log(userRoles.entries());

for (const key of userRoles.keys()) 
    console.log(key);

for(const val of userRoles.values())
    console.log(val);

for (const entrie of userRoles.entries())
    console.log(entrie);
        
// 맵도 분해 할 수 있다.
for (const [u,r] of userRoles.entries()) 
    console.log(`${u.name}: ${r}`);
        
for (const [u,r] of userRoles) 
    console.log(`${u.name}: ${r}`);

//배열 필요시 spread operator 사용
console.log([...userRoles.values()]);
console.log([...userRoles.keys()]);

userRoles.delete(u2);
console.log(userRoles.size);
console.log([...userRoles.values()]);

userRoles.clear();


            
//10.2 WeakMap
const SecretHolder = (function() {
    const secrets = new WeakMap();
    return class{
        setSecret(secret){
            secrets.set(this,secret);
        }
        getSecret(){
            return secrets.get(this);
        }
    }
})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('secret A');
b.setSecret('secret B');

console.log(a.getSecret());
console.log(b.getSecret());



