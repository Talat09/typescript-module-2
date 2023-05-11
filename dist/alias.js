"use strict";
const crush1 = {
    name: "Talat Mahmud",
    age: 22,
    profession: "web developer",
    address: "Bangladesh",
};
const crush2 = {
    name: "Dihan Mahmud",
    profession: "App developer",
    address: "Canada",
};
// const isCrushMarried : boolean = false;
const isCrushMarried = false;
const courseName = "Next Level Web development ";
const calculate = (number1, //10
number2, //20
operation //(x,y)=> x - y) (10,20)=> 10-20)
) => {
    return operation(number1, number2);
};
console.log(calculate(10, 20, (x, y) => x + y));
console.log(calculate(10, 20, (x, y) => x - y));
console.log(calculate(10, 20, (x, y) => x * y));
console.log(calculate(10, 20, (x, y) => x / y));
