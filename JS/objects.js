const mihir = {
  firstName: "Mihir",
  // age: 2024 - 2001,
  birthYear: 2001,
  job: "Intern",
  friends: ["Michael", "Steven", "Jason"],
  hasDriverLicense:false,
  calcAge: function (){
    console.log(this);
    return 2024 - this.birthYear;
  },
  getSummary: function(){
    console.log(this);
    return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and has ${this.hasDriverLicense ? 'a': 'no'} driver's license.`
  }
};
console.log(mihir.calcAge());
console.log(mihir.getSummary());
// console.log(mihir.job);
// const interestedIn = prompt('What are you interested in ?');
// console.log(mihir[interestedIn]);

// console.log(
//   `${mihir.firstName} has ${mihir.friends.length} friends and his best friend is ${mihir.friends[0]}`
// );
