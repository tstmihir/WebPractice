// Inheritance between ES6 classes

class PersonCl {
  constructor(firstName, BirthYear) {
    this.firstName = firstName;
    this.BirthYear = BirthYear;
  }
  calcAge() {
    console.log(2024 - this.BirthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

class StudentCl extends PersonCl {}
