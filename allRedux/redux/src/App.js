import logo from './logo.svg';
import './App.css';
import Todoinput from './Component/Todoinput';
import Todolist from './Component/Todolist';

function App() {
  return (
    <div className="App">

          <h1>ToDo</h1>

      <Todoinput />
      <Todolist/>

    </div>
  );
}

export default App;
