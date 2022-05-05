import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./itemDetails.css";

const ItemDetails = () => {
  const { itemDetail } = useParams();
  const [itemInfo, setItemInfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/fruit/${itemDetail}`)
      .then((res) => res.json())
      .then((data) => {
        setItemInfo(data);
      });
  }, [itemInfo]);

  const reduceQuantity = () => {
    const quantity = parseInt(itemInfo.quantity) - 1;

    const updatedInfo = { quantity };
    const url = `http://localhost:5000/fruit/${itemDetail}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const restockItem = (e) => {
    e.preventDefault();
    if (parseInt(e.target.number.value) >= 1) {
      const quantity =
        parseInt(itemInfo.quantity) + parseInt(e.target.number.value);

      const updatedInfo = { quantity };
      const url = `http://localhost:5000/fruit/${itemDetail}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } else {
      alert("Input value must be above 0");
    }
  };
  return (
    <div className="item-details">
      <h2 className="text-center mt-3">Details of {itemInfo.name}</h2>
      <div className="container mt-3 mb-5 container-itemDetails">
        <div className="info-itemDetails">
          <div className="info-text-itemDetails">
            <p>
              <b>Fruit's Name: </b> {itemInfo.name}
            </p>
            <p>
              <b>Supplier: </b>
              {itemInfo.supplier}
            </p>
            <p>
              <b>Description: </b> {itemInfo.description}
            </p>
            <p>
              <b>Price: </b> $ {itemInfo.price} (Per KG)
            </p>
            <p>
              <b>Quantity: </b> {itemInfo.quantity} (KG)
            </p>
          </div>

          <div className="form-wrapper">
            <form onSubmit={restockItem}>
              <input
                className="input-number-itemDetails"
                type="number"
                name="number"
                id="number"
                placeholder="Restock Your Item"
              />
              <button className="button-number-itemDetails" type="submit">
                Restock
              </button>
            </form>
          </div>
          <button onClick={reduceQuantity} className="btn-itemDetails">
            Delivered
          </button>
        </div>
        <div className="img-itemDetails">
          <img style={{width: '100%', height: '100%'}} src={itemInfo.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
