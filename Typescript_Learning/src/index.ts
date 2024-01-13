// let
let isDone: boolean = true;
// isDone = "Masai";

isDone = false;

let Price: number = 45;

let FirstName: string = "Adarsh";
let LastName: string = "Khatri";
let fullName: string = `${FirstName} ${LastName}`;

let arrOfNumber1: Number[] = [1, 2, 3, 4, 5];
let arrOfNumber2: Array<Number> = [1, 2, 3, 4, 5]; //generic function

let arrOfString: string[] = ["adarsh", "khatri"];

//Objects

// interface and type both are same
type abc = string; // is possible(PRIMITIVE ALLOW)
// interface sabc = string; // is not possible(NOT ALLOW PRIMITIVE)

interface company {
  firstName: string;
  lastName: string;
  age: number;
}
type company1 = {
  firstName: string;
  lastName: string;
  age: number;
};

let obj: company = {
  firstName: "adarsh",
  lastName: "khatri",
  age: 3,
};

let arrayOfCompany: company[] = [
  { firstName: "adarsh", lastName: "khatri", age: 3 },
  { firstName: "Gaurav", lastName: "khatri", age: 3 },
  { firstName: "Harsh", lastName: "khatri", age: 3 },
];

// TUPLES

let tuples: [string, number] = ["masai", 3];
// let tuples: [string, number] = [3,"masai"];// not possible

// possible things
tuples.push(23);
tuples.push("masai");

let tuples1: readonly [string, number] = ["masai", 3];
// not possible things because readonly added
// tuples1.push(23);
// tuples1.push("masai")

enum color {
  RED,
  GREEN,
  BLUE,
}
// change directory to index.js and run on terminal node index.js
// console.log(color);
// console.log(color["0"]);
// console.log(color["1"]);
// console.log(color["2"]);
// console.log(color.RED);
// console.log(color.GREEN);
// console.log(color.BLUE);

enum color1 {
  RED = "red",
  GREEN = "Green",
  BLUE = "blue",
}
// console.log(color1);

let u: undefined;
let n: null;
let a: any;

function sum(a: number, b: number): number {
  return a + b;
  //   return "d"; will create issue because return type is number
}
// console.log(sum(2, 3));
// console.log(sum("2","3"))// not possible

// function in type

type Details = {
  firstName: string;
  lastName: string;
  age: Number;
};

let obj1: Details = {
  firstName: "adarsh",
  lastName: "khatri",
  age: 3,
};

let printData = ({ firstName, lastName, age }: Details): void => {
  //   console.log(`${firstName} ${lastName} `);
};
// void means nothing returning

printData(obj1);

//Union
let arr: (string | number)[] = ["adarsh", 34, "khatri", 23];

// Intersection;

type Developer = {
  skill: string;
  isWorking: boolean;
};
const masaiStudent: company & Developer = {
  firstName: "adarsh",
  lastName: "khatri",
  age: 23,
  skill: "html",
  isWorking: true,
};

type Develope1 = {
  skill: string;
  isWorking?: boolean; //if you write question mark then this is optional you didn't need to put, if you want then put else not
  //   can use this question mark anywhere to  make it optional string,number,boolean,type,interface etc
};

function sum1(a: number, b: number = 90): number {
  return a + b;

  //b: number=90  means it's default value is 90, you can call this function with single parameter
}
