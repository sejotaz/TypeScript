"use strict";
(() => {
    const fullname = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const Zoro = fullname('Zoro', 'Ronroroa', 'Mohihuara');
    console.log(Zoro);
})();
//# sourceMappingURL=args-rest.js.map