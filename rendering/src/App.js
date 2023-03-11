import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect } from 'react';

function App() {
  const [val, setval]= useState("");
  const previousVal = useRef("");

  useEffect(() => {
    previousVal.current = val;
  },
  [val]);
  return (
    <>
    <input type="text" value={val} onChange={(v) => setval(v.target.value)}/>

    <h1>Current Value: {val}</h1>
    <h1>Previous Value: {previousVal.current}</h1>
    </>
    
  );
}

export default App;
