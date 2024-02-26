
// working on logs

const express = require("express")
const Student = require("./Routes/student.route")
const Teacher = require("./Routes/teacher.route")

const app = express();

app.use((req,res,next)=>{

    console.log("inside the logs")
    next()
})
app.use((req,res,next)=>{
    if(!req.query.apiKey){
        // res.send("api key not present")
        // or
        res.status(401).send("api key not present")
    }
    
    next()
   
})

// app.get("/",(req,res)=>{
//     res.send("express Middleware")
// })

app.use("/teacher",Teacher);
app.use("/student",Student);


app.listen(8080,()=>{
    console.log("running on port 8080")
})