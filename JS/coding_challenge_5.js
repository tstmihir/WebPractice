const calcAvg = (a,b,c) => (a+b+c)/3;

const scoreDolphis = calcAvg(44,23,71);
const scoreKoalas = calcAvg(65,54,49);
console.log(scoreDolphis, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log("Dolphins win");
    }else if(avgKoalas >= 2 * avgDolphins){
        console.log("Koalas win");
    }else{
        console.log("None of them wins");
    }
}

checkWinner(scoreDolphis, scoreKoalas);