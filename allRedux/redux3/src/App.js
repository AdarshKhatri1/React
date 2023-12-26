import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';
import { Todo } from './Component/Todo';
import Login from './Login/Login';
import { useSelector } from 'react-redux';

function App() {

  const isAuth = useSelector(state=>state.authReducer.isAuth)
  // console.log(isAuth,"sldjfkl")
  
  return (
    <div className="App">
      <Counter />
      <br/>
      {isAuth? <Todo/> :<Login/>}
      
    </div>
  );
}

export default App;
