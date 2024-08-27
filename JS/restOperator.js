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
  },
  orderPizza: function(mainIng, ...otherIngs){
    console.log(mainIng);
    console.log(otherIngs);
  }
};

restaurant.orderPizza('mushrooms','onion','olives','spinach');

const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
