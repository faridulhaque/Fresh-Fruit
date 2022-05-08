import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import "./MyItems.css";
import { signOut, onAuthStateChanged } from "firebase/auth";

import { auth } from "../../Firebase/firebase.init";
import { Prompt } from "react-st-modal";

const MyItems = () => {
  const [currentUser, setCurrentUser] = useState({});
  const {email} = currentUser;
  const deleteTheItem = async (receivedId) => {
    const insertedId = await Prompt('Please copy the ID from the table and paste here to confirm deletion', {
      isRequired: true,
      
    });

    if (insertedId === receivedId) {
      const url = `https://serene-bastion-77900.herokuapp.com/fruit/${receivedId}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Item Successfully Deleted", { id: "itemDel" });
        });
    }
    else {
          toast.error("ID did not match", { id: "itemDelNot" });
        }
  }
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
    fetch(`https://serene-bastion-77900.herokuapp.com/myItems?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [items]);

  // const deleteTheItem = (id) => {
  //   const confirmation = window.prompt(
  //     "Please copy the ID from the table and paste here to confirm deletion"
  //   );
  //   if (confirmation === id) {
  //     const url = `https://serene-bastion-77900.herokuapp.com/fruit/${id}`;
  //     fetch(url, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         toast.success("Item Successfully Deleted", { id: "itemDel" });
  //       });
  //   } else {
  //     toast.error("ID did not match", { id: "itemDelNot" });
  //   }
  // };
  return (
    <div className="myItems-container container">
      <h2 className="text-center mt-sm-5">My Items</h2>
      <table className="table mt-5">
        <thead>
          <tr>
            <th className="" scope="col">ID</th>
            <th className="" scope="col">Name</th>
            <th className="" scope="col">Supplier</th>
            <th className="" scope="col">Price</th>
            <th className="" scope="col">Quantity</th>
            
            <th className="" scope="col"> Delete</th>
          </tr>
        </thead>
        <tbody>
              {items.map((item) => (
                <tr key={item._id}>
                  <th className="bg-light" scope="col">
                    {item._id}
                  </th>
                  <th className="bg-info" scope="col">{item.name}</th>
                  <th className="bg-primary" scope="col">{item.supplier}</th>
                  <th className="bg-info" scope="col">${item.price + " "}(Per KG)</th>
                  <th className="bg-primary" scope="col">{item.quantity + " "} KG</th>
                  
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
