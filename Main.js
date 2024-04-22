"use strict";
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'N/A'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'N/A'}`;
        }
    };
    const name = fullName('Alejo', 'Ospina', true);
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'N/A'}`;
    };
    const name = fullName('Alejo');
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Alejo', 'Foronda');
    console.log({ name });
})();
(() => {
    const fullname = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const Zoro = fullname('Zoro', 'Ronroroa', 'Mohihuara');
    console.log(Zoro);
})();
(() => {
    const addNumber = (a, b) => a + b;
    const great = (name) => `Hola ${name}`;
    const nemesis = () => `¡STARS!`;
    let myFunction;
    myFunction = nemesis;
    console.log(myFunction());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Batiseñal activada!';
    };
})();
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
    console.log(personajes);
})();
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
    console.log(personajes);
})();
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
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'HawkEye';
    console.log(avenger.charAt(0));
    avenger = 47147.458414;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ['Bayne', 'Thanos', 'Galactus'];
    villians.forEach(v => console.log(v.toUpperCase()));
    numbers.push(11);
    console.log(numbers);
})();
(() => {
    let isSuperman = true;
    let isBatman = true;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 11] = "min";
        AudioLevel[AudioLevel["medium"] = 12] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
        AudioLevel[AudioLevel["m"] = 11] = "m";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.m;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('AIUDAAA!!!');
})();
(() => {
    let nada = undefined;
    console.log(nada);
})();
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
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const bayne = `Héroe: bayne`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está prensete');
})();
(() => {
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Nick Fury';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=Main.js.map