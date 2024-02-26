
const {Router} = require("express")
const { getStudent, postStudent, StudentController } = require("../Controller/Student.controller")


const StudentRoute = Router()

// StudentRoute.get("/",getStudent)
// StudentRoute.post("/post",postStudent)

// for Object export

StudentRoute.get("/",StudentController.getStudent)
StudentRoute.post("/post",StudentController.postStudent)


module.exports={StudentRoute}