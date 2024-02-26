

const express = require ("express")
const axios = require("axios");
const { get } = require("mongoose");


const app = express();

app.get("/",(req,res)=>{
    res.sendFile(__dirname+ "/index.html")
})

app.get("/github/callback",async(req,res)=>{
    
    const {code} = req.query
    console.log("Code",code)

    const accesstoken = await axios.post("https://github.com/login/oauth/access_token",{
        
            code,
            client_secret:"fe7ae0e69dc9e1be3c665e2c16431e8c6b60456d",
            client_id:"8d1c962c7bd240bcafa2"
        
    },
    {

        headers:{
            accept:"application/json"
        }
    }
    
    
    )
    
// console.log("accesstoken",accesstoken )
// console.log("Bearer "+ accesstoken.data.access_token)
    const getUser= await axios.get("https://api.github.com/user",{
        headers:{
            Authorization:"Bearer "+ accesstoken.data.access_token
        }
    })
    console.log("getUser",getUser,"get user")



    res.send("you are successful")
})



app.listen(8080,(req,res)=>{
    console.log("listen on port 8080")


})
