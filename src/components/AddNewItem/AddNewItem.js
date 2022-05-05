import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useTheUser } from "../hooks/useTheUser";
import "./AddNewItem.css";

const AddNewItem = () => {
  const currentUser = useTheUser();
  const navigate = useNavigate();
  const addNewItem = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const supplier = e.target.supplierName.value;
    const img = e.target.image.value;
    const email = e.target.email.value;

    const allData = {
      name,
      description,
      price,
      quantity,
      supplier,
      img,
      email,
    };

    const url = "http://localhost:5000/fruits";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        
        const proceed = window.confirm(`Item Successfully Added! 
        Want to navigate to the 'Manage items' page?`);
        if(proceed){
          navigate("/manageItems");
        }
      });
  };
  

  return (
    <div className="ani-main">
      <h2 className="text-center mt-3 ani-heading">
        Fill out the form to add a new item
      </h2>
      <div className="container form-container-addNewItem">
        <form onSubmit={addNewItem}>
          <div className="form-container-top">
            <div className="input-wrapper-ani">
              <label className="label-ani">Product's Name</label>
              <br />
              <input
                className="input-box-ani"
                type="text"
                name="name"
                placeholder="Add item's name"
              ></input>
            </div>
            <div className="input-wrapper-ani">
              <label className="label-ani">Supplier</label>
              <br />
              <input
                className="input-box-ani"
                type="text"
                name="supplierName"
                placeholder="Add the supplier's name"
              ></input>
            </div>
            <div className="input-wrapper-ani">
              <label className="label-ani">Price</label>
              <br />
              <input
                className="input-box-ani"
                type="text"
                name="price"
                placeholder="Add a price"
              ></input>
            </div>

            <div className="input-wrapper-ani">
              <label className="label-ani">Quantity</label>
              <br />
              <input
                className="input-box-ani"
                type="text"
                name="quantity"
                placeholder="Add a quantity"
              ></input>
            </div>
            <div className="input-wrapper-ani">
              <label className="label-ani">Image URL</label>
              <br />
              <input
                className="input-box-ani"
                type="text"
                name="image"
                placeholder="Add an image URL"
              ></input>
            </div>
            <div className="input-wrapper-ani">
              <label className="label-ani">Email</label>
              <br />
              <input
                className="input-box-ani"
                type="email"
                name="email"
                placeholder="Add your email "
                value={currentUser?.email}
                disabled
              ></input>
            </div>
           
          </div>
          <div className="wrapper-bottom-ani mt-3">
          <div>
              <label className="label-ani">Description</label>
              <br/>
              <textarea
                className="textarea-ani"
                name="description"
                placeholder="Add an additional info"
              ></textarea>
            </div>
            <div className="div-for-btn-ani">
              <button className="btn-submit-ani"type="Submit">Add Item</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewItem;
