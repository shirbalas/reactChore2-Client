import React from "react";
import "./NewShoppingItem.css";
import ShoppingForm from "./ShoppingForm";
const NewShoppingItem = (props) => {
  const saveShoppingDataHandler = (enteredShoppingData) => {
    const shoppingData = {
      ...enteredShoppingData,
      id: Math.random().toString(),
    };
    console.log(shoppingData);
    props.onAddShopping(shoppingData);
  };

  return (
    <div className="new-shopping-item">
      <ShoppingForm onSaveShoppingData={saveShoppingDataHandler}></ShoppingForm>
    </div>
  );
};

export default NewShoppingItem;
