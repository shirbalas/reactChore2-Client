import React, { useState } from "react";
import NewShoppingItem from "./components/NewShoppingItem";
import ShoppingItems from "./components/ShoppingItems";
import "./App.css";

const DUMMY_PROFUCTS = [
  {
    productName: "soap kit",
    id: "e2",
    title: "NewTV",
    price: 799.49,
    photoURI: "product1.jpeg",
  },
  {
    productName: "hands soap",
    id: "e3",
    title: "Car ins",
    price: 294.89,
    photoURI: "product2.jpeg",
  },
  {
    productName: "comb",
    id: "e4",
    title: "New Desk",
    price: 450,
    photoURI: "product3.jpeg",
  },
  {
    productName: "shampoo",
    id: "e5",
    title: "New Desk",
    price: 450,
    photoURI: "product4.jpeg",
  },
];

const App = () => {
  const [products, setProducts] = useState(DUMMY_PROFUCTS);

  const addProductsHandler = (product) => {
    console.log("im in APP.js");
    console.log(product);

    setProducts((prevProduct) => {
      return [product, ...prevProduct];
    });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>shopping List:</h1>
      </div>
      <NewShoppingItem onAddShopping={addProductsHandler} />
      <ShoppingItems items={products} />
    </div>
  );
};
export default App;
