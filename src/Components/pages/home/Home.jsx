import Header from "../../header/Header";
import "./home.css";
import Sidebar from "../../sidebar/Sidebar";
import Post from "../../posts/Posts";
import React from "react";
import video from "./video.mp4";


export default function Home() {
  return (

    <>

      <Header/>
      <video  width="1300" height="500" loop muted autoPlay controls >
              <source src={video}  type="video/mp4"/>
       </video>
      <div>
     
          
          <Post/>
         <Sidebar/>


      </div>
    </>
  )
}
