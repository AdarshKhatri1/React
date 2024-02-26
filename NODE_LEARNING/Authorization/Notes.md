### role can be this or add enum

const userSchema = new Schema({
email:{type:String, required:true},
password:{type:String, required:true},
`enum role`
role:{type:String, role:"Customer"}
`or`
role:{type:String,enum:["Customer","Seller"], default:"Customer"}
})
app.post("/signup",(req,res)=>{
const {email,password} = req.body  
 bcrypt.hash(password, 4, function(err, hash) {
if(err){
res.send('some error')
}else{
console.log(hash)
` const user = new userModel({email,password:hash})`
` user.save();`
res.send("success sign up")
}
});
})

`login and sign up created`

### authentication and authorisation

`authentication no authorization no`
app.get "/product"
`authentication yes authorization no`
app.get "/product/cart"
`authentication yes authorization yes`
app.post "/product/create"

`in 1.js i make these three api `

Now the issue is if there is more than 1000 uri then you will write same thing for authentication and authorization ans is no so now create a middleware pass this as a parameter in function between the link and callback function
app.get("your link", authentication, authorisation, callback());

### now make authentication and authorisation Middleware

### authentication

const Authentication = (req, res, next) => {
const token = req.headers?.authorization?.split(" ")[1];
try {
var decode = jwt.verify(token, "MysecretKey");
next();
} catch (err) {
console.log("err", err);
res.send("not authenticated");
}
};
`now apply this so i applied in 2.js`
app.get("/product/cart", Authentication, async (req, res) => {
res.send("cart products");
});

## Handle different role for routes who can access

3.js and UpdatedAuthorization
