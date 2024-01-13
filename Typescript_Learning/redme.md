If you want to run typescript file then you can't you have to go to the build folder, index.js and run that file

### Steps

1. Initialize project: `npm init -y`
2. Install typescript globally: `npm install -g typescript`
3. To check for the typescript version: `tsc -v`
4. To create a `src` folder, and create a `index.ts` file.
5. To create a script in package.json file, "build": "tsc --watch"
6. To create a `tsconfig.json` file, and copy the tsconfig data from the pre-class notes.
   {
   "include": ["src"],
   "exclude": ["node_modules"],
   "compilerOptions": {
   "module": "commonjs",
   "outDir": "build",
   "target": "es2017",
   "declaration": true,
   "sourceMap": true
   }
   }
7. Write some typescript code in index.ts -> Save it -> Run `npm run build`
8. It will create a build folder, with the corresponding index.js file.

### Compilation V/s Transpilation

#### Compilation

- We write code -> Compiler -> Some other language
- High Level Language to some Low Level Language
- Low level languages are generally machine friendly/ machine language code: eg: binary, or bytecode.
- That generated is code is not human-readable (generally)
- C, C++, Go -> Compiler -> `.exe`

#### Transpilation

- From High Level language to another High Level language, via a transpiler
- The generated code is human-readable
- The generated code might go through another/or one more compilation step.
- <h1>Hello world<h1> - JSX
- React.createElement("h1", null, "hello world")
- from ES6 "const x = 1" to ES3 "var x = 1".

#### Interpreted

- Executed line by line, -> then it returns the output.

### Statically Typed Language V/s Dynamically Typed Language

#### Dynamically Typed Language

- The compiler doesn't know about the "types" at the compile time.
- let x = 1;
- let x = "Hello";
- Generally slower,
- JS, Python, Ruby, etc.
- Generally less safe.

#### Statically typed language

- The compiler knows the "types" at the compile time.
- Generally faster than Dynamically typed language
- C, C++, Go, Rust, Python, Java, TypeScript, etc.
- int x; string y;

#### TypeScript

- Statically typed language
- TypeScript ->it need Transpiler: `tsc` -> to convert in JavaScript
- Supeset of JS
- At the end it is just JavaScript.
- let x:string;
- let y:number;

### Is JavaScript a compiled language or interpreted language?

- Where is it running? -> It depends on the environment.
- JS can be both compiled and interpreted language as well.
- Google Chrome V8 -> Just in Time compilation, NodeJS, Deno, BraveBrowser -> Chromium -> V8

- console.log(x); // undefined. //
- let x = 10;

#### What, Why, How

### OWN

interface and type both are same(CREATING A BLUEPRINT FOR YOUR OBJECT) TO CREATE OR DEFINE THE SHAPE OF THE OBJECT
type abc = string; // is possible(PRIMITIVE ALLOW)
interface sabc = string; // is not possible(NOT ALLOW PRIMITIVE)

PRIMITIVE = STRING,NUMBER,BOOLEAN,NULL,UNDEFINED,SYMBOL,
AND big-int;

### TUPLES

Allow to write array with index

### ENUMS

When you want top Group together a set of named constants;
it bydefault have index 0,1,2 and you can also give index as number,string etc;

### Function

can define return type like in java
function sum(): number {
return 2 + 3;
return "d"; will create issue because return type is number
}

### UNION

can store different type of datatype in array

let val:(number|string)[] val contain either number or string

### Intersection

And (can add two type in one)
