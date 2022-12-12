import "./ShoppingItem.css";
import { useState } from "react";

function ShoppingItem(props) {
  console.log("props: " + props.photoURI);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="shopping_item" onClick={handleOpen}>
      <div className="shopping_item_container">
        <h2 className="shopping_item__description ">
          <span>Product Name:</span> {props.productName}
        </h2>
        <div className="shopping_item__price">
          <span>Price: </span>
          {props.price}
        </div>
      </div>
      <img
        className="shopping_item__image"
        src={require(`../assets/${props.photoURI}`)}
      ></img>
    </div>
  );
}

export default ShoppingItem;
