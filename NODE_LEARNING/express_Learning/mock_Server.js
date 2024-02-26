const express = require("express");
const fileSystem = require("fs");

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.send("done checking");
});

//posting or adding data into products came from client
app.post("/product", (req, res) => {
  const file = fileSystem.readFileSync("./db.json", { encoding: "utf-8" });
  const jsonToObj = JSON.parse(file);
  // adding user data in products
  jsonToObj.products.push(req.body);
  const stringify_data = JSON.stringify(jsonToObj);
  fileSystem.writeFileSync("./db.json", stringify_data, { encoding: "utf-8" });
  //   console.log(jsonToObj.products);

  res.send("product added");
});

app.put("/put_data/:id",(req,res)=>{
  // http://localhost:8080/put_data/4/adarsh
  // const param = req.params
  // console.log(param)
  // const {id} = req.params
  // console.log(id) 

  res.send("put done")
})
app.put("/querry_data",(req,res)=>{
  // http://localhost:8080/querry_data?name=adarsh
  // const query = req.query
  // console.log(query)
  const {name} = req.query
  console.log(name)

  res.send("query done")
})


app.get("/product",(req,res)=>{

    const json_file = fileSystem.readFileSync("./db.json",{encoding:"utf-8"})
    const json_file_to_obj = JSON.parse(json_file)


    console.log(json_file_to_obj)
    // res.send(JSON.stringify(json_file_to_obj.products))
    res.send(json_file_to_obj.products)

})
app.listen(8080);
