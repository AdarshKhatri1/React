import Userp from "./Userp"
import UserProfile from "./Userp"


export default function Userprofilee(){
    const data = {
        name: "Ajay Devgan",
        avatarurl:"https://stat4.bollywoodhungama.in/wp-content/uploads/2019/06/Box-Office-Ajay-Devgn-is-a-lambi-race-ka-ghoda-and-here-is-the-proof.jpg",
        title:"murder",
        skillsets:["s1","s2","s3"]
    }

    return(
        // <Userp   />
        <Userp name= {data.name} avatarurl={data.avatarurl} title={data.title} skillsets={data.skillsets}  />

        
    )
}