"use strict";
(() => {
    let personajes = {
        name: 'Leon S Kennedy',
        age: 36,
        juegos: ['Resident Evil 2', 'Resident Evil 4', 'Resident Evil 6',]
    };
    let bosses = {
        name: 'Nemesis',
        // age: 42,
        juegos: ['Resident Evil 3'],
        getName() {
            return this.name;
        }
    };
    console.log(personajes);
})();
