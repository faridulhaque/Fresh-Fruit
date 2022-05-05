import React from 'react';
import { useItems } from '../hooks/useItems';
import './Modal.css';

const Modal = ({setPopup}) => {
    const [items, setItems] = useItems();
    return (
        <div className="modal-content">
            <h1>Are you sure?</h1>
            <button onClick={()=}>confirm</button>
            <button onClick={()=> setPopup(false)}>cancel </button>
        </div>
    );
};

export default Modal;