


console.log("hello people")
const url = "http://localhost:3000/api/todo";
// const url = "https://jsonplaceholder.typicode.com/posts";

async function getdata(){

    let d = await fetch(url);
    let data = await d.json();
    console.log(data)
}



 async function addData(){

        console.log("enter")

        const data = {
        id:Date.now(),
        body:document.getElementById("name").value,
        status:false
    }
    console.log(data)

    let d = await fetch(url,{

        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-type": "application/json"
        }
    });

    let res = await d.json()
    console.log(res)
 }

async function deleteData(){

    let id = document.getElementById("did").value;
    console.log(id)

    let d = await fetch(url+"/"+id,{
        method:"DELETE",
        headers:{
            "Content-type": "application/json"
        }

    })
    let res  = await d.json();
    console.log(res)
}
async function putData(){

    let id = document.getElementById("putd").value;
    console.log(id)

    let data =  {
        "id": 1693476470503,
        "body":"wer",
        "status": false
      }
    let d = await fetch(url+"/"+id,{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
            "Content-type": "application/json"
        }

    })
    let res  = await d.json();
    console.log(res)

}

async function patchData(){
    let id = document.getElementById("patd").value;
    console.log(id)
let data = {body:"uiop"}

    let d = await fetch(url+"/"+id,{
        method:"PATCH",
        body:JSON.stringify(data),
        headers:{
            "Content-type": "application/json"
        }

    })
    let res  = await d.json();
    console.log(res)

}

