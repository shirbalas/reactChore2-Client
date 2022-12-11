import ShoppingItem from "./components/ShoppingItem";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [shoppingItems, setItems] = useState('');
  useEffect(() =>{
    const request = new Request("http://localhost:3005/all", {
      method: 'GET',
      // headers: myHeaders,
      mode: 'no-cors',
      cache: 'default',
    });

    fetch(request)
      .then((Response)=>Response.json())
      .then((data)=>setItems(data))
      .catch((error)=> console.log(error));
    console.log(shoppingItems);
  }, [shoppingItems]);
  const shoppingList = [
    { productName: "soap kit", price: 30, productPhoto: "product1.jpeg", store:"laline", desc:"a bunch of soaps", pic:"prod1_other.jpeg" },
    { productName: "hands soap", price: 20, productPhoto: "product2.jpeg", store:"lydl", desc:"product you use to wash your hand", pic:"prod2_other.jpeg" },
    { productName: "comb", price: 10, productPhoto: "product3.jpeg", store:"wallmart", desc:"a life saver on a bad hair day", pic:"prod3_other.jpeg" },
    { productName: "shampoo", price: 50, productPhoto: "product4.jpeg", store:"giant", desc:"just a standard hair product", pic:"prod4_other.jpeg" },
  ];
  return (
    <div className="container">
      <div className="header">
        <h1>shopping List:</h1>
      </div>
      {shoppingList.map((item, index) => {
        return (
          <ShoppingItem
            key={index}
            productName={item.productName}
            price={item.price}
            productPhoto={item.productPhoto}
            store={item.store}
            desc={item.desc}
            pic={item.pic}
          ></ShoppingItem>
        );
      })}
    </div>
  );
}

export default App;
