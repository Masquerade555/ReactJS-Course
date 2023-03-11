import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [name, setName] = useState("Mira");
  return (
    <>
    <h1>Welcome User</h1>
    <h3>Your Name is {name}</h3>

    <button type='button' onClick={()=> setName("John")}>John</button>
    <button type='button' onClick={()=> setName("Zeke")}>Zeke</button>
    <button type='button' onClick={()=> setName("Alice")}>Alice</button>
    <button type='button' onClick={()=> setName("Jill")}>Jill</button>
    <button type='button' onClick={()=> setName("Nicki")}>Nicki</button>
    </>
    
  );
}

export default App;
