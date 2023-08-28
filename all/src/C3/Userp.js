

export default function Userp(props){

const{name = "Adarsh",
avatarurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTq7xoQqj9aELgYu0a0KwPyyzF6hRYbnBjeHt21DEUGwcyISdmZWk6HKdG0I-brl9ZSQQ&usqp=CAU",
title="nothing",
skillsets=[1,2,3]} = props

    return (
        <div>

<h1>{name}</h1>
<img src= {avatarurl} alt="nothing" />
<p>{title}</p>

{
    skillsets.map((skl)=>(
        <li>{skl}</li>
    ))
}

        </div>
    )
}