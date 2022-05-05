import React from "react";
import { ClipLoader } from "react-spinners";
import Header from "../Header/Header";
import { useItems } from "../hooks/useItems";
import Inventories from "../Inventories/Inventories";

const Home = () => {
    const [items, setItems, loading] = useItems();
  return (
    <div>
      <div className="manage-loading">
        {loading && <ClipLoader color={"red"} loading={loading} size={100} />}
      </div>

      <Header></Header>
      <Inventories></Inventories>
    </div>
  );
};

export default Home;
