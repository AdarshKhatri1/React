### google create react app typescript

==`https://create-react-app.dev/docs/adding-typescript/`
==`npx create-react-app my-app --template typescript`

now

1. Create a Component folder inside the src folder
2. Create Button.tsx, Counter.tsx, Header.tsx file inside Component Folder.

interface IHeaderProps {
label: string; //
}

const Header = ({ label }: IHeaderProps) => {
return <div>{label}</div>;
};

      <Header label="Counter" />

### how to handle if you not pass label to Header when creating

      <Header  />

      so to handle this
      label?: string; in the interface  and
      const Header = ({ label = "default props" }: IHeaderProps) =>

### now it become like

import React from "react";

interface IHeaderProps {
label?: string;
}

const Header = ({ label = "default props" }: IHeaderProps) => {
return <div>{label}</div>;
};

export default Header;

### passing element in Headers

<Header> 
<div>I am div</div> // this is the element i am passing in header as children
</Header>
so in interface you have to write

### solution

interface IHeaderProps {
label?: string;
children?:JSX.Element // is use for make it optional
}
const Header = ({ label = "default props",children }: IHeaderProps) => {
return <div>

<div>
{label}
</div>
{children}
</div>;
};

### what if more than one element passed in header

<Header> 
<div>I am div</div> 
<div>I am div</div> 
<div>I am div</div> 
</Header>

so in interface

### solution

interface IHeaderProps {
label?: string;
children?:JSX.Element | JSX.Element[] // array of element
}

### Generics in hooks

const [count, setCount] = useState(0);
const [count, setCount] = useState<number>(0);

###

generally we write
const name : string="masai";
like that we can write
functionname:type=()=>{}

### onchange in input tag

Type is this React.ChangeEventHandler<HTMLInputElement>. can see if you hover the mouse over onchange

const handleChange: React.ChangeEventHandler<HTMLInputElement>= (e) => {
setText(e.target.value);
};

return (
<div>
<input type="text" onChange={handleChange} />
<button>Add</button>
</div>
);
