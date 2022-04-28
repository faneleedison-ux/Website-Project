import "./about.css";
import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">

            <span className="sidebarTitle">CONTACT ME</span>
            
            <img 
                 className="siderImage"
                src="/profilepic.jpeg" alt="image" 
            />
            <p>For collaborations or enquiries you can contact me at 1345397@students.wits.ac.za
            </p>




        </div>


        

        <div className="sidebarItem">

            <span className="sidebarTitle"> FOLLOW ME HERE</span>
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
