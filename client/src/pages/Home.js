import Nav from '../components/Nav'
import Footer from '../components/Footer'
import React from "react";

import CategoryMenu from "../components/Menu";
import Cart from "../components/Cart";


const Home = () => {
  return (
    <div className="container">
      <Nav />
      <CategoryMenu />
      <Cart />
      <Footer />
    </div>
  );
};

export default Home;