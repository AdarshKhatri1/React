
const mongoose = require("mongoose")

async function main (){

    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/mongoose_live")
    
    await StudentModel.insertMany([{name:"Harsh",age:22,address:"bihar"}])
    console.log("connecting successful")

//    let res = await StudentModel.find();
//    console.log(res)


    connection.disconnect();
}

main()

// const StudentModel = mongoose.model("Student", new mongoose.Schema({
//     name:String,
//     age:Number,
//     address:String,
// }));


// if you don't want __V in the documents when you insert then 
const StudentModel = mongoose.model("Student", new mongoose.Schema({
    name:String,
    age:Number,
    address:String,
}, {versionKey:false}));
