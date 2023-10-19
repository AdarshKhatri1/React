
import axios from "axios"

export default function Practice() {

    function axios1() {

        axios("https://jsonplaceholder.typicode.com/todos")
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        console.log("e")

    }

    function axios2() {

        axios("https://jsonplaceholder.typicode.com/todos")
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
            .finally(console.log("finally executed"))
        console.log("e")

    }

    function axios3() {

        
        

        axios.get ('https://jsonplaceholder.typicode.com/todos')
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
            .finally(console.log("finally executed"))
        

    }

    return (
        <div>
            <button onClick={axios1}>check 1</button>
            <button onClick={axios2}>check 2</button>
            <button onClick={axios3}>check 3</button>
        </div>
    )
}