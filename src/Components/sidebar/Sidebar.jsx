import "./sidebar.css";
import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">

            <span className="sidebarTitle">ABOUT ME</span>
            
            <img 
                 className="siderImage"
                src="/profilepic.jpeg" alt="image" 
            />
            <p>My name is Fanelesibonge Mbuyazi, a 24 year University of Cape Town graduate and currently doing my postgraduate
                studies at the University of Witwatersrand. This is my first react js project for my interactive media 
                course. I hope you enjoy it.

            </p>




        </div>


        <div className="sidebarItem">
            <span className="sidebarTitle">
                My Hobbies

                
            </span>
        
            <ul className="sidebarList">
            

                <il className="sidebarListItem"> Book Collecting</il>
                <il className="sidebarListItem">Meditation</il>
                <il className="sidebarListItem">Modeling</il>
                <il className="sidebarListItem">Cinema</il>
               

            </ul>

        </div>

        <div className="sidebarItem">

            <span className="sidebarTitle"> FOLLOW ME</span>
            <div className="sidebarSocial">

            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            </div>
        </div>

    </div>
  )
}
