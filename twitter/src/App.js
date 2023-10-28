import React,{useState, useEffect, createContext} from "react";
import {Routes, Route} from 'react-router-dom';
import app from "./firebase/Firebase";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import Home from './component/Home/Home.js';
import Profile from './component/Profile/Profile.js';
import Post from './component/Profile/Profile.js';

export const UserContext=createContext({});
const App=()=>{
  const auth=getAuth(app);
  const [authenticatedUser, setAuthenticatedUser]=useState(null);

  console.log(UserContext);

  useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
          if(user){
            
              setAuthenticatedUser(user);

          }
          else{
              setAuthenticatedUser(null)
          }
      })

  }, [])
  return(
      <UserContext.Provider value={authenticatedUser}>
          <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/post" element={<Post/>}/>
               <Route path="/profile" element={<Profile/>}/> 
               
          </Routes>
      
      </UserContext.Provider>
  )
}

export default App;
