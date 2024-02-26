const { StudentModel } = require("../Model/Student.model")

const getStudent =async(req,res)=>{
    const data= await StudentModel.find()
    // res.send("get Student")
    res.send(data)
}

const postStudent = async(req,res)=>{

    const data = req.body

    // console.log(data)
    await StudentModel.insertMany(data)
    res.send("post success")

}

// module.exports={getStudent,postStudent}

// or or
// create object and export

const StudentController = {
    getStudent,postStudent
}

// or or create class

module.exports={StudentController}