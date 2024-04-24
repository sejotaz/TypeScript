"use strict";
(() => {
    let personajes = {
        name: 'Leon S Kennedy',
        age: 36,
        juegos: ['Resident Evil 2', 'Resident Evil 4', 'Resident Evil 6',]
    };
    let bosses = {
        name: 'Nemesis',
        juegos: ['Resident Evil 3'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return `${this.name} ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: 'Alejo',
        age: 24,
        address: {
            id: 154,
            zip: 'MDE',
            city: 'Belén'
        },
        getFullAdress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Sejotaz',
        age: 24,
        address: {
            city: 'Caldas',
            zip: 'CDA',
            id: 784
        },
        getFullAdress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    let addNumbers;
    addNumbers = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=Main.js.map