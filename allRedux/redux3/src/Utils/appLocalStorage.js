
const accessData = (key)=>{
// console.log("inside access data")
        let data = JSON.parse(localStorage.getItem(key))
        return data;
}

const saveData = (key,value)=>{
    let data = localStorage.setItem(key,JSON.stringify(value));

}

export {accessData,saveData};