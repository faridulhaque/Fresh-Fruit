import React from "react";
import { Link } from "react-router-dom";
import { useItems } from "../hooks/useItems";
import "./Inventories.css";

const Inventories = () => {
  const [items] = useItems();
  const sixItems = items.slice(0, 6);

  return (
    <div className="mb-5">
      <h1 className="mt-5 text-center">Inventories</h1>
      <div className="items container">
        {sixItems.map((item) => (
          <div className="single-item-inventories">
            <img style={{ height: 200, width: 220 }} src={item.img} alt="" />
            <div className="single-item-top">
            <h2 className="mt-3">{item.name}</h2>
            <p className="text">
              Supplier: <b>{item.supplier}</b>
            </p>
            <p className="text">{item.description} </p>
            </div>
            
            <div className="single-item-bottom">
              <p>Quantity: {item.quantity} KG</p>
              <p>Price: {item.price} (Per KG)</p>
              <Link className="update-btn-inventories" to="/">
                Update
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventories;
