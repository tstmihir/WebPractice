const dogHumanAge = function (dogAge) {
  const humanAge = dogAge.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adultDog = humanAge.filter((age) => age >= 18);
  console.log(humanAge);
  console.log(adultDog);
  const avgAge = adultDog.reduce((acc, age) => acc + age, 0) / adultDog.length;
  return avgAge;
};

const avgA = dogHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avgB = dogHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avgA, avgB);
