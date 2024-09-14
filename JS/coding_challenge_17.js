const dogs = [
  { weight: 22, currFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, currFood: 200, owners: ["Matilda"] },
  { weight: 13, currFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, currFood: 340, owners: ["Michael"] },
];

dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));

console.log(
  `Sarah's dog is eating too ${
    dogSarah.currFood > dogSarah.recFood ? "much" : "little"
  }`
);

const ownersEatTooMuch = dogs
  .filter((dog) => dog.currFood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.currFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little`);

console.log(dogs.some((dog) => dog.currFood === dog.recFood));

const checkEatingOk = (dog) =>
  dog.currFood > dog.recFood * 0.9 && dog.currFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOk));

console.log(dogs.filter(checkEatingOk));

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
