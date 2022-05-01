import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useItems } from "../hooks/useItems";
import "./Inventories.css";

const Inventories = () => {
  const [items] = useItems();
  const sixItems = items.slice(0, 6);
  const navigate = useNavigate();

  // this is the function which is connected to the button in the inventories and take you to the details of the items page
  const goToItemDetails = (id) => {
    navigate(`home/${id}`);
  }

  return (
    <div className="mb-5">
      <h1 className="mt-5 text-center">Inventories</h1>
      <div className="items container">
        {sixItems.map((item) => (
          <div className="single-item-inventories" key={item._id}>
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
              <p>Price: <span>$</span> {item.price} (Per KG)</p>
              <button onClick={()=>{goToItemDetails(item._id)}} className="update-btn-inventories">Update</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventories;
