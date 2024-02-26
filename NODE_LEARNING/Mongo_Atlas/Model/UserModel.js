// "name":"Ned Stark","email":"sean_bean@gameofthron.es","password":"$2b$12$UREFwsRUoyF0CRqGNK0LzO0HM/jLhgUCNNIJ9RJAqMUQ74crlJ1Vu"}

const { model, Schema } = require("mongoose");


const schema = new Schema({
    "name":String,
    "password": String,
    "email":String
})

const UserModel =  model('users',schema)

module.exports={UserModel}