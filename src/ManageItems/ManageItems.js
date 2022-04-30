import React from "react";
import { Link } from "react-router-dom";
import { useItems } from "../components/hooks/useItems";
import "./mangeItems.css";

const ManageItems = () => {
    const [items, setItems] = useItems();


  return (
    <div>
      <h1 className="text-center mt-3 mb-5">Manage Items</h1>
      <div className="items container">
        {items.map((item) => (
          <div className="single-item" key={item._id}>
            <img style={{ height: 250, width: 250 }} src={item.img} alt="" />
            <h2>{item.name}</h2>
            <p>Supplier: {item.supplier}</p>
            <p>{item.description}</p>
            <div className="single-item-bottom">
              <p>Quantity: {item.quantity} KG</p>
              <p>Price: {item.price} (Per KG)</p>
              <Link to="/">Update</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageItems;
