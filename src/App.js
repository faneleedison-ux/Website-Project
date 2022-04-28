import Home from "./Components/pages/home/Home";
import Single from "./Components/pages/single/Single";
import TopBar from "./Components/topbar/TopBar";
import Write from "./Components/write/Write";
import React from "react";
import About from "./Components/about/About";
import { ReactDOM } from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Posts from "./Components/posts/Posts";
import Sidebar from "./Components/sidebar/Sidebar";


function App() {
  return (
   <Router>
    <TopBar/>
    
    <Routes>


    <Route exact path="/" element={<Home />} /> 
    <Route path="/write" element={<Write />} /> 
    <Route path="/blog" element={<Posts />} /> 
    <Route path="/about" element={<Sidebar />} /> 
    <Route path="/single" element={<Single />} /> 
    <Route path="/contact" element={<About />} /> 

    

    </Routes>
      
    
   </Router>
   
  );
}

export default App;
