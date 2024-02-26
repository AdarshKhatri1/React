const express = require("express")
const {studentmodel, connection} = require("./db.js")

const app = express()
app.use(express.json())


app.get("/getStudent",async(req,res)=>{
   

        const data = await studentmodel.find()

        console.log(data.length)
   
    res.send("data success")
})

app.post("/postStudent",async(req,res)=>{
    // res.send("here")
    const data = req.body

    // console.log(data)
          const datab= await studentmodel.insertMany([data])
          
          console.log(datab)

    res.send("post success")
})
app.get("/",(req,res)=>{
    
   
    res.send("welcome here")
})



app.listen(8080,async()=>{
    try{

        await connection
        console.log("connecting success with mongo")
    }
    catch(err){
        console.log("err",err)
    }
    console.log("started on 8080")
})