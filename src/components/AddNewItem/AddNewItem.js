import React from "react";
import "./AddNewItem.css";

const AddNewItem = () => {
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
      .then((data) => {});
  };
  return (
    <div>
      <h2 className="text-center mt-3">Fill out the form to add a new item</h2>
      <div className="container form-container-addNewItem">
        <form onSubmit={addNewItem}>
          <div className="form-container-top">
            <div className="input-wrapper">
              <input className="input-box"
                type="text"
                name="name"
                placeholder="Add item's name"
              ></input>
            </div>
            <div className="input-wrapper">
              <input className="input-box"
                type="text"
                name="supplierName"
                placeholder="Add the supplier's name"
              ></input>
            </div>
            <div className="input-wrapper">
              <input className="input-box" type="text" name="price" placeholder="Add a price"></input>
            </div>
          </div>
          <div className="form-container-bottom">
            <div className="input-wrapper">
              <input className="input-box"
                type="text"
                name="quantity"
                placeholder="Add a quantity"
              ></input>
            </div>
            <div className="input-wrapper">
              <input className="input-box"
                type="email"
                name="email"
                placeholder="Add your email "
              ></input>
            </div>

            <div className="input-wrapper">
              <input className="input-box"
                type="text"
                name="image"
                placeholder="Add an image URL"
              ></input>
            </div>
          </div>

          <div className='input-wrapper-last-child container'>
            <input className="input-box-last-child"
              type="text"
              name="description"
              placeholder="Add an additional info"
            ></input>
          </div>
            <br/>
          <button className="form-btn-submit" type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewItem;
