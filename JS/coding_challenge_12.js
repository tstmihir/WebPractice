const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

// console.log(`An event occured on avg, every ${90 / gameEvents.size} minutes`);

// To make the avg more accurate
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event occured on avg, every ${time / gameEvents.size} minutes`);

for(const [mins,events] of gameEvents){
    const half = mins <= 45 ? 'First' : 'Second';
    console.log(`${half} half ${mins}: ${events}`);
}