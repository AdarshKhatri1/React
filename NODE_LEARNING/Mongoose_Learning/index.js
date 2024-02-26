

const mongoose = require("mongoose")

const schema = new mongoose.Schema({ // always use new

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

    // const student = new model1({
    //     name:"gaurav",
    // place:"bihar",
    // time:Date.now(),
    // tags:["c","d"]
    // })

    // await student.save()


    // Get the data
    const blog = await model1.find()
    
    console.log(blog)

    // console.log("connected")
    connection.disconnect()
}

main()
// console.log("n")