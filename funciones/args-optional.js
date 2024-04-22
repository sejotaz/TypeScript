"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'N/A'}`;
    };
    const name = fullName('Alejo');
    console.log(name);
})();
//# sourceMappingURL=args-optional.js.map