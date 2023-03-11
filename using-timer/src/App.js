import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component {
  constructor(p){
    super(p);
    this.state = {name: "John"};
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({name: "John Wick"})
    }, 1000)
  }

  componentDidUpdate(){
    document.getElementById("mysection").innerHTML = 
    "This name is from the movie john wick";
  }

  render(){
    return (
      <div>
      <h1>My Name is {this.state.name}</h1>
      <div id='mysection'></div>
      </div>
    );
  }
}

export default App;
