// LIVE KA HAI

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './LIVE/L2/store';
import Home from './LIVE/L2/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store} >

    {/* <App /> */}
    <Home/>
  </Provider>
 
    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();










// PRE KA HAI P1 P2 P3 P4

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// // import { Store } from './P3/store';
// import { store } from './P4/Redux/store';
// import Counter from './P4/Component/Counter';
// import Counter2 from './P4/Component/Counter2';
// import Appcontext_Provider from './P4/Redux/Appcontex';
// import Counter3 from './P4/Component/Counter3';

// //P4
// console.log(store.getState())
// // console.log(store.)

// //P4
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     // <App />
//     // <Counter />
    
//     <Counter2 />

//     // <Appcontext_Provider store={store}>
//     //   <Counter3/>
//     // </Appcontext_Provider>

// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


