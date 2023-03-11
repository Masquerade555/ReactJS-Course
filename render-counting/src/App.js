import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [val, setval] = useState("");
  const counting = useRef(0);

  useEffect(() => {
    counting.current = counting.current +1;
  });
  return (
    <>
    <input type="text" value={val} onChange={(e) => setval(e.target.value)}/>

    <h1>Rendering Count: {counting.current}</h1>
    </>
  );
}

export default App;
