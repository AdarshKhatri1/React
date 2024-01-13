### jest

1.npm init
2.npm install --save-dev jest ()

### --save-dev means

save this dependency as devDepencies (which is use for developer not for user end)

3.create file index.js, index.test.js

### index.test.js

test file name should be matched with file name (index.js)

eg. if file name is main.js then test file will be main.test.js

### module.export

4.create a fnc sum inside index.js and export it using module.exports = sum
because jest doesn't support es6, if you want to export without module then you should use babel full description on jest offician website.

### import [require('filepath')]

since jest doesn't support es6, so for import we need to use require()
5.import the sum in the index.test.js file using
const sum = require('./index')

### expectation ---> actual

based on this we get pass or fail as o/p

### describe

it coupling multiple test case inside it, that's it about it

in index.test.js
describe(" ", callback func)

callback === ()=>{}

### test

inside describe callback fnc we can have multiple test

### writing test

test("",()=>{})

....

### matchers = tobe,toequal,etc for more see official site of jest

### how to run test case

change the test script

"script"
{
"test" :"jest --watchAll"
`--watchAll for hot reloading:- when you do some change it will auto run`
}

### **tests** folder

becoz jest either looking for index.test.js or this folder

### multiple test file

if you have have multiple test file, and if you save then all test cases run from every test file, to specify which test file should run write

npm run test filepathname.js
npm run test (underscore underscore)tests(underscore underscore)/test.js
