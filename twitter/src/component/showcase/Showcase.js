import React from "react";
import './component/showcase/Showcase.css';
import Navbar from "../navbar/Navbar";


const Showcase=()=>{
    return(
        <section className="showcase-container">
            <Navbar darkTheme={false}/>
            <div className="overlay"></div>
            <div className="showcase-content">
                <h1>Text with <span className="text-primary">your</span> friend</h1>
                       
                </div>

        </section>
    )
}

export default Showcase;