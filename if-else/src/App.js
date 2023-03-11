import logo from './logo.svg';
import './App.css';

function Female(){
  return <h1>You will be shown as a Female to other users</h1>
}
function Male(){
  return <h1>You will be shown as a male to other users</h1>
}

function App(g) {
  const gender = g.gender;
  if (gender) {
    return < Male/>
  } else {
    return <Female/>
  }
  
}

export default App;
