import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import "./MyItems.css";
import { signOut, onAuthStateChanged } from "firebase/auth";

import { auth } from "../../Firebase/firebase.init";

const MyItems = () => {
  const [currentUser, setCurrentUser] = useState({});
  const {email} = currentUser;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser({});
      }
    });
  }, []);

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myItems?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [items]);

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
    <div className="myItems-container container">
      <h2 className="text-center">My Items</h2>
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
                  <th className="bg-info" scope="col">
                    {item._id}
                  </th>
                  <th scope="col">{item.name}</th>
                  <th scope="col">{item.supplier}</th>
                  <th scope="col">${item.price + " "}(Per KG)</th>
                  <th scope="col">{item.quantity + " "} KG</th>
                  
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
  );
};

export default MyItems;
