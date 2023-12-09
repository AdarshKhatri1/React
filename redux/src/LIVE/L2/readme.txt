we will use redux with react
install redux npm install redux

export const store = new Store({count:1},fn);



import { useSelector } from "react-redux"
export default function Home(){
    const state = useSelector((state)=>state)
    console.log(state)
}