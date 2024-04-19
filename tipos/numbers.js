"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villans = 20;
    if (avengers < villans) {
        console.log('Estamos embalados');
    }
    else {
        console.log('Ahora si, que chinguen a su madre');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
