declare let isDone: boolean;
declare let Price: number;
declare let FirstName: string;
declare let LastName: string;
declare let fullName: string;
declare let arrOfNumber1: Number[];
declare let arrOfNumber2: Array<Number>;
declare let arrOfString: string[];
type abc = string;
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
declare let obj: company;
declare let arrayOfCompany: company[];
declare let tuples: [string, number];
declare let tuples1: readonly [string, number];
declare enum color {
    RED = 0,
    GREEN = 1,
    BLUE = 2
}
declare enum color1 {
    RED = "red",
    GREEN = "Green",
    BLUE = "blue"
}
declare let u: undefined;
declare let n: null;
declare let a: any;
declare function sum(a: number, b: number): number;
type Details = {
    firstName: string;
    lastName: string;
    age: Number;
};
declare let obj1: Details;
declare let printData: ({ firstName, lastName, age }: Details) => void;
declare let arr: (string | number)[];
type Developer = {
    skill: string;
    isWorking: boolean;
};
declare const masaiStudent: company & Developer;
type Develope1 = {
    skill: string;
    isWorking?: boolean;
};
declare function sum1(a: number, b?: number): number;
