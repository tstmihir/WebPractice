const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
};

const mihir = Object.create(PersonProto);
console.log(mihir);
mihir.name = "Mihir";
mihir.birthYear = 2001;
mihir.calcAge();
