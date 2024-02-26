

const {Router}= require("express")

const student = Router()

student.post("/create",(req,res)=>{
    res.send("teacher create")
})
student.get("/read",(req,res)=>{
    res.send("teacher read")
})
student.put("/update",(req,res)=>{
    res.send("teacher update")
})
student.delete("/delete",(req,res)=>{
    res.send("teacher delete")
})

module.exports=student