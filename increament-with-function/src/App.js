import logo from './logo.svg';
import './App.css';
import { useMemo, useState} from "react";

function App() {

  const [numbers, setnumbers] = useState(0);
  const calculator = useMemo(() => autocalculator(numbers), [numbers]);

  const increase = () => {
    setnumbers((c) => c+1);
  }
  return (
    <div>
      <h3>
      {numbers}</h3>
      <button onClick={increase}>Add</button>
      <h2>Result</h2>
      <h1>{calculator}</h1>
    </div>
  );
}

const autocalculator = (num) => {
  for(let i = 0; i < 50; i++)
  {
    num += 1;
  }
  return num;
}

export default App;
