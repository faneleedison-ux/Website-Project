import React from "react";
import "./post.css";
import SinglePost from "../singlePost/SinglePost";
import Single from "../pages/single/Single";
import { Link } from "react-router-dom";
import folder from "./folder.jpg";

export default function Post() {
  return (
    <div className="post">
        <  a href="https://webartprojects.blogspot.com/2022/06/web-art-blog-4.html">
        <img className="postImg"
         src={folder} alt="image" />
         </a>


         <div className="postInfo">
             
             <span className="postTitle">
                 WHAT IS MY INTERNET ART
             </span>
          

             <span className="postDate">
                 25 JUNE 2022
             </span>

         </div>

        <p className="postDesciption">  A substantial piece of writing reflecting on my completed artwork.

This includes:
<br />
1. Description - what is it?
<br />
2. Rationale - why is it the way it is (what are I am trying to communicate / what do I want the audience to experience, how it relates to other internet artworks, reflects the theory, and integrates with the rest of the site)
<br />
3.  Reflection - where does it succeed and fail, how and WHY?
             </p>
    </div>
  )
}
