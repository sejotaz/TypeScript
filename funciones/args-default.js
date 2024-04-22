"use strict";
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
//# sourceMappingURL=args-default.js.map