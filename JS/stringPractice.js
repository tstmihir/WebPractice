// Correct the name
const passenger = "mIhiR";
const lower = passenger.toLowerCase();
const mainStr = lower[0].toUpperCase() + lower.slice(1);
console.log(mainStr);

// Make first letter capital in name
const capitalizeName = function (name) {
  const names = name.split(" ");
  const mainName = [];
  for (const word of names) {
    mainName.push(word[0].toUpperCase() + word.slice(1));
  }
  console.log(mainName.join(" "));
};
capitalizeName("jessica ann davis");

// Masking the string
const maskString = function (number) {
  const str = number + "";
  const lastFour = str.slice(-4);
  return lastFour.padStart(str.length, "*");
};

console.log(maskString(4451575421548));
console.log(maskString("78741952"));
console.log(maskString("mihirPanchal"));
