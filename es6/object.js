console.log('===========9. 객체와 객체지향 프로그래밍============');
// 객체의 프로퍼티에는 순서가 없다.
console.log('===========9.1.1============');
//for...in
const SYM = Symbol();
const o = {a: 1, b: 2, c: 3, [SYM]: 4}

for (let prop in o) {
    if (!o.hasOwnProperty(prop)) continue; //hasOwnProperty for..in에 나타날 위험을 제거하기 위해 사용?
    console.log(`${prop}: ${o[prop]}`);
} // for..in 루프에는  키가 심볼인 프로퍼티는 포함되지 않습니다.

console.log('===========9.1.2============');
//Object.keys 는 객체에서 나열 가능한 문자열 프로퍼티를 배열로 반환
Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));

const o2 = {apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5,}
Object.keys(o2)
    .filter(prop => prop.match(/^x/)) //정규식 ^x 시작이 x인거 필터
    .forEach(prop => console.log(`${prop}: ${o[prop]}`));


console.log('===========9.2.1============');
//클래스와 인스턴스 생성
//es6 이전에 클래스를 만드는건 직관적이지 않고 번거로운 일이었다. 접근할
//es6 에서는 클래스 문법이 도입되었다.

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
    }

    shift(gear) {
        if (this.userGears.indexOf(gear) < 0) //userGears에 존재하는지 확인
            throw new Error(`Invalid gear: ${gear}`) // 없으면 에러 메시지
        this.userGear = gear;
    }
}

//인스턴스 생성 키워드 new
const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");

console.log(car1 instanceof Car); //Car Instance 이므로 true
console.log(car1 instanceof Array);//false

car1.shift('D')
car2.shift('R')

console.log(car1.userGear);
console.log(car2.userGear);

//접근을 막지 못한 예
car1.userGear = 'X'
console.log(car1.userGear);

//위와 같은 상황을 막는예시
//가짜 접근 제한

class Car2 {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R', 'D'];
        this._userGear = this._userGears[0];
    }

    get userGear() {
        return this._userGear;
    }

    set userGear(value) {
        if (this.userGears.indexOf(value) < 0) //userGears에 존재하는지 확인
            throw new Error(`Invalid gear: ${value}`) // 없으면 에러 메시지
        this._userGear = value;
    }

    shift(gear) {
        this.userGear = gear;
    }
}

const car3 = new Car2();
car3._userGear = 'X'
console.log(car3.userGear);
//_로 가짜 접근 제한자를 넣었지만 막을 수는 없다

const Car3 = (function () {
    const carProps = new WeakMap(); // 클로저로 감싸고 바깥에서 접근할 수 없는 방법
    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this._userGears = ['P', 'N', 'R', 'D'];
            carProps.set(this, {userGear: this._userGears[0]});
        }

        get userGear() {
            return this._userGear;
        }

        set userGear(value) {
            if (this.userGears.indexOf(value) < 0) //userGears에 존재하는지 확인
                throw new Error(`Invalid gear: ${value}`) // 없으면 에러 메시지
            carProps.get(this).userGear = value;
        }

        shift(gear) {
            this.userGear = gear
        };
    }

    return Car;
})


console.log('===========9.2.2============');
//클래스는 함수다
//class는 단축 문법이다  사실 클래스는 함수일 뿐
//es5 위 예제
function Es5Car(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this.userGears[0];
}

//es6 예제
class Es6Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R', 'D'];
        this._userGear = this.userGears[0];
    }
}

console.log(Es5Car);
console.log(Es6Car);

console.log('===========9.2.3============');
//프로토타입에서 중요한 것은 동적 디스패치라는 메커니즘 이다.
//디스패치는 메서드 호출과 같은 의미

//자바스크립트는 먼저 인스턴스를 체크하고 거기에 없으면 프로토타입을 체크한다.

const car_pro1 = new Car();
const car_pro2 = new Car();
console.log(car_pro1.shift === Car.prototype.shift);//true;
console.log(car_pro1.shift('D'));
// console.log(car_pro1.shift('d')); //error
console.log(car_pro1.userGear)
console.log(car_pro1.shift === car_pro2.shift)

car_pro1.shift = function (gear) {
    this.userGear = gear.toUpperCase()
};
console.log(car_pro1.shift === Car.prototype.shift);
console.log(car_pro1.shift === car2.shift);
car_pro1.shift('d')
console.log(car_pro1.userGear)


console.log('===========9.2.4============');
//정적 메소드
//메서드에는 인스턴스 메서드 외에도 정적 메서드(클래스 메서드)가 있다.
//이 메서드는 특정 인스턴스에 적용되지 않는다.
//this가 인스턴스가 아니라 클래스 자체에 묶인다. 일반적으로 정적 메서드에는  this 대신 클래스 이름을 사용한것이 좋은 습관

class CarStatic {
    static getNextVin() {
        return CarStatic.nextVin++;   //this.nextVin++ 라고 써도 되지만
                                //Car를 앞에 쓰면 정적메서드라는 점을 상기하기 쉽다.
    }

    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.vin = CarStatic.getNextVin();
    }

    static areSimilar(car1, car2) {
        return car1.make === car2.make && car1.model1 === car2.model;
    }

    static areSame(car1, car2) {
        return car1.vin === car2.vin;
    }
}

CarStatic.nextVin = 0;

const car_static1 = new CarStatic("Tesla", "S");
const car_static2 = new CarStatic("Mazda", "3");
const car_static3 = new CarStatic("Mazda", "3");

console.log(car_static1.vin);
console.log(car_static2.vin);
console.log(car_static3.vin);


