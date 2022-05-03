import React from "react";
import { useItems } from "../hooks/useItems";

import "./mangeItems.css";

const ManageItems = () => {
    const [items, setItems] = useItems();
    const deleteTheItem =(id) =>{
      const url = `http://localhost:5000/fruit/${id}`;
      fetch(url, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data =>{

      })
    }


  return (
    <div>
      <h1 className="text-center mt-3 mb-5">Manage Items</h1>
      <div className="container">
        {items.map((item) => (
          <div className="card mb-5 m-auto" style={{maxWidth: 600}} key={item._id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={item.img} className="img-fluid rounded-start" alt="..." style={{height: '100%'}}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>

                <p className="card-text">{item._id}</p>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Price: <small>{item.price}</small></p>
                <p className="card-text">Quantity: <small>{item.quantity}</small></p>
                <p className="card-text">Supplier: <small>{item.supplier}</small></p>
                
                
                <button onClick={() =>deleteTheItem(item._id)} className="btn-dlt-mangeItems">Delete Item </button>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default ManageItems;