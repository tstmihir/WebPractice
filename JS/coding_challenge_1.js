// Test-data-1
// const heightMark = 1.69;
// const weightMark = 78;
// const heightJohn = 1.95;
// const weightJohn = 92;

// Test-data-2
const heightMark = 1.88;
const weightMark = 95;
const heightJohn = 1.76;
const weightJohn = 85;

const markBMI = weightMark / heightMark ** 2;
const johnBMI = weightJohn / heightJohn ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBMI)