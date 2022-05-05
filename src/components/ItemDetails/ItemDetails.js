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
    const sold = parseInt(itemInfo.quantity) +1;

    const updatedInfo = { quantity, sold };
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
      {/* <h2 className="text-center mt-3">Item Details</h2> */}
      <div className="container mt-3 mb-5 container-itemDetails">
        <div className="info-itemDetails">
          <div className="info-text-itemDetails">
            <div className="nameAndDesc">
              <h2>{itemInfo.name}</h2>
              <p>
                <b>{itemInfo.description} </b>
              </p>
            </div>
            <div className="others-item-detail">
              <div>
                <p className="p-in-itemDetails-others">
                  <b>Supplier</b>
                </p>
                <p className="p-in-itemDetails-others">{itemInfo.supplier}</p>
              </div>

              <div>
                <p className="p-in-itemDetails-others">
                  <b>Price </b>
                </p>
                <p className="p-in-itemDetails-others">
                  $ {itemInfo.price} (Per KG)
                </p>
              </div>
              <div>
                <p className="p-in-itemDetails-others">
                  <b>Quantity </b>
                </p>
                <p className="p-in-itemDetails-others">
                  {itemInfo.quantity} (KG)
                </p>
              </div>
              <div>
                <p className="p-in-itemDetails-others">
                  <b>Sold </b>
                </p>
                <p className="p-in-itemDetails-others">{itemInfo.sold} (KG)</p>
              </div>
            </div>
            <div className="form-wrapper">
            <form onSubmit={restockItem}>
                <div className="input-container-itemDetails">
                <input
                className="input-number-itemDetails"
                type="number"
                name="number"
                id="number"
                placeholder="Restock Your Item"
              />
                </div>
              
              <br/>
              <button className="btn-itemDetails" type="submit">
                Restock
              </button>
            </form>
          </div>
          <button onClick={reduceQuantity} className="btn-itemDetails">
            Delivered
          </button>
          </div>

         
        </div>
        <div className="img-itemDetails">
          <img
            style={{ width: "100%", height: "100%" }}
            src={itemInfo.img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
