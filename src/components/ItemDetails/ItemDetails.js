import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './itemDetails.css';

const ItemDetails = () => {
    const {itemDetail} = useParams();
    const [itemInfo, setItemInfo] = useState({});
    const [quantity, setQuantity] = useState(parseInt(itemInfo.quantity));
    console.log(quantity);
    
    
    
    
    useEffect(()=>{
        fetch(`http://localhost:5000/fruit/${itemDetail}`)
        .then(res => res.json())
        .then(data => {
            setItemInfo(data);
            setQuantity(parseInt(data.quantity));
        })
    }, [itemDetail]);
    

    const manageQuantity = () =>{
        setQuantity(quantity -1);
        
        
    }
    return (
        <div>
            <h2 className="text-center mt-3">Details of {itemInfo.name}</h2>
            <div className="container mt-3 mb-5 container-itemDetails">
                <div className="img-itemDetails">
                    <img style={{ height: '100%', width: '100%'}} src={itemInfo.img} alt=""/>
                </div>
                
                <div className="info-itemDetails">
                    <div className="info-text-itemDetails">
                        <p><b>Fruit's Name: </b> {itemInfo.name}</p>
                        <p><b>Supplier: </b>{itemInfo.supplier}</p>
                        <p><b>Description: </b> {itemInfo.description}</p>
                        <p><b>Price: </b> $ {itemInfo.price} (Per KG)</p>
                        <p><b>Quantity: </b> {quantity} (KG)</p>
                    </div>
                    <button onClick={manageQuantity} className="btn-itemDetails">Delivered</button>
                </div>
            
            
        </div>
        </div>
        
    );
};

export default ItemDetails;