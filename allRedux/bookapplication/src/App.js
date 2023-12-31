import './App.css';
import Routee from './Pages/Routee';
import { login } from './Redux/Auth/Action';

function App() {
  return (
    <div >
        {/* <div>Inside App</div> */}
        
        <Routee/>
        
    </div>
  );
}

export default App;
