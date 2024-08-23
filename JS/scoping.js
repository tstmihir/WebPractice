'use strict';

// In strict mode functions are block scoped

function calcAge(birthYear){
    const age = 2024 - birthYear;

    function printAge(){
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            const str = `You are a millenial, ${firstName}`;
            console.log(str);
        }
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);