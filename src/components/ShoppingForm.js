import React, { useState } from "react";

import "./ShoppingForm.css";

const ShoppingForm = (props) => {
  const [enterdProductName, setEnteredProductName] = useState("");
  const [enterdPrice, setEnteredPrice] = useState("");
  const [enterdPhotoURI, setEnteredPhotoURI] = useState("");

  // if we want only one useState for everybody - the deffrence is that we now set all 3 all the time
  //if we will set object for one - the other will be delete
  // useState({
  //enterdTitle:'',
  //enterdAmount:'',
  //enterdDate: ''
  //});

  const productNameChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredProductName(event.target.value);

    //setUserInput({
    //...userInput,
    //enterdTitle: event.target.value,
    //});
  };
  const PriceChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredPrice(event.target.value);
  };
  const PhotoURIChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredPhotoURI(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // becouse we dont want the page to reload
    const shoppingData = {
      // creating object
      productName: enterdProductName,
      price: enterdPrice,
      photoURI: enterdPhotoURI,
    };

    console.log(shoppingData);
    props.onSaveShoppingData(shoppingData);
    setEnteredProductName("");
    setEnteredPrice("");
    setEnteredPhotoURI("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-shopping__controls">
        <div className="new-shopping__control">
          <label>Product Name</label>
          <input
            type="text"
            value={enterdProductName}
            onChange={productNameChangeHandler}
          />
        </div>
        <div className="new-shopping__control">
          <label>Price</label>
          <input
            type="number"
            value={enterdPrice}
            min="0.01"
            step="0.01"
            onChange={PriceChangeHandler}
          />
        </div>
        <div className="new-shopping__control">
          <label>photoURI</label>
          <input
            type="text"
            value={enterdPhotoURI}
            onChange={PhotoURIChangeHandler}
          />
        </div>
      </div>
      <div className="new-shopping__actions">
        <button type="submit">Add shopping Item</button>
      </div>
    </form>
  );
};

export default ShoppingForm;
