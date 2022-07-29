import React from "react";
import CategoryMenu from "../components/Menu";
import Cart from "../components/Cart";
import Item from "../components/Item";


const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <Cart />
        <Item />      
    </div>
  );
};

export default Home;