//ternary operator
const age: number = 32;
if (age >= 18) {
  console.log("Yes");
} else {
  console.log("No");
}
//by ternary operator
const isAdult = age >= 18 ? "yes" : "NO";
console.log(isAdult);
//Nullish coalescing operator ?? double question mark ta Null and Undefined er upor vhitti kore kaaj kore onno kono falsy value er upor kaaj kore nah
//sodhu matro kono code e ternary operator use korte pare
// Null and Undefined
const isAuthenticatedUser = "";
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
console.log({ userName }, { userName2 });

type Manus = {
  name: string;
  age: number;
  address: {
    city: "No city";
    road: "No road";
    home?: "anjuman villa";
  };
};
const manus1: Manus = {
  name: "Manus",
  age: 100,
  address: {
    city: "No city",
    road: "No road",
  },
};
const home = manus1?.address?.home ?? "NO HOME"; // by default value hisabe 'No home'
console.log({ home });
