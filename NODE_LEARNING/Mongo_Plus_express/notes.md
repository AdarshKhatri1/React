
const UserSchema = new mongoose.Schema({
    email:{type :String, required:true},
    password:{type:String,required:true}
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
