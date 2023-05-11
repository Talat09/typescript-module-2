"use strict";
const searchName = (value) => {
    if (value === null) {
        console.log("There is nothing to search ");
    }
    else {
        console.log("searching...");
    }
};
searchName("Talat Mahmud");
searchName(null);
//unknown
//unknown
// kmh^-1 --> ms^-1
const getMySpeed = (speed) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    if (typeof speed === "string") {
        const [value, unit] = speed.split(" "); //['10','kmh^-1']
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    else {
        console.log("There is wrong type");
    }
};
getMySpeed(10);
getMySpeed("10 kmh^-1");
getMySpeed(true);
//never type kokhonoi kono kichu return korbe nah
function throwError(message) {
    throw new Error(message);
}
throwError("Bhai Error hoiyese");
