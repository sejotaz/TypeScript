"use strict";
(() => {
    let myCustomVariable = 'Alejo';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Sejotaz',
        age: 24,
        juegos: ['Todos']
    };
    console.log(typeof myCustomVariable);
})();
