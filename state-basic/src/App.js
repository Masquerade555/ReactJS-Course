import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [phone, setphone] = useState({
    brand: "Samsung",
    model: "S23 Ultra",
    color: "Black"
  });
  return (
    <>
    <h1>My phone is {phone.brand}</h1>
    <h2>It is a {phone.model} in {phone.color} colour</h2>
    </>
  );
}

export default App;
