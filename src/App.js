import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {actionCreators} from './state/index'
import { bindActionCreators } from 'redux';

function App() {
  const amount = useSelector(state => state.amount)
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators , dispatch)
  return (
    <div className="App">
       <br></br>
       <br></br>
       <button id="incre" onClick={()=> actions.depositMoney(100)}> + </button>
       <br></br>
       <br></br>
       <div id="bal"> {amount} </div>
       <br></br>
       {/* <br></br> */}
       <button id="decre" onClick={()=> actions.withdrawMoney(100)}> - </button>
       <br></br>
       <br></br>
    </div>
  );
}

export default App;
