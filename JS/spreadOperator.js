const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 5);
add(3, 4, 5, 6, 7, 8);

const x = [23, 12, 15];
add(...x);
