import React from "react";
import ItemList from "../components/ItemList";
import Menu from "../components/Menu";


const Home = () => {
  return (
    <div className="container">
      <Menu />
      <ItemList />      
    </div>
  );
};

export default Home;