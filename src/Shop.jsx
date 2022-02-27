import React, { useState, useEffect } from "react";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => console.log(json));

    const items = await data.json();
    console.log(items.items);
    setItems(data.items);
  };
  return (
    <div>
      {items.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </div>
  );
}

export default Shop;