import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    alert("Your name is " +name.valueOf() +" and your age is "+age.valueOf() + " and your gender is " + gender.valueOf());
  }

  return (
    <form onSubmit={formSubmit}>
      <label>Enter Your Name</label>
      <input type="text" value={name} onChange={(e) => setname(e.target.value)}/>
      <label>Enter Your Age</label>
      <input type="number" value={age} onChange={(e) => setage(e.target.value)}/>
      <label>Enter Your Gender</label>
      <input type="text" value={gender} onChange={(e) => setgender(e.target.value)}/>

      <input type="submit"/>
    </form>
   

   
    );
}
  

export default App;
