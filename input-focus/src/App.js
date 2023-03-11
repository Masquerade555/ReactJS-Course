import logo from './logo.svg';
import './App.css';
import { useRef} from 'react';

function App() {
  const myinput = useRef();
  const inputfocus = () => {
    myinput.current.focus();
  }
  return (
    <>    <input type="text" ref={myinput}/>
    <br></br>
    <button onClick={inputfocus}>Click here</button>
    </>

  );
}

export default App;
