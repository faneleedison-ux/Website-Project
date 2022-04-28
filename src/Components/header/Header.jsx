import React from "react";


import "./header.css";

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">

            <span className="headerTitles2">Web---ART</span>
            <span className="headerTitles3">The Many Works Of Internet Art </span>


        </div>

              <video className="headerImg" width="1500" height="500" loop muted autoPlay controls >
              <source src="/video.mp4"  type="video/mp4"/>
              </video>

      
       

    </div>
  )
}
