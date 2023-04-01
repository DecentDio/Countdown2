import {useState} from 'react';

const menuItems = {
    "breakfast": [
      {"food": "pancakes", "price": 5.00, "vegetarian": true},
      {"food": "waffles", "price": 5.00, "vegetarian": true},
      {"food": "orange juice", "price": 2.00, "vegetarian": true}
    ],
    "lunch": [
      {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
      {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
      {"food": "hamburger", "price": 8.00, "vegetarian": false}
    ],
    "dinner": [
      {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
      {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
      {"food": "chili", "price": 8.00, "vegetarian": false}
    ]};

function App() {
  console.log(menuItems.map(({key,value}) => ({})));
  return (
    <div className="App">
      <h1>Menu</h1>
      <button>Show Only Vegetarian</button>
      <h1>Breakfast</h1>
      <FoodRowBreakfast menu={menuItems}/>
      <h1>Lunch</h1>
      <h1>Dinner</h1>
    </div>
  );
}

function FoodRowBreakfast({menu}){
  return(
    <div>
      <p>{menu.breakfast.food}</p>
      <p>{menu.breakfast.price}</p>
    </div>
  );
}
export default App;
