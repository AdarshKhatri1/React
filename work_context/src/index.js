import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './Context/Themecontext';
import ReducerContextProvider from './Reducerwork/Reducer&Context';
import HReducerContextProvider from './Reducerwork/Homework/HReducerContext';
import { Hgithub_context_Provider } from './Reducerwork/Homework/Hgithub_reducerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  // <AppcontextProvider>
  //   <App />
  // </AppcontextProvider>

  // <ThemeContextProvider >
  //   <App/>
  // </ThemeContextProvider>
  

  // <ReducerContextProvider>
  //   <App />
  // </ReducerContextProvider>


  // <HReducerContextProvider>
  // <App/>
  // </HReducerContextProvider>
  

  <Hgithub_context_Provider>
    <App />
  </Hgithub_context_Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
