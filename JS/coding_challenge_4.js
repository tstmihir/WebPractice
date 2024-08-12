const bill = 275;
const tip = bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill} and the tip was ${tip} and the total amount is ${bill + tip}`);