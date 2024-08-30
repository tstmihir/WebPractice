const restaurant = {
  resName: "Classic Italiano",
  location: "Via Angelo, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  }
};


// Property Names
const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

var openStr = `We are open on ${properties.length} days: `;

for(const day of properties){
    openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(restaurant.openingHours);
// console.log(values);

// Whole object
const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

for(const [key, {open, close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}.`);
}