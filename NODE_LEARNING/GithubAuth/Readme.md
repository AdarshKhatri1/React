###

npm init -y
npm i express mongoose nodemon

1. Go to git hub
2. settings
3. Developer settings
4. Oauth apps
5. Register a new application
   ` Homepage Url :- http://localhost:8080/`
   ` Authorization callback URL  :- http://localhost:8080/github/callback`
6. Register Application
   `Client ID=  key client id sheets google`
7. Generate a new client secret
   `Secret key = key client id sheets google`
8. Update application

now
href = https://github.com/login/oauth/authorize?client_id=your client id
app.get("/",(req,res)=>{
res.sendFile(\_\_dirname+ "/index.html")
})
after you give access it will redirect to this link
/github/callback
`so create this link`
app.get("/github/callback",(req,res)=>{
const {code} = req.query
console.log("Code",code)
res.send("you are successful")
})

### Now need to get token by the help of code get by github

`https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps`

1. get access token POST https://github.com/login/oauth/access_token
   parmeters should be include = code,client_secret,client_id
2. get user by that token get =https://api.github.com/user
   For example, in curl you can set the Authorization header like this:
   curl -H "Authorization: Bearer OAUTH-TOKEN" https://api.github.com/user

### this thing on website

Exchange this code for an access token:

POST https://github.com/login/oauth/access_token
This endpoint takes the following input parameters.

Parameter name Type Description
client_id string Required. The client ID you received from GitHub for your OAuth app.
client_secret string Required. The client secret you received from GitHub for your OAuth app.
code string Required. The code you received as a response to Step 1.
redirect_uri string The URL in your application where users are sent after authorization.

### this thing on website

install axios and make a get request a/q to docs

axios me header pass karne ka 3rd parameter hota hai post me
const accesstoken = await axios.post("https://github.com/login/oauth/access_token",{

            code,
            client_secret:"fe7ae0e69dc9e1be3c665e2c16431e8c6b60456d",
            client_id:"8d1c962c7bd240bcafa2"

    },
    {

`headers should be small`
headers:{
accept:"application/json"
}
}

    )

get me axios.get(URL, { 'headers': { 'Authorization': AuthStr } })
