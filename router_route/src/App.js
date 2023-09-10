import logo from './logo.svg';
import './App.css';
import Hroute from './Components/route_router/Hroute';
import {Routes,Route} from "react-router-dom"
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Navbar from './Components/ClassWork/Navbar';
import Allroute from './Components/ClassWork/Routess/Allroute';
import Nvb from './Components/7_July_Classwork/C1/Nvb';
import Nvb2 from './Components/7_July_Classwork/C2/Nvb2';

function App() {
  return (
    <div className="App">
      <h1> Class  Work</h1>
       {/* -----------------------start---------------------------------  */}
            {/* 
          <div>
          <Hroute />
          <Routes>
            <Route path='/' element={<Home/>} > </Route>
            <Route path='/about' element={<About/>} > </Route>
          </Routes>
          </div> */}
      {/* -------------------------end-------------------------------- */}



      {/* --------------------------start------------------------------ */}
            {/* <Allroute /> */}
            {/* <Navbar />      */}
      {/* --------------------------end-------------------------------- */}



      {/*  --------------------------Start----------------------------------- */}
      7 july ka yaha se hai
            {/* 1st  */}
          {/* <Nvb/>
          <Allroute /> */}

          
          {/* 2nd */}
          <Nvb2/>
          <Allroute/>



      {/* -----------------------------end----------------------------- */}
      
    </div>
    
  );
}

export default App;
