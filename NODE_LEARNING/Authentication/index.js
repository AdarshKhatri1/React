
const {Connection, UserModel} = require("./db")
const express = require("express")
const jwt = require ("jsonwebtoken")
const bcrypt= require("bcrypt")
const { first, two, three } = require("./My own function/functions")

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send('Home page')
})

app.post("/signup",async(req,res)=>{

    // const {email,password} = req.body
    // const new_user = new UserModel({
    //     email,
    //     password
    // })
    // await new_user.save()

    const payload = req.body
   await UserModel.insertMany(payload)
    
    res.send("successful attached")

})

app.post("/login",async(req,res)=>{
    const {email,password} = req.body
    let data = await UserModel.findOne({email,password})    
    if(data){      
        const token = jwt.sign({email,password},"Secret key")
        res.send({msg:"validtate",token})
    }else{
        res.send("not validate")
    }
})



app.get("/dashboard",first)


app.get("/dashboard2",two)

app.get("/d3",three)



// Encryption part here


app.post("/encrypt_Password/signup",(req,res)=>{
    const {email,password} = req.body
    // console.log(email,password)
    bcrypt.hash(password, 5, async function(err, hash) {

        if(err){
            res.send("sign up after sometime")
        }
        else{

            await UserModel.insertMany({email,password:hash})
            res.send("encrypted successful password stored in database")
        }

});
})

// {
//   "email":"abc@.com",
//   "password":"Adarsh890"
// }
app.post("/DcryptPassword/login",async(req,res)=>{
    
    const {email,password} = req.body
    let data = await UserModel.findOne({email})  
    const hashPassword = data.password;  
    console.log(data)
    bcrypt.compare(password, hashPassword, function(err, result) {
    if(result){
        const token = jwt.sign({email,password:hashPassword},"Secret key")
        res.send({msg:"validtate",token})
    }
    else{
         res.send("wrong password")
    }
});

})

app.listen(8080,()=>{
    try{
        Connection
        console.log("Connection successful")
    }catch(err){
        console.log(err)
        console.log(err)
    }

    console.log("listen on port 8080")
})