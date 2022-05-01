import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const {itemDetail} = useParams();
    const [itemInfo, setItemInfo] = useState({});
    
    useEffect(()=>{
        fetch(`http://localhost:5000/fruit/${itemDetail}`)
        .then(res => res.json())
        .then(data => setItemInfo(data))
    }, [itemDetail])
    return (
        <div>
            <h1>hello world {itemInfo.name}</h1>
        </div>
    );
};

export default ItemDetails;