import React from "react";
import { useNavigate } from "react-router-dom";
import { useItems } from "../hooks/useItems";
import "./Inventories.css";

const Inventories = () => {
  const [items] = useItems();
  const sixItems = items.slice(0, 6);
  const navigate = useNavigate();

  // this is the function which is connected to the button in the inventories and take you to the details of the items page
  const goToItemDetails = (id) => {
    navigate(`home/${id}`);
  };

  return (
    <div className="mb-5">
      <h1 className="mt-5 text-center">Inventories</h1>
      <div className="items container">
        {sixItems.map((item) => (
          <div className="single-item-inventories" key={item._id}>
            <img style={{ height: 200, width: 250 }} src={item.img} alt="" />
            

            <div className="price-quantity-name">

            <div className="name-div">
              <p className="item-name-p">Name</p>
              <p className="item-value-p">{item.name}</p>
            </div>

              <div className="price-div">
                  <p className="item-name-p">Price</p>
                  <p className="item-value-p">$ {item.price} (Per KG)</p>
              </div>
              <div className="quantity-div">
              <p className="item-name-p">Quantity</p>
                  <p className="item-value-p">{item.quantity} KG</p>
              </div>
            </div>

            <div className="single-item-top">
              <hr/>
              <p className="text" style={{textAlign: 'center'}}>{item.description} </p>
            </div>

            <div className="single-item-bottom">
              <button
                onClick={() => {
                  goToItemDetails(item._id);
                }}
                className="update-btn-inventories"
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventories;
