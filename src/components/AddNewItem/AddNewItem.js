import React, { useState } from "react";
import { useMyOwnAlert } from "../hooks/useMyOwnAlert";
import { useNavigate } from "react-router-dom";
import { useTheUser } from "../hooks/useTheUser";
import "./AddNewItem.css";
import { Confirm } from "react-st-modal";

const AddNewItem = () => {
  

  const currentUser = useTheUser();
  const navigate = useNavigate();
  const {showingAlert} = useMyOwnAlert();
  const addNewItem = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    const supplier = e.target.supplierName.value;
    const img = e.target.image.value;
    const email = e.target.email.value;
    const sold = null;

    const allData = {
      name,
      description,
      price,
      quantity,
      supplier,
      img,
      email,
      sold,
    };
    const refreshForm = () => {
      document.getElementById("name").value = "";
      document.getElementById("price").value = "";
      document.getElementById("supplier").value = "";
      document.getElementById("quantity").value = "";
      document.getElementById("description").value = "";
      document.getElementById("image").value = "";
    };

    const confirmation = async () => {
      const result = await Confirm('Would you like to visit "My Items"?', 
        'Item Successfully added!');
      
      if (result) {
        navigate('/myItems');
      }
    }
    

    const sendingData = () => {
      const url = "https://serene-bastion-77900.herokuapp.com/fruits";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allData),
      })
        .then((res) => res.json())
        .then((data) => {
          refreshForm();
          confirmation();
        });
    };
    if(price >= 1 && quantity >= 1){
      sendingData();
    }
    else if(price <= 0 || quantity <= 0){
      showingAlert();
    }
    
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
                id="name"
                className="input-box-ani"
                type="text"
                name="name"
                placeholder="Add item's name"
                required
              ></input>
            </div>
            <div className="input-wrapper-ani">
              <label className="label-ani">Supplier</label>
              <br />
              <input
                id="supplier"
                className="input-box-ani"
                type="text"
                name="supplierName"
                placeholder="Add the supplier's name"
                required
              ></input>
            </div>
            <div className="input-wrapper-ani">
              <label className="label-ani">Price</label>
              <br />
              <input
                id="price"
                className="input-box-ani"
                type="number"
                name="price"
                placeholder="Add a price"
                required
              ></input>
              
            </div>

            <div className="input-wrapper-ani">
              <label className="label-ani">Quantity</label>
              <br />
              <input
                id="quantity"
                className="input-box-ani"
                type="number"
                name="quantity"
                placeholder="Add a quantity"
                required
              ></input>
              
            </div>
            <div className="input-wrapper-ani">
              <label className="label-ani">Image URL</label>
              <br />
              <input
                id="image"
                className="input-box-ani"
                type="text"
                name="image"
                placeholder="Add an image URL"
                required
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
              <br />
              <textarea
                id="description"
                className="textarea-ani"
                name="description"
                placeholder="Add an additional info"
                required
              ></textarea>
            </div>
            <div className="div-for-btn-ani">
              <button className="btn-submit-ani" type="Submit">
                Add Item
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewItem;
