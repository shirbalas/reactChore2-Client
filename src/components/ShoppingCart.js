import React, { useState, useEffect } from "react";
import UserDetails from "./UserDetails";
import Box from "@mui/material/Box";
import ShoppingCartItem from "./ShoppingCartItem";
import api from "../config/api";
import Swal from "sweetalert2";

const ShoppingCart = (props) => {
  const renderCartItems = () => {
    return props.cart.map((item, index) => {
      return (
        <ShoppingCartItem
          key={index}
          item={item}
          deleteFromShoppingCart={() => deleteItemFromShoppingCart(item.id)}
        />
      );
    });
  };

  const handleSubmit = (data) => {
    if (
      (data.email === "" || data.firstName === "" || data.lastName === "",
      data.address === "")
    ) {
      Swal.fire(
        "failed to send!",
        "you need to fill all the above!",
        "warning"
      );
    } else {
      const SendData = {
        ...data,
        cart: {
          totalQty: props.cart?.length,
          totalPrice: props?.totalPrice,
          items: props.cart?.map((item) => {
            return {
              productId: item.id,
              qty: 1,
              price: item.price,
              title: item.title,
            };
          }),
        },
      };
      api
        .post("order/new", SendData)
        .then((res) => {
          Swal.fire(
            "Good job!",
            "your order has been uploaded to mongodb successfully!",
            "success"
          );

          props.emptyShoppingCart();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const deleteItemFromShoppingCart = (itemId) => {
    props.deleteItemFromShoppingCart(itemId);
  };

  return (
    <>
      {props.cart?.length ? (
        <>
          <UserDetails
            handleSubmit={handleSubmit}
            totalPrice={props.totalPrice}
          />
          {renderCartItems()}
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>cart is empty</h1>
        </Box>
      )}
    </>
  );
};

export default ShoppingCart;
