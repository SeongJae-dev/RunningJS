console.log('===========9.2.4============');
//정적 메소드
//메서드에는 인스턴스 메서드 외에도 정적 메서드(클래스 메서드)가 있다.
//이 메서드는 특정 인스턴스에 적용되지 않는다.
//this가 인스턴스가 아니라 클래스 자체에 묶인다. 일반적으로 정적 메서드에는  this 대신 클래스 이름을 사용한것이 좋은 습관

class Car {
    static getNextVin() {
        return Car.nextVin++;   //this.nextVin++ 라고 써도 되지만
                                //Car를 앞에 쓰면 정적메서드라는 점을 상기하기 쉽다.
    }

    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.vin = Car.getNextVin();
    }

    static areSimilar(car1, car2) {
        return car1.make === car2.make && car1.model === car2.model;
    }

    static areSame(car1, car2) {
        return car1.vin === car2.vin;
    }
    toString(){
        return `${this.make} ${this.model}: ${this.vin}`;
    }
}

Car.nextVin = 0;

const car1 = new Car("Tesla", "S");
const car2 = new Car("Mazda", "3");
const car3 = new Car("Mazda", "3");

console.log(car1.vin);
console.log(car2.vin);
console.log(car3.vin);

console.log(Car.areSimilar(car1,car2));
console.log(Car.areSimilar(car2,car3));
console.log(Car.areSame(car2,car3));
console.log(Car.areSame(car2,car2));

console.log(car1.toString());
console.log(car2.toString());
console.log(car3.toString());
