import "./ShoppingItem.css";
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button"
// import Typography from "@mui/material/Typography";
import { useState } from "react";

function ShoppingItem(props) {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {setOpen(true);};
  const handleClose = () => {setOpen(false);};

  return (
    <div className="shopping_item" onClick={handleOpen}>
      <div className="expense_item_container">
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box className="modal-box">
          <Typography className="modal-modal-title" variant="h6" component="h2">
            {props.productName}
          </Typography>
          <Typography className="modal-modal-description" sx={{ mt: 2 }}>
            store : {props.store}
          </Typography>
          <Typography className="modal-modal-description" sx={{ mt: 2 , mb : 2 }}>
            product description : {props.desc}
          </Typography>
          <img src={require(`../assets/${props.pic}`)} width="100" height="100"></img>
        </Box>
      </Modal> */}
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
        src={require(`../assets/${props.productPhoto}`)}
      ></img>
    </div>
  );
}

export default ShoppingItem;
