export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    if (value !== undefined && typeof value !== 'string') {
      throw new TypeError('Brand must be a string');
    }
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    if (value !== undefined && typeof value !== 'string') {
      throw new TypeError('Motor must be a string');
    }
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    if (value !== undefined && typeof value !== 'string') {
      throw new TypeError('Color must be a string');
    }
    this._color = value;
  }

  cloneCar() {
    const Ctor = this.constructor[Symbol.species] || this.constructor;
    return new Ctor();
  }

  static get [Symbol.species]() {
    return this;
  }
}
