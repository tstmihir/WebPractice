// const dolphinScore = (96 + 108 + 89) / 3;
// const koalaScore = (88 + 91 + 110) / 3;

// if(dolphinScore > koalaScore){
//     console.log("Dolphins scores higher than Koalas");
// }else if(dolphinScore < koalaScore){
//     console.log("Koalas scores higher than Dolphins");
// }else{
//     console.log("Both wins DRAW!");
// }

// BONUS 1
// const dolphinScore = (97 + 112 + 101) / 3;
// const koalaScore = (109 + 95 + 123) / 3;

// if(dolphinScore > koalaScore && dolphinScore >=100){
//     console.log("Dolphins scores higher than Koalas");
// }else if(dolphinScore < koalaScore && koalaScore >=100){
//     console.log("Koalas scores higher than Dolphins");
// }else{
//     console.log("Both wins DRAW!");
// }

// BONUS 2
const dolphinScore = (97 + 112 + 80) / 3;
const koalaScore = (109 + 95 + 50) / 3;

if (dolphinScore > koalaScore && dolphinScore >= 100) {
  console.log("Dolphins scores higher than Koalas");
} else if (dolphinScore < koalaScore && koalaScore >= 100) {
  console.log("Koalas scores higher than Dolphins");
} else if (
  dolphinScore === koalaScore &&
  dolphinScore >= 100 &&
  koalaScore >= 100
) {
  console.log("Both wins DRAW!");
} else {
  console.log("None of them wins");
}
