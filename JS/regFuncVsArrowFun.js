'use strict';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2024-this.year);

        const isMillenial = function(){
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
};

jonas.greet();
jonas.calcAge();