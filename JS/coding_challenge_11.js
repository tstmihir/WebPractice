const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for(const [i, pL] of game.scored.entries()){
    console.log(`Goal ${i+1}: ${pL}`);
}

let avg = 0;
const odds = Object.values(game.odds)
for(const odd of odds){
    avg+=odd;
}
avg /= odds.length;
console.log(`Average: ${avg}`);

for(const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory of ${game[team]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
}

const scores = {};

for(const player of game.scored){
  scores[player] ? scores[player]++ : (scores[player] = 1);
}

for(const player in scores){
  console.log(`${player}: ${scores[player]}`);
}