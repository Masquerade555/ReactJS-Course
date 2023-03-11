import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Breadcrumb, BreadcrumbItem, Button, Card } from 'react-bootstrap';

function App() {
  return (
    
    <div className='App'>
      <header className='App-header'>
        <Card style={{color: 'gold', backgroundColor: 'black'}}>
          <Card.Title>This is a Title</Card.Title>
          <Card.Text>This is a text</Card.Text>
        </Card>
        <Button>This is a button</Button>
        <Alert>This is a alert box</Alert>
        <Breadcrumb>
        <BreadcrumbItem>This is a breadcrumb item</BreadcrumbItem>
        <BreadcrumbItem active>This is active breadcrumb item</BreadcrumbItem>
        </Breadcrumb>
      </header>
    </div>
  );
}

export default App;
