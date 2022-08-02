import React from "react";
import ItemList from "../components/ItemList";
import Menu from "../components/Menu";


const Home = () => {
  return (
    <main>
        <section className="content">
            <section id="banner">
                <video autoplay muted loop src="./intro_video.mp4"></video>
            </section>
            <Menu />
            <ItemList />      
        </section>
    </main>
  );
};

export default Home;