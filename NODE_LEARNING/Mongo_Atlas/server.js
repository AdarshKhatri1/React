
const mongoose = require("mongoose")

const db = "mongodb+srv://user:8CXJXQJbMPnoziyX@cluster0.yee9en5.mongodb.net/sample_mflix?retryWrites=true&w=majority"

const connctions = mongoose.connect(db).then((res)=>{
    console.log("atlas successful connected",)
})
.catch((err)=>{
    console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
    console.log(err)
})


module.exports = {connctions}