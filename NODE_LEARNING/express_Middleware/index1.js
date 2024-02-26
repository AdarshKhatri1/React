

const express = require("express")
const Student = require("./Routes/student.route")
const Teacher = require("./Routes/teacher.route")

const app = express();


// app.get("/",(req,res)=>{
//     res.send("express Middleware")
// })

app.use("/teacher",Teacher);
app.use("/student",Student);


app.listen(8080,()=>{
    console.log("running on port 8080")
})