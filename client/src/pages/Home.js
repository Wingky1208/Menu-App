import React from "react";
import ItemList from "../components/ItemList";
import Menu from "../components/Menu";
import video1 from "../intro_video.mp4";
import image from "../logo.svg";

const Home = () => {
  return (
    <main>
        <section className="content">
            <section className="banner">                
                <video className="banner_video" autoPlay muted src={video1} width="100%" autoplay="true" loop="true" />
                <img className="banner_logo" src={image} />
            </section>
            <Menu />
            <ItemList />      
        </section>
    </main>
  );
};

export default Home;