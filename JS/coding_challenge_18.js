"use strict";

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.acceleration = function () {
  this.speed += 10;
  console.log(`${this.make} goes ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} goes ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const merc = new Car("Mercedes", 95);

bmw.acceleration();
merc.acceleration();
bmw.acceleration();
merc.brake();
