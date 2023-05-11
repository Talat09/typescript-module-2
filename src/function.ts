//normal function
function addTwoNumbers(num1: number, num2: number) {
  return num1 + num2;
}
addTwoNumbers(2, 2);
const addArrow = (num1: number, num2: number = 20): number => num1 + num2;
console.log(addArrow(30, 50));
const arr = [1, 2, 3];
const newArray = arr.map((ele: number) => ele * ele);
//kono function jodi kono obejct er vtiore likha hoi tokhn seta ke method bole
const person: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "Talat",
  balance: 5,
  addBalance(money: number) {
    console.log(`My Balance is ${this.balance + money}`);
  },
};
const myFriends = ["joy", "rafy", "samaun"];
const newFriends = ["sanjida", "susmi", "snigdha"];
myFriends.push(...newFriends);
console.log(myFriends);
//Rest parameter
const greetFriends = (
  friend1: string,
  friend2: string,
  friend3: string
): void => console.log(`Hi ${friend1}\n Hi ${friend2}\n Hi ${friend3}`);
// greetFriends();
//another rest
const mohaFriends = (...friends: string[]): void =>
  friends.forEach((friend) => console.log(`Hi ${friend}`));
mohaFriends("davi", "dihan", "talat", "susmi", "bangla bhai", "talat bhai");
