const mark = {
    fullName: 'Mark Manson',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const jonas = {
    fullName: 'Jonas Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
jonas.calcBMI();
console.log(mark.bmi, jonas.bmi);

if(mark.bmi > jonas.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${jonas.fullName}'s BMI (${jonas.bmi})`);
}else if(jonas.bmi > mark.bmi){
    console.log(`${jonas.fullName}'s BMI (${jonas.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}