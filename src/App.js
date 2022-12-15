import React, { useState } from "react";
import ShoppingItems from "./components/ShoppingItems";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Header from "./components/Header";

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const deleteItemFromShoppingCart = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    setTotalPrice((totalPrice) => totalPrice - item.price);
    setCart((cart) => [...cart.filter((item) => item.id !== itemId)]);
  };
  const emptyShoppingCart = () => {
    setCart([]);
  };
  const addToCart = (item) => {
    const existItem = cart.find((i) => i.id === item.id);
    if (!existItem) {
      let totalPrice = 0;
      cart.forEach((cartItem) => {
        totalPrice += cartItem.price;
      });
      totalPrice += item.price;
      setCart((cart) => [...cart, item]);
      setTotalPrice(totalPrice);
      console.log("cart: " + cart);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="products-container">
          <Routes>
            <Route path="/" element={<ShoppingItems addToCart={addToCart} />} />
            <Route
              path="/cart"
              element={
                <ShoppingCart
                  cart={cart}
                  totalPrice={totalPrice}
                  emptyShoppingCart={emptyShoppingCart}
                  deleteItemFromShoppingCart={deleteItemFromShoppingCart}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
