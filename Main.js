"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        iroman: 'Robert Danwnie Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 950.000
    };
    const printAvenger = (_a) => {
        var { nick } = _a, resto = __rest(_a, ["nick"]);
        console.log(nick, resto);
    };
    const avengersArr = ['HawkEye', 'Campitan America', 'Hulk'];
    const [, primerAvenger] = avengersArr;
    console.log(primerAvenger);
})();
(() => {
    const HawkEye = {
        name: 'Clint Barton',
        weapon: 'Arco de flechas'
    };
    const capitanAmerica = {
        name: 'Rogers',
        weapon: 'Escudo'
    };
    const Hulk = {
        name: 'Bruce Banner',
        weapon: 'Fuerza'
    };
    const avengers = [HawkEye, Hulk, capitanAmerica];
    for (const avenger of avengers) {
        console.log(avenger.name, '-', avenger.weapon);
    }
})();
(() => {
    const nombre = 'Fernando';
    const getName = () => {
        console.log('Viejo getName');
    };
})();
//# sourceMappingURL=Main.js.map