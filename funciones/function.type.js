"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const great = (name) => `Hola ${name}`;
    const nemesis = () => `¡STARS!`;
    let myFunction;
    // myFunction = addNumber
    // console.log(myFunction(1,3))
    // myFunction = great
    // console.log(myFunction('Mr. Princess'))
    myFunction = nemesis;
    console.log(myFunction());
})();
