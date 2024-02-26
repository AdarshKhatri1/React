
`npm init -y`
`npm i mongoose`
### import mongoose  const mongoose = require("mongoose")
async function main(){

    const url = "mongodb://127.0.0.1:27017/mongoose_day1"
    // const url = "mongodb://localhost:27017/mongoose_day1"
    const connection = await mongoose.connect(url);

    console.log("connected")

### all work should be here before disconnecting
    connection.disconnect()
}

main()

` model and schema are outside the function main`
### model



### schema
const schema = new mongoose.Schema({

    name:String,
    place:String,
    time:Date,
    tags:[], //array
    tags2:[String],//array of String
    compulsory:{type:String,required:true,validate:()=>{}}
})


`1st time users copy this`

const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name:String,
    place:String,
    time:Date,
    tags:[]    
})

const model1= mongoose.model("Student",schema)

async function main(){
    const url = "mongodb://127.0.0.1:27017/mongoose_day1"
    // const url = "mongodb://localhost:27017/mongoose_day1"
    const connection = await mongoose.connect(url);

    const student = new model1({
        name:"gaurav",
    place:"bihar",
    time:Date.now(),
    tags:["c","d"]
    })

    await student.save()
    console.log("connected")
    connection.disconnect()
}

main()


if you don't want __V in the documents when you insert then 
const StudentModel = mongoose.model("Student", new mongoose.Schema({
    name:String,
    age:Number,
    address:String,
}, {versionKey:false}));

### some topics

for post or add data in collection
`Two way`
usermodel
const UserSchema = new mongoose.Schema({
    email:String,
    password:String
})

const UserModel =mongoose.model("user",UserSchema)
### 1st way
UserModel.insertMany(payload)

### 2nd way 
 const new_user = new UserModel({
        email,
        password
    })
    new_user.save()


### 
const UserSchema = new mongoose.Schema({
    email:{type :String, required:true},
    password:{type:String,required:true}
})