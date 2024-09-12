import './App.css';
import { Menu } from './Components/Menu/Menu';

// test menu
const test_menu = [
  {
      name:"Mocha",
      desc:" Coffee with milk",
      price: 100,
      index:1
  },
  {
      name:"Latte",
      desc:" Coffee with milk foam",
      price: 120,
      index: 2
  },
  {
      name:"Black",
      desc:" Coffee without milk",
      price: 80,
      index: 3
  }
];



function App() {
  return (
    <div className="App">
        <Menu menu_data={test_menu}/>
    </div>
  );
}

export default App;
