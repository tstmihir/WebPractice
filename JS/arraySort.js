const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
movements.sort((a, b) => {
  // if (a > b) return 1;
  // if (b > a) return -1;
  return a > b ? 1 : -1;
});
console.log(movements);

movements.sort((a, b) => b - a);
console.log(movements);
