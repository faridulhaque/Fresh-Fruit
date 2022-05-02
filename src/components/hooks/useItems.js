import { useEffect, useState } from "react"

export const useItems =() =>{
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/fruits')
        .then(res => res.json())
        .then(data => setItems(data))
    },[items])
    return [items, setItems];
}