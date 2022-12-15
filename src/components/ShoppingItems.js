import ShoppingItem from "./ShoppingItem";
import { useState, useEffect } from "react";
import api from "../config/api";

function ShoppingItems(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api
      .get("products/all")
      .then(({ data }) => {
        let x = data.products;
        setItems({ x });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderItems = () => {
    return (
      items?.x?.length &&
      items?.x?.map((item, index) => {
        return (
          <ShoppingItem
            key={index}
            id={item._id}
            productName={item.productName}
            price={item.price}
            photoURI={item.photoURI}
            store={item.store}
            desc={item.desc}
            addToCart={props.addToCart}
          />
        );
      })
    );
  };

  return <div>{items?.x?.length && renderItems()}</div>;
}

export default ShoppingItems;
