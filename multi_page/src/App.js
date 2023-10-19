import logo from './logo.svg';
import './App.css';
import Home from './Components/Pages/Home';
import Allroutes from './Components/Routes/Allroutes';

function App() {
  return (
    <div className="App">
      <h1> Main app</h1>
      {/* <Home /> */}
      <Allroutes/>
    </div>
  );
}

export default App;
