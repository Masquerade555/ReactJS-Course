import logo from './logo.svg';
import './App.css';

function Fruits(params) {
  return <li>{params.fruit}</li>
}
function App() {
  const fruits =[
    {id: 1, fruit: "Banana"},
    {id: 2, fruit: "Peach"},
    {id: 3, fruit: "Watermelon"},
    {id: 4, fruit: "Apple"}
  ]
  return (
    <>
    <h1>The fruits in the basket are</h1>

    <ul>
      {fruits.map((fruits) => <Fruits key={fruits.id} fruit={fruits.fruit}></Fruits>)}
    </ul>
    </>
  );
}

export default App;
