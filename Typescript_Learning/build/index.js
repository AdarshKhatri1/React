// let
let isDone = true;
// isDone = "Masai";
isDone = false;
let Price = 45;
let FirstName = "Adarsh";
let LastName = "Khatri";
let fullName = `${FirstName} ${LastName}`;
let arrOfNumber1 = [1, 2, 3, 4, 5];
let arrOfNumber2 = [1, 2, 3, 4, 5]; //generic function
let arrOfString = ["adarsh", "khatri"];
let obj = {
    firstName: "adarsh",
    lastName: "khatri",
    age: 3,
};
let arrayOfCompany = [
    { firstName: "adarsh", lastName: "khatri", age: 3 },
    { firstName: "Gaurav", lastName: "khatri", age: 3 },
    { firstName: "Harsh", lastName: "khatri", age: 3 },
];
// TUPLES
let tuples = ["masai", 3];
// let tuples: [string, number] = [3,"masai"];// not possible
// possible things
tuples.push(23);
tuples.push("masai");
let tuples1 = ["masai", 3];
// not possible things because readonly added
// tuples1.push(23);
// tuples1.push("masai")
var color;
(function (color) {
    color[color["RED"] = 0] = "RED";
    color[color["GREEN"] = 1] = "GREEN";
    color[color["BLUE"] = 2] = "BLUE";
})(color || (color = {}));
// change directory to index.js and run on terminal node index.js
// console.log(color);
// console.log(color["0"]);
// console.log(color["1"]);
// console.log(color["2"]);
// console.log(color.RED);
// console.log(color.GREEN);
// console.log(color.BLUE);
var color1;
(function (color1) {
    color1["RED"] = "red";
    color1["GREEN"] = "Green";
    color1["BLUE"] = "blue";
})(color1 || (color1 = {}));
// console.log(color1);
let u;
let n;
let a;
function sum(a, b) {
    return a + b;
    //   return "d"; will create issue because return type is number
}
let obj1 = {
    firstName: "adarsh",
    lastName: "khatri",
    age: 3,
};
let printData = ({ firstName, lastName, age }) => {
    //   console.log(`${firstName} ${lastName} `);
};
// void means nothing returning
printData(obj1);
//Union
let arr = ["adarsh", 34, "khatri", 23];
const masaiStudent = {
    firstName: "adarsh",
    lastName: "khatri",
    age: 23,
    skill: "html",
    isWorking: true,
};
function sum1(a, b = 90) {
    return a + b;
    //b: number=90  means it's default value is 90, you can call this function with single parameter
}
//# sourceMappingURL=index.js.map