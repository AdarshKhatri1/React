import './App.css';
import Counter from './P4/Component/Counter';
import Counter2 from './P4/Component/Counter2';
import Counter3 from './P4/Component/Counter3';

import { Store } from './P4/Redux/Store';
console.log(Store.getState(), "HEllo")

function App() {
  return (
    <div className="App">      
      <h1> hello asdasrh</h1>


      {/* <Counter /> */}
      {/* <Counter2/> */}
      <Counter3 />
          </div>
  );
}

export default App;
