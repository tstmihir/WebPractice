const heightMark = 1.88;
const weightMark = 95;
const heightJohn = 1.76;
const weightJohn = 85;

const markBMI = weightMark / heightMark ** 2;
const johnBMI = weightJohn / heightJohn ** 2;

if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
}else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`)
}