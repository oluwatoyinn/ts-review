import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import ShoppingList from "./components/shopping/ShoppingList";
import { SomeData } from "./utils/SomeData";
import ProductProps from './models/shoppingItems';

// import { counterProvider } from "./context/CounterContext";
// import { initialState } from "./context/CounterContext";

function App() {
  const [items, setItems] = useState<ProductProps[]>(SomeData);
  return (
    <div className="">
      <p>Testing useReducer Typescript</p>
      <Counter />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
