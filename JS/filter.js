const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

// using arrow function
const depositsArrow = movements.filter((mov) => mov > 0);

// using regular function
const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});

// using for of
const withdrawalsFor = [];
for (mov of movements) if (mov < 0) withdrawalsFor.push(mov);

// console.log(movements);
console.log(deposits);
console.log(depositsArrow);
console.log(withdrawals);
console.log(withdrawalsFor);
