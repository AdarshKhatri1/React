

const mongoose = require("mongoose")

const Connctions = mongoose.connect("mongodb://127.0.0.1:27017/Authentication")

const UserSchema = new mongoose.Schema({
    email:{type :String, required:true},
    password:{type:String,required:true}
})

const UserModel =mongoose.model("user",UserSchema)

module.exports ={Connctions,UserModel}