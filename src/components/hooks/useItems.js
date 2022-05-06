import { useEffect, useState } from "react"

export const useItems =() =>{
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('https://serene-bastion-77900.herokuapp.com/fruits')
        .then(res => res.json())
        .then(data => {
            setItems(data);
            setLoading(false);
        })
    },[items])
    return [items, setItems, loading];
}