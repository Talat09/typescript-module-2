"use strict";
//normal function
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
addTwoNumbers(2, 2);
const addArrow = (num1, num2 = 20) => num1 + num2;
console.log(addArrow(30, 50));
const arr = [1, 2, 3];
const newArray = arr.map((ele) => ele * ele);
//kono function jodi kono obejct er vtiore likha hoi tokhn seta ke method bole
const person = {
    name: "Talat",
    balance: 5,
    addBalance(money) {
        console.log(`My Balance is ${this.balance + money}`);
    },
};
const myFriends = ["joy", "rafy", "samaun"];
const newFriends = ["sanjida", "susmi", "snigdha"];
myFriends.push(...newFriends);
console.log(myFriends);
//Rest parameter
const greetFriends = (friend1, friend2, friend3) => console.log(`Hi ${friend1}\n Hi ${friend2}\n Hi ${friend3}`);
// greetFriends();
//another rest
const mohaFriends = (...friends) => friends.forEach((friend) => console.log(`Hi ${friend}`));
mohaFriends("davi", "dihan", "talat", "susmi", "bangla bhai", "talat bhai");
