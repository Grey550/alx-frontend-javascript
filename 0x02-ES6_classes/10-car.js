export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.model]() {
    return this;
  }

  cloneCar() {
    const Model = this.constructor[Symbol.model];
    return new Model();
  }
}
