

// 프로토타입을 이해하면서 상속의 일면을 보았다.
// 클래스의 인스턴스는 클래스의 기능을 모두 상속한다.
// 객체의 프로토타입에서 메서드를 찾기 못하면 자바스크립트는 프로토타입의 프로토타입을 검색합니다. 프로토타입 체인은 이런식으로 만들어진다.
// 조건에 맞는 프로토타입을 찾을 때까지 계속 거슬러 올라가 찾지 못하면 에러를 발생 시킨다.
console.log('===========9.2.5============');
class Vehicle{
    constructor() {
        this.passengers = [];
        console.log("Vehicle created");
    }

    addPassenger(p){
        this.passengers.push(p); // addPassenger()의 파라미터는 생성자 passengers 배열에 넣는다
    }

}

class Car extends Vehicle{
    constructor(){
        super(); // super() 슈퍼클래스의 생성자를 호출하는 특별한 함수
        console.log("Car created");

    }
    deployAirbags(){
        console.log("BWOOSH!");
    }
}

const v = new Vehicle();
v.addPassenger('Frank');
v.addPassenger('Judy');
console.log(v.passengers);
const c = new Car();
c.addPassenger("Alice");
c.addPassenger("Cameron");
console.log(c.passengers);
//console.log(v.deployAirbags()); error
console.log(c.deployAirbags());
//상속은 단방향이다. v.deployAirbags()는 에러 발생


// 다형성(polymorphism)이란 객체지향 언어에서 여러 슈퍼클래스의 멤버인 인스턴스를 가리키는 말이다.
// 객체지향 언어에서 다형성은 특별한 경우에 속합니다.
//  자바스크립트는 느슨한 타입을 사용하고 어디서든 객체를 쓸 수 있으므로, 어떤 면에서는 자바스크립트의 객체는 모두 다형성을 갖고 있다고 볼 수 있다.
// 인스턴스 확인 연산자 instanceof prototype,__proto__ 건들지 않았다면 정확한 함수
console.log('===========9.2.6============');

class Motorcycle extends Vehicle{}
const m = new Motorcycle();
console.log(c instanceof Car); //true
console.log(c instanceof Vehicle); //true
console.log(m instanceof Car); //false
console.log(m instanceof Motorcycle); //true
console.log(m instanceof Vehicle); //true


console.log('===========9.2.7============');
// 객체 프로퍼티 나열 다시 보기
// 이제 프로토타입 상속에 대해 알게 되었으니 객체 프로퍼티를 나열할 때 hasOwnProperty가 어떤 의미가 있는지 이해할 수 있게 되었다.
// 객체 obj와 프로퍼티 x에서 obj.hasOwnProperty(x)는 obj에 프로퍼티 x가 있다면 true를 반환하며, 프로퍼티가 x가 obj에 정의되지 않았거나 프로토타입
// 체인에만 정의되었다면 false 반환한다.

class Super{
    constructor(){
        this.name = 'Super';
        this.isSuper = true;
    }
}
//유효하지만 권장하지 않습니다.
Super.prototype.sneaky = 'not recommeended!';

class Sub extends Super{
    constructor(){
        super();
        this.name = 'Sub';
        this.isSub = true;
    }
}

const obj = new Sub();

for(let p in obj){
    console.log(`${p}: ${obj[p]}`+ (obj.hasOwnProperty(p)?'':'(inherited)'));

}

class CarString {
    static getNextVin() {
        return CarString.nextVin++;   //this.nextVin++ 라고 써도 되지만
                                //Car를 앞에 쓰면 정적메서드라는 점을 상기하기 쉽다.
    }

    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.vin = CarString.getNextVin();
    }

    static areSimilar(car1, car2) {
        return car1.make === car2.make && car1.model1 === car2.model;
    }

    static areSame(car1, car2) {
        return car1.vin === car2.vin;
    }

    toString(){
        return `${this.make} ${this.model}: ${this.vin}`;
    }
}
console.log('===========9.2.8============');
Car.nextVin = 0;
const car1 = new CarString("Tesla", "S");
const car2 = new CarString("Mazda", "3");
const car3 = new CarString("Mazda", "3");
console.log(car1.toString());
console.log(car2.toString());
console.log(car3.toString());

console.log('===========9.3============');
