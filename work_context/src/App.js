import logo from './logo.svg';
import './App.css';
import Wcontext from './Component/Wcontext';
import { Themecontext } from './Context/Themecontext';
import Wtheme from './Component/Wtheme';
import Wreducer from './Reducerwork/Wreducer';
import ReducerwithContext from './Reducerwork/ReducerWithContext';
import HReducer from './Reducerwork/Homework/HReducer';
import Hgithub_reducer from './Reducerwork/Homework/Hgithub_reducer';


function App() {
  return (
    <div className="App">
      I am Indian
      {/* <Wcontext/> */}

      {/* <Wtheme /> */}
      {/* <Wreducer /> */}

      {/* <ReducerwithContext /> */}

      {/* <HReducer /> */}
      <Hgithub_reducer />
    </div>
  );
}

export default App;
