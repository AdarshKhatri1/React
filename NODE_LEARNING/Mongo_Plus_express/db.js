

const exp = require("constants")
const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://127.0.0.1:27017/mongoose_live")
const studentSchema = new mongoose.Schema({
    name:String,
    age:Number,
    address:String
})

const studentmodel = mongoose.model("Student",studentSchema)
module.exports = {connection,studentmodel}