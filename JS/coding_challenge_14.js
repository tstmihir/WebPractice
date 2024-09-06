const checkDogs = function (dogsJ, dogsK) {
  const dogsJCorrected = dogsJ.slice();
  dogsJCorrected.splice(0, 1);
  dogsJCorrected.splice(-2);
  //   console.log(dogsJCorrected);
  const dogs = dogsJCorrected.concat(dogsK);
  //   console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`);
    } else {
      console.log(`Dog ${i + 1} is just a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
