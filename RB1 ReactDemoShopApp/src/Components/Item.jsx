import React, { useState } from "react";
import "./item.css";

function Item({name}) {
  // const name = "Namaste Bharat"
  const [itemName, setItemName] = useState(name);

  function clickHandler() {
    setItemName("Krishna");
    console.log("clicked");
  }
  return (
    <div>
      <h1 className="Bharat" onClick={clickHandler}>
        {itemName}
      </h1>
      {/* <h1>{name}</h1> */}
    </div>
  );
}

export default Item;
