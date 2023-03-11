import logo from './logo.svg';
import './App.css';

function App(brands) {
  var trucks = brands.trucks;
  return (
    <>    <h1>Brands of Trucks</h1>
    {trucks.length > 0 && 
    <h2>
    You have printed {trucks.length} trucks of different brands</h2>
  }
  </>

  );
}


export default App;
