import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Condition from './C2/Condition';
import Skills from './C2/Skills';
import Counter from './C2/Counter';
import Userprofilee from './C3/Userprofilee';
import Inputbox from './C3.1/Inputbox';
// import Todo from './C4/Todo';
import Cart from './C5/Cart';
import Counttrack from './C6/Counttrack';
import Todo from './C6/Todo';
import Timer from './C7/Timer';
import Timer2 from './C7/Timer2';
import Garbage from './C7/Garbage';
import Form from './C8/Form';
import Input from './C8/Input';
import Countdown from './C8/Countdown';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    // <Condition />
    // <Skills />
    // <Counter/>
    // <Userprofilee />
    // <Inputbox />
    // <Todo />

    // <Cart />

// -----------------------------
    // C6
//  <Counttrack /> 
/* <Todo />  */

// -----------------------------


// -----------------------------
// C7
//<Timer /> 

//  <Timer2 />

//<Garbage /> 
// -----------------------------


// -----------------------------
//C8
// <Form /> 
//<Input />
<Countdown />
// -----------------------------
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
