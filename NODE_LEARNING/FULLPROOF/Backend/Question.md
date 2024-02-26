### Task -1 ( User BMI Calculation system )

As a user i need to login to the account and able to calculate the BMI value with the given
height and weight.
FLOW

1. Need to have register api . So, that user can register his details and login from next time.
   ( registration values name, email, password)
2. Need to have login api . Inputs email and password.
3. Need to have getProfile api to get his own details
4. Need to have calculateBMI api . Inputs height (feet) and weigh(kgs) . Output BMI value
   formula: weight (kg) / [height (m)]2
5. Need to have getCalculation Hestory to get previous calculated BMI data
6. Need to have logout api to get out of the operations
   You can use the .json files or .txt for storing the data or you can use any database to store
   the user data and hestory data
   BONUS
7. If you use the any database - MongoDB
8. If you use token and middleware for authontication process - Yes
9. If you can document the steps to run the code

### API's

1. /register or /signup - name, email, password
2. /login - email, password
3. /getProfile - name, email from the DB -
4. /calculateBMI - height(in feet), weight(kgs) -> O/P -> BMI value -> weight/(height^2) [height in m]
5. /getCalculation - send History -> send all previous BMI data of that particular user
6. logout -> clear token on the frontend

http://localhost:8000/login
http://localhost:8000/signup
http://localhost:8000/getProfile - GET
http://localhost:8000/calculateBMI - POST
http://localhost:8000/getCalculation - GET

const express = require("express")
const cors = require("cors")
const {connection} = require("./config/db")
const {UserModel} = require("./models/UserModel")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { authentication } = require("./middlewares/authentication");
const { BMIModel } = require("./models/BMIModel");
require("dotenv").config()

const app = express();

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
res.send("Hello")
})

app.post("/signup", async (req, res) => {
const {name, email, password} = req.body

    const isUser = await UserModel.findOne({email})
    if(isUser){
        res.send({"msg" : "User already exists, try logging in"})
    }
    else {
        bcrypt.hash(password, 4, async function(err, hash) {
        if(err){
            res.send("Something went wrong, please try again later")
        }
        const new_user = new UserModel({
            name,
            email,
            password : hash
        })
        try{
            await new_user.save()
            res.send({"msg" : "Sign up successfull"})
        }
        catch(err){
            res.send({"msg" : "Something went wrong, please try again"})
        }
    });

}
})

app.post("/login", async (req, res) => {
const {email, password} = req.body
const user = await UserModel.findOne({email})
const hashed_password = user.password;
const user_id = user.\_id;
console.log(user)
console.log(user_id)
bcrypt.compare(password, hashed_password, function(err, result) {
if(err){
res.send({"msg" : "Something went wrong, try again later"})
}
if(result){
const token = jwt.sign({user_id}, process.env.SECRET_KEY);  
 res.send({message : "Login successfull", token})
}
else{
res.send({"msg" : "Login failed"})
}
});
})

app.get("/getProfile", authentication, async (req, res) => {
const {user_id} = req.body
const user =await UserModel.findOne({\_id : user_id})
const {name, email} = user
res.send({name, email})
})

app.post("/calculateBMI", authentication, async (req, res) => {
const {height, weight, user_id} = req.body;
const height_in_metre = Number(height)\*0.3048
const BMI = Number(weight)/(height_in_metre)\*\*2
const new_bmi = new BMIModel({
BMI,
height : height_in_metre,
weight,
user_id
})
await new_bmi.save()
res.send({BMI})
})

app.get("/getCalculation", authentication, async (req, res) => {
const {user_id} = req.body;
const all_bmi = await BMIModel.find({user_id : user_id})
res.send({history : all_bmi})
})

app.listen(8000, async () => {
try{
await connection
console.log("Connection to DB successfully")
}
catch(err){
console.log("Error connecting to DB")
console.log(err)
}
console.log("Listening on PORT 8000")
})
