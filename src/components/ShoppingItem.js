import "./ShoppingItem.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function ShoppingItem(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open);
  };
  const addToCart = () => {
    let item = {
      productName: props?.productName,
      price: props?.price,
      photoURI: props?.photoURI,
      id: props?.id,
      store: props?.store,
      desc: props?.desc,
    };
    props.addToCart(item);
    handleClose();
  };

  return (
    <div className="shopping_item" onClick={handleOpen}>
      <div className="shopping_item_container">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal-box">
            <Typography
              className="modal-modal-title"
              variant="h6"
              component="h2"
            >
              {props.productName}
            </Typography>
            <Typography className="modal-modal-description" sx={{ mt: 2 }}>
              store : {props.store || "jfbhfsfjsbf"}
            </Typography>
            <Typography
              className="modal-modal-description"
              sx={{ mt: 2, mb: 2 }}
            >
              product description :{" "}
              {props.desc || "fmsbhfbvbjbjsbfhwgvehawvfhkjawebfjh"}
            </Typography>
            <div className="add_to_cart">
              <img
                src={require(`../assets/${props.photoURI}`)}
                width="100"
                height="100"
              ></img>
              <Button variant="contained" onClick={addToCart}>
                Add To Cart
              </Button>
            </div>
          </Box>
        </Modal>
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
