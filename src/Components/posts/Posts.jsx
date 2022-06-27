import React from "react";
import "./posts.css";
import Post1 from "../post/Post1";
import Post2 from "../post/Post2";
import Post3 from "../post/Post3";
import Post4 from "../post/Post4";

import Sidebar from "../sidebar/Sidebar";
import About from "../about/About";


export default function Posts() {
  return (
    

    <>
    <span className="HEADING"> THE BLOG POSTS</span>
     

    <div className='posts'>


      <Post1 />
      <Post2 />
   
      </div>

      <span className="HEADING"> THE WEB ART REFLECTIONS</span>


      <div className='posts'>
      <Post3 />
      <Post4 />
     


    </div>
    <About />
    </>
  )
}
