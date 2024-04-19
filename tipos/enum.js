"use strict";
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
