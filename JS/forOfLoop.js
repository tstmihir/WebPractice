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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for(const item of menu) console.log(item);


// Old and simple method
// for (const item of menu.entries()){
//     console.log(`${item[0] + 1}: ${item[1]}`)
// }

// Better method
for(const [i, el] of menu.entries()){
    console.log(`${i + 1}: ${el}`);
}
