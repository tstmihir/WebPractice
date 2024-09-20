"use strict";

const Person = function (fName, birthYear) {
  this.fName = fName;
  this.birthYear = birthYear;
};

const mihir = new Person("Mihir", 2001);
console.log(mihir);
