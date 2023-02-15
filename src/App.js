import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNum , decNum} from './Actions/index';


function App() {

  const myState=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>React Redux Counter App</h1>
      <div className='main'>
        <button onClick={()=>dispatch(incNum())} >+</button>
        <h2 className='num'>{myState}</h2>
        <button onClick={()=>dispatch(decNum())}>-</button>
      </div>
    </div>
  );
}

export default App;
