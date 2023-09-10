import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom"
import Auth_Context_Provider from './Components/7_July_Classwork/C1/Auth_Context';
import Auth_Context_Provider2 from './Components/7_July_Classwork/C2/Auth_Context2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // for c1
  // <BrowserRouter>
  //   <Auth_Context_Provider>
  //     <App />
  //   </Auth_Context_Provider>
  // </BrowserRouter>


  // for c2
  <BrowserRouter>
    <Auth_Context_Provider2>
      <App />
    </Auth_Context_Provider2>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
