import React from "react";
import "./post.css";
import SinglePost from "../singlePost/SinglePost";
import Single from "../pages/single/Single";
import { Link } from "react-router-dom";
import folder from "./folder.jpg";

export default function Post() {
  return (
    <div className="post">
        < a href="https://webartprojects.blogspot.com/2022/06/web-art-blog-2.html">
        <img className="postImg"
         src={folder} alt="image" />
         </a>


         <div className="postInfo">
             

             <span className="postTitle">
                REFERENCES
             </span>
            

             <span className="postDate">
                 26 JUNE 2022
             </span>

         </div>

        <p className="postDesciption">A description of my proposed Internet Artwork, as well as a selection of reference material.
<br />
Collated materials and sources of inspiration, and showcasing on an intended theme with wireframing the website.
<br />
Identifying technical concerns and addressing possible algorithmic solutions necessary to implement my final idea.
             </p>
    </div>
  )
}
