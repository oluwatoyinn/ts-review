import React from "react";
import ProductProps from "../../models/shoppingItems";

interface ProductPropsItem {
  items: ProductProps[];
}

const ShoppingList = ({ items }: ProductPropsItem) => {
  return (
    <>
      <div>ShoppingList</div>
      <ul>
        {items?.map((item) => (
          <li key={item.id}>
            {item.product} - {item.quantity}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShoppingList;
