const rest = new Map();
rest.set("name", "Classicano Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

// Map function Get using keys
console.log(rest.get("name"));
// console.log(rest.get(true));
console.log(rest.get(1));

const time = 9;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.size)

const question = new Map([
  ["question", "what is the best programming language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "JS"],
  ["correct", 3],
  [true, "Correct!!"],
  [false, "Try again"],
]);
console.log(question);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = Number(prompt("Your answer"));
console.log(answer);

console.log(question.get(question.get("correct") === answer));
