import Home from "./Components/pages/home/Home";
import Single from "./Components/pages/single/Single";
import TopBar from "./Components/topbar/TopBar";

import React from "react";
import About from "./Components/about/About";
import { ReactDOM } from "react";
import { render } from "react-dom";


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Posts from "./Components/posts/Posts";
import Sidebar from "./Components/sidebar/Sidebar";
import EArt from "./Components/e-art/EArt";
import Design from "./Components/design/Design";

import CursorBackground from "./Components/cursor/CursorBackground";
//import Particle from "./Components/net art/particle";


function App() {
  return (

    <Router>
    <TopBar/>
    
    <Routes>


    <Route exact path="/" element={<Home />} /> 
    
    <Route path="/blog" element={<Posts />} /> 
    <Route path="/about" element={<Sidebar />} /> 
    <Route path="/single" element={<Single />} /> 
   
 
    <Route path="/art" element= {<EArt/>}/>
    <Route path="/design" element={<Design />} /> 

    

    </Routes>
      
    
   </Router>
   
   
  );
}

export default App;
