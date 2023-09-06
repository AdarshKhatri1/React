import logo from './logo.svg';
import './App.css';
import Wcontext from './Component/Wcontext';
import { Themecontext } from './Context/Themecontext';
import Wtheme from './Component/Wtheme';
import Wreducer from './Reducerwork/Wreducer';
import ReducerwithContext from './Reducerwork/ReducerWithContext';
import HReducer from './Reducerwork/Homework/HReducer';


function App() {
  return (
    <div className="App">
      I am Indian
      {/* <Wcontext/> */}

      {/* <Wtheme /> */}
      {/* <Wreducer /> */}

      {/* <ReducerwithContext /> */}

      <HReducer />
    </div>
  );
}

export default App;
