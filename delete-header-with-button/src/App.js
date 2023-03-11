import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component {
  constructor(p){
    super(p);
    this.state = {show: true};
  }
  deleteHeader = () => {
    this.setState({show: false});
  }
  render(){
    let myh;
    if (this.state.show) {
      myh = <Children/>;
    };
    return (
      <div>
        {myh}
        <button type='button' onClick={this.deleteHeader}>Delete</button>
      </div>
    )
  }
}

class Children extends React.Component{
componentDelete(){
  alert("Header is getting Deleted");
}
render(){
  return(
    <>    <h1>Hi There</h1>
    <h1>How are You Today</h1>
    </>

  )
}
}

export default App;
