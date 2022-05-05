import React, { useState } from "react";

import { useItems } from "../hooks/useItems";

import "./mangeItems.css";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const ManageItems = () => {
  const navigate = useNavigate();
  const [items, setItems, loading] = useItems();

  const takeMeToAddNewItem = () =>{
    navigate('/addNewItem');
  }

  const editTheItem = (id) =>{
    navigate(`/home/${id}`)
  }

  const deleteTheItem = (id) => {
    const confirmation = window.prompt(
      "Please copy the ID from the table and paste here to confirm deletion"
    );

    if (confirmation === id) {
      const url = `http://localhost:5000/fruit/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Item Successfully Deleted", { id: "itemDel" });
        });
    } else {
      toast.error("ID did not match", { id: "itemDelNot" });
    }
  };

  return (
    <div className="manage-item">
      <div className="manage-loading">
      {
        loading && <ClipLoader color={'red'} loading={loading} size={100} />
      }
      </div>
      
      <h1 className="text-center mt-3 mb-5">Manage Items</h1>
      
      <div className="container">
      <button onClick={takeMeToAddNewItem} className="btn-manageItem-toAddNewItem">Add New Item </button>
      <div>
      <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Supplier</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col"> Edit</th>
              <th scope="col"> Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <th scope="col">{item._id}</th>
                <th scope="col">{item.name}</th>
                <th scope="col">{item.supplier}</th>
                <th scope="col">${item.price + " "}(Per KG)</th>
                <th scope="col">{item.quantity + " "} KG</th>
                <th scope="col">
                  <i onClick={()=>editTheItem(item._id)} className="fa-solid fa-pen-to-square" title="Edit"></i>
                </th>
                <th scope="col">
                  <i
                    onClick={() => deleteTheItem(item._id)}
                    className="fa-solid fa-ban"
                    title="Delete"
                  ></i>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        
      </div>
    </div>
  );
};

export default ManageItems;
