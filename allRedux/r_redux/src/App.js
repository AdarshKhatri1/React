import './App.css';
import Counter from './Component/Counter';
import { Todo } from './Component/Todo';
import Todoinput from './Component/Todoinput';

function App() {
  return (
    <div className="App">     
        <Counter />
        <br/>
        <br/>
        <Todo/>

    </div>
  );
}

export default App;
