
npm i jsonwebtoken
var jwt = require('jsonwebtoken');
### Create token
 `const token = jwt.sign({name:"Adarsh"},"shhhhh")`
### Decode token
`var decoded = jwt.verify(token, 'shhhhh');`
app.post("/login",async(req,res)=>{
    const {email,password} = req.body
    let data = await UserModel.findOne({email,password})    
    if(data){      
        const token = jwt.sign({name:"Adarsh"},"Hello jwt")
        res.send({msg:"validtate",token})
    }else{
        res.send("not validate")
    }
})


### ENCRYPT PASSWORD
npm i bcrypt
const bcrypt= require("bcrypt")
`ecrypt password`
bcrypt.hash(password, saltRounds, function(err, hash) {
    `saltRounds 5 is more than enough, you can give more but it will take time`
});
`check password`
bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // result == true
});




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
