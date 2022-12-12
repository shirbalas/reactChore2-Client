import ShoppingItem from "./ShoppingItem";

function ShoppingItems(props) {
  return (
    <>
      {props.items.map((shoppingItem) => (
        <ShoppingItem
          key={shoppingItem.id}
          productName={shoppingItem.productName}
          price={shoppingItem.price}
          photoURI={shoppingItem.photoURI}
        />
      ))}
    </>
  );
}

export default ShoppingItems;
