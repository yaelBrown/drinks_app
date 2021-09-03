import { useState } from 'react';
import DrinksTable from './Components/DrinksTable';
import ShoppingList from './Components/ShoppingList';
import Recipe from './Components/Recipe';

import AppService from './Services/AppService';

import DrinkData from './Data/DrinksData';

import './App.css';

function App() {
  const initialState = {
    
  }
  
  const [state, setState] = useState(initialState)
  
    
  return (
    <div className="App">
      <div id="top">
        <h1>Drinks App</h1>
        <h3>Tables</h3>
        <DrinksTable/>
      </div>
      <div id="bottom">
        <div id="bottomLeft">
          <ShoppingList/>
        </div>
        <div id="bottomRight">
          <Recipe/>
        </div>
      </div>
    </div>
  );
}

export default App;
