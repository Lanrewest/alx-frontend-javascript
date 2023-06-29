import Car from "./10-car.js";
// extends car
class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}

export default EVCar;

