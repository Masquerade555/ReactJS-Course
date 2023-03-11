import logo from './logo.svg';
import './App.css';

const Eader = () => {
  return(
    <h1>Welcome to my website</h1>
  )
}

const Ooter = () => {
  return(
    <h4>Copyrights deserved to this website</h4>
  )
}

const Ection = () => {
  return(
    <>
    <br></br>
    <h1>Content of the website</h1>
    <br></br>
    </>
  )
}

function App() {
  return (
    <>
    <Eader/>
    <Ection/>
    <Ooter/>
    </>
  );
}


export default App;
