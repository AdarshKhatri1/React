const express = require("express");

const { connctions } = require("./server");
const { UserModel } = require("./Model/UserModel");

const app = express();
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.get("/user",async(req,res)=>{
    // const data= UserModel.find();
const data = await UserModel.find({})
    console.log(data)    
    res.send(data)
    // res.send("user get")
})

app.listen(8080,async()=>{
await connctions.then(()=>{
    console.log("connected")    
})
.catch((err)=>{
console.log("Error",err)
})
    console.log("listen on port 8080")
})