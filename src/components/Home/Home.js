import React from "react";
import { ClipLoader } from "react-spinners";
import { Alert } from 'react-st-modal';
import AnySuggestion from "../AnySuggestion/AnySuggestion";
import Header from "../Header/Header";
import { useItems } from "../hooks/useItems";
import Inventories from "../Inventories/Inventories";

const Home = () => {
    const [items, setItems, loading] = useItems();
    
    const alertMe = () =>{ 
      console.log("abbu");
    }
      
    
  return (
    <div>
      <div className="manage-loading">
        {loading && <ClipLoader color={"red"} loading={loading} size={100} />}
      </div>

      <Header></Header>
      <Inventories></Inventories>
      <AnySuggestion></AnySuggestion>
      <button  onClick={alertMe} >alert</button>
    </div>
  );
};

export default Home;
