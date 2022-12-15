import "./ShoppingCartItem.css";
import Button from "@mui/material/Button";

function ShoppingCartItem(props) {
  const deleteFromShoppingCart = () => {
    let item = {
      productName: props?.productName,
      price: props?.price,
      photoURI: props?.photoURI,
      id: props.id,
      store: props?.store,
      desc: props?.desc,
    };
    props.deleteFromShoppingCart(item);
  };

  return (
    <div className="cartItem-container">
      <div>
        <Button variant="contained" onClick={deleteFromShoppingCart}>
          Delete from Cart
        </Button>
      </div>
      <div className="shopping_item">
        <div className="shopping_item_container">
          <h2 className="shopping_item__description ">
            <span>Product Name:</span> {props.item.productName}
          </h2>
          <div className="shopping_item__price">
            <span>Price: </span>
            {props.item.price}
          </div>
        </div>
        <img
          className="shopping_item__image"
          src={require(`../assets/${props.item.photoURI}`)}
        ></img>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
