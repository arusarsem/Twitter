import React from 'react';
import '/Users/aruzhan/Documents/Twitter/twitter/src/component/Home/Home.css';

import { Link } from "react-router-dom";

import Footer from '/Users/aruzhan/Documents/Twitter/twitter/src/component/footer/Footer.js';



function Home() {
  return (<section>  
    <div className="home" >
      
      <div className="headerContainer">
        <h1> Twitter </h1>
        <p> Enjoy messaging</p>
        <Link to="/consultation">
          <button> Contact us</button>
        </Link>
      </div>
      <img className="img"></img>
    </div>
<Footer/>
</section>
  );
}
  

export default Home
