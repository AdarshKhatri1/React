const jwt = require("jsonwebtoken")

const first = (req,res)=>{
// http://localhost:8080/dashboard?token=werew
    const {token} = req.query
    console.log(token)
    if(token){
        res.send("dashboard")
    }
    else{
        res.send("give proper token")
    }
}

const two = (req,res)=>{
    const {token} =req.query;
    
        try{
            var decoded = jwt.verify(token, 'Secret key');
            console.log("decode",decoded)
            
            res.send({msg:"succuess"})
        }catch(err){
            console.log(err)
            res.send("send token")
        }

    
}

const three = (req,res)=>{

    // Headers key will be Authorization and value will be Bearer space token
    const {authorization} =req.headers;
    // console.log(authorization)
    const token = authorization.split(" ")[1]
        try{
            var decoded = jwt.verify(token, 'Secret key');
            console.log("decode",decoded)
            
            res.send({msg:"succuess"})
        }catch(err){
            console.log(err)
            res.send("send token")
        }
}

module.exports={first,two,three}