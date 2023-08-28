import React from "react";
import Button from "./Button";


export default function Skills(){

    const Skill = [
        "skill1","skill2","skill3"
    ];

    function handleClick(){
        alert("clicked me")
    }
    return (
        <div>

            
            {
                Skill.map((skil)=>(
                    <li>{skil}</li>
                ))
            }

<h1>Without jsx</h1>
            {

               Skill.map((skil)=>(
                React.createElement("li",{},skil)
               ))
            }

        <h1> break</h1>
        <Button handleClick={handleClick} />
        </div>
    )
  
  }