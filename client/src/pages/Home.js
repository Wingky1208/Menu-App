import React from "react";
import ItemList from "../components/ItemList";
import Menu from "../components/Menu";
//import { DefaultPlayer as Video } from 'react-html5video';
//import 'react-html5video/dist/styles.css';


const Home = () => {
  return (
    <main>
        <section className="content">
            <section id="banner">
                <video autoplay muted loop src="./intro_video.mp4"></video>
                {/* <Video autoPlay loop muted
                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                    poster="http://sourceposter.jpg"
                    onCanPlayThrough={() => {
                        // Do stuff
                    }}>
                    <source src="http://sourcefile.webm" type="video/webm" />
                    <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
                </Video> */}
            </section>
            <Menu />
            <ItemList />      
        </section>
    </main>
  );
};

export default Home;