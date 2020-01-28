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

class InsurancePolicy{}
function makeInsurable(o){
    o.addInsurancePolicy = function(p){this.insurancePoliicy=p;}
    o.getInsurancePolicy = function(){return this.insurancePoliicy;}    
    o.isInsured = function () {return !!this.insurancePoliicy;}
}


const car1 = new Car();
makeInsurable(car1);
car1.addInsurancePolicy(new InsurancePolicy());

console.log(car1);

makeInsurable(Car.prototype);
const car2 = new Car();
car2.addInsurancePolicy(new InsurancePolicy());

console.log(car2);
