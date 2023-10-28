import React from "react";
import './component/navbar/Navbar.css';

import { Link, useMatch, useResolvedPath } from "react-router-dom";

 export const Navbar=()=>{
    
    return(

        
           
              <nav className="nav">
                <Link to="/" className="site-title">
                 Twitter
                </Link>
                <ul>
                    <Link to="/">Home</Link>
                  <Link to="/consultation">Post</=Link>
                  <Link to="/profile">Profile</Link>
                </ul>
              </nav>
    );
    }
          


    


export default Navbar
