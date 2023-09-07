import logo from './logo.svg';
import './App.css';
import Hroute from './Components/route_router/Hroute';
import {Routes,Route} from "react-router-dom"
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Navbar from './Components/ClassWork/Navbar';
import Allroute from './Components/ClassWork/Routess/Allroute';

function App() {
  return (
    <div className="App">
      <h1> Class  Work</h1>
        <Allroute />
        <Navbar />     






      
      {/* <div>
      <Hroute />
      <Routes>
        <Route path='/' element={<Home/>} > </Route>
        <Route path='/about' element={<About/>} > </Route>
      </Routes>

      </div> */}
      
    </div>
  );
}

export default App;
