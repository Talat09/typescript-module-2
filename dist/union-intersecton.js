"use strict";
const newDeveloper = {
    name: "Talat Mahmud ",
    expertise: "Javascript",
    experience: 1,
};
//
var Level;
(function (Level) {
    Level["junior"] = "junior";
    Level["mid"] = "mid";
    Level["senior"] = " senior";
})(Level || (Level = {}));
const developer = {
    name: " Next bhai ",
    expertise: "Typescript ",
    experience: 2,
    leadershipExperience: 1,
    level: "mid", //Level.mid enum use kora best practise nah
};
console.log(developer);
