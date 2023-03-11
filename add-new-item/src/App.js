import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [items, setitems] = useState([]);
  const additem = () => {
    setitems((i) => [...i, "New Item"]);
  };
  return (
    <div>
      {items.map((myitem, index) =>{
        return <h4 key={index} > {myitem}</h4>;
      })}
      <button onClick={additem}>Add item</button>
    </div>
  );
}

export default App;
