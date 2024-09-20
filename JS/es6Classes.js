// class expression
// const PersonCl = class {}

// class declaration
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
const mihir = new PersonCl("Mihir", 2001);
console.log(mihir);
mihir.calcAge();
mihir.greet();
