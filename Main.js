"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        savarElMundo() {
            return 'Mundo salvado';
        }
    }
    class Villian extends Mutante {
        conquistarElMundo() {
            return 'Mundo conquistado';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    const printName = (character) => {
    };
    printName(wolverine);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team}!!)`;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get gettFullName() {
            return `${this.name} - ${this.realName}`;
        }
        set setfullName(name) {
            this.name = name;
        }
        getFullDesdeXmen() {
        }
    }
    const gambito = new Xmen('Gambito', 'Remy', true);
})();
(() => {
    class OnePiece {
        constructor(name) {
            this.name = name;
        }
        static findOnePiece() {
            if (!OnePiece.instance) {
                OnePiece.instance = new OnePiece('Encontramos el ONE PIECE');
            }
            return OnePiece.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const onepiece = OnePiece.findOnePiece();
    onepiece.changeName('ONE PIECE');
    console.log(onepiece);
})();
//# sourceMappingURL=Main.js.map