import React from "react";
import { Link } from "react-router-dom";
import profilepic from "./profilepic.jpeg";

import "./topbar.css";

export default function topbar() {
  return (
    <div className='top'>
      <div className="topLeft"> 
      
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      <i className="topIcon fa-brands fa-pinterest"></i>
      </div>
     


      <div className="topCentre">


        <ul className="topList">

        <il className="topListItem">
                <Link to= "/" style={ {textDecoration: "none" , color :"inherit"}}>
                HOME
                </Link>
          </il>
        <il className="topListItem">
                <Link to= "/about" style={ {textDecoration: "none" , color :"inherit"}}>
                          ABOUT 
                </Link>
                    
          
          </il>
        <il className="topListItem"> 
                <Link to= "/blog" style={ {textDecoration: "none" , color :"inherit"}}>
                          BLOG
                </Link></il>
        <il className="topListItem">

                <Link to= "/contact" style={ {textDecoration: "none" , color :"inherit"}}>
                          CONTACT
                </Link>
        </il>
        <il className="topListItem"> 

                <Link to= "/write" style={ {textDecoration: "none" , color :"inherit"}}>
                          WRITE
                </Link></il>

        <il className="topListItem"> 

                <Link to= "/design" style={ {textDecoration: "none" , color :"inherit"}}>
                          DESIGN
                </Link></il>

        <il className="topListItem"> 

                <Link to= "/art" style={ {textDecoration: "none" , color :"inherit"}}>
                          E-ART
                </Link></il>
        </ul>
      
      
      
      </div>


      <div className="topRight">

        <img 
        className="topImage"
        src={profilepic}
         alt="image" />
        <i className="topSearch fa-solid fa-magnifying-glass"></i>
      
      </div>
        
        


    </div>
  )
}
