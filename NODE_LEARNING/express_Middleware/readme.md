

if you have to make api for school then you will create endpoint for every one(teacher,student,staff) 
and all have crud
app.post("/teacher/create",(req,res)=>{
    res.send("teacher create")
})
app.get("/teacher/read",(req,res)=>{
    res.send("teacher read")
})
app.put("/teacher/update",(req,res)=>{
    res.send("teacher update")
})
app.delete("/teacher/delete",(req,res)=>{
    res.send("teacher delete")
})

like that /student/create, /student/read , /student/update and for staff same 
### so we are writing api for everyone have same endpoint only changes is teacher, student on api link
`here the term came middleware`

create folder (name or Route or anything)-> student.route.js or student.js or anything same thing for teacher and others



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
### now in index.js
const Student = require("./Routes/student.route")
const Teacher = require("./Routes/teacher.route")

const app = express();

app.use("/teacher",Teacher);
app.use("/student",Student);
### now see no need to write again and again teacher,student,staff
### http://localhost:8080/student/read http://localhost:8080/teacher/read
### teacher in link come from index and endpoint(create,read,update,delete) came from route same for student




### LOGS

const app = express();
`LOGS Should be here means the uppermost after express call`
app.use((req,res)=>{}) `this is your middleware or custom middleware or logs`
app.use((req,res,next)=>{
    console.log("inside the logs")
    next()
`when you fetch this your loading bar keep on , if you not call next()`
})
