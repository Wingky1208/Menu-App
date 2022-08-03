import React from "react";
import ItemList from "../components/ItemList";
import Menu from "../components/Menu";
import video1 from "../intro_video.mp4";
import image from "../banner_logo.png";

const Home = () => {
  return (
    <main>
        <section className="content">
            <section className="banner">             
                    <video className="banner_video" autoPlay muted src={video1} width="100%" autoplay="true" loop="true" />                     
                    <img className="banner_logo" src={image} />
                    <h1>What time is it?</h1>
            </section>
            <Menu />
            <ItemList />      
        </section>
    </main>
  );
};

export default Home;