import logo from './logo.svg';
import './App.css';
import Wcontext from './Component/Wcontext';
import { Themecontext } from './Context/Themecontext';
import Wtheme from './Component/Wtheme';


function App() {
  return (
    <div className="App">
      I am Indian
      {/* <Wcontext/> */}

      <Wtheme />
    </div>
  );
}

export default App;
