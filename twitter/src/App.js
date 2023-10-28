import React,{useState, useEffect, createContext} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/Home/Home.js';
import Profile from './component/Profile/Profile.js';
import Post from './component/Profile/Profile.js';
export const UserContext=createContext({});

const App=()=>{

  return(

          <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/post" element={<Post/>}/>
               <Route path="/profile" element={<Profile/>}/> 
               
          </Routes>
      

  )
}

export default App;
