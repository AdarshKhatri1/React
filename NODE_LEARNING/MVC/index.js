
const express = require("express")
const { StudentModel } = require("./Model/Student.model")
const { Connection } = require("./Config/db")
const { StudentRoute } = require("./Routes/Student.routes")

const app = express()
app.use(express.json())


app.get("/",(req,res)=>{

    res.send("home page")
})

app.use("/student",StudentRoute)



app.listen(8080,async()=>{
    
    try{
        await Connection
        console.log("connecting success")
    }
    catch(error){
        console.log('error',error)
    }
    console.log("server started")
})