import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from "react";

function App() {
  const [number, setnumber] = useState(0);
  const [add, setadd] = useState(0);
  const [div, setdiv] = useState(0);
  const [sub, setsub] = useState(0);
  const [mul, setmul] = useState(0);


  useEffect(() =>{
    setadd(() => number + 2);
    setsub(() => number - 2);
    setmul(() => number * 2);
    setdiv(() => number / 2);
  }, [number]);


  return (
  <>
  <h3>{number}</h3>
  <button onClick={() => setnumber((n) => n+1)}>Add 1</button>
  <h1>Addition by 2 = {add}</h1>
  <h1>Substraction by 2 = {sub}</h1>
  <h1>Multiplication by 2 = {mul}</h1>
  <h1>Divison by 2 = {div}</h1>
  </>  
  );
}

export default App;
