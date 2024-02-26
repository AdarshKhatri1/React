

const {Router}= require("express")

const teacher = Router()

teacher.post("/create",(req,res)=>{
    res.send("teacher create")
})
teacher.get("/read",(req,res)=>{
    res.send("teacher read")
})
teacher.put("/update",(req,res)=>{
    res.send("teacher update")
})
teacher.delete("/delete",(req,res)=>{
    res.send("teacher delete")
})

module.exports = teacher;