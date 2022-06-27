import React from "react";
import "./post.css";
import SinglePost from "../singlePost/SinglePost";
import Single from "../pages/single/Single";
import { Link } from "react-router-dom";
import folder from "./folder.jpg";

export default function Post() {
  return (
    <div className="post">
        < a href="https://webartprojects.blogspot.com/2022/06/web-art-blog-1.html">
        <img className="postImg"
         src={folder} alt="image" 
         />
         </a>


         <div className="postInfo">
             <div className="postArts">
    
                 <span className="postArt"> Web Art</span>

             </div>

             <span className="postTitle">
                 Critical Writing: Design And Aestatics Blog 1
             </span>
             <hr />

             <span className="postDate">
                 19 April 2022
             </span>

         </div>

        <p className="postDesciption"> Using the theoretical framework provided in the course and my own selection of blog posts, articles and examples I will discuss the core princples of design and aesthetics for the web. All work is referenced.
             </p>
    </div>
  )
}
