
const {model,Schema} = require("mongoose")


const StudentSchema =  new Schema({
    "id":Number,
    "Name":String,
    "Course":String,
    "Email":String
})
const StudentModel =  model ("student",StudentSchema)


module.exports={StudentModel}