//Type alias example for object
type CrushType = {
  name: string;
  age?: number; //optional type jeta thakteo pare nao thakte pare
  profession: string;
  address: string;
};
const crush1: CrushType = {
  name: "Talat Mahmud",
  age: 22,
  profession: "web developer",
  address: "Bangladesh",
};
const crush2: CrushType = {
  name: "Dihan Mahmud",
  profession: "App developer",
  address: "Canada",
};
// for boolean
type CrushMarriedType = boolean;
// const isCrushMarried : boolean = false;
const isCrushMarried: CrushMarriedType = false;
//for string
type CourseNameType = string;
const courseName: CourseNameType = "Next Level Web development ";

// for function alias type
type OperationType = (x: number, y: number) => number;
const calculate = (
  number1: number, //10
  number2: number, //20
  operation: OperationType //(x,y)=> x - y) (10,20)=> 10-20)
) => {
  return operation(number1, number2);
};
console.log(calculate(10, 20, (x, y) => x + y));
console.log(calculate(10, 20, (x, y) => x - y));
console.log(calculate(10, 20, (x, y) => x * y));
console.log(calculate(10, 20, (x, y) => x / y));
