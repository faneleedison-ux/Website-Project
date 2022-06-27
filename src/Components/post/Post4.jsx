import React from "react";
import "./post.css";
import SinglePost from "../singlePost/SinglePost";
import Single from "../pages/single/Single";
import { Link } from "react-router-dom";
import folder from "./folder.jpg";

export default function Post() {
  return (
    <div className="post">
        < a href="https://webartprojects.blogspot.com/2022/06/assignment-2-technical-and-creative.html">
        <img className="postImg"
         src={folder} alt="image" />
         </a>


         <div className="postInfo">
             <div className="postArts">
    
                 <span className="postArt"> Web Art</span>

             </div>

             <span className="postTitle">
             Assignment 2 :Creative And Technical Web Art Reflections
             </span>
             <hr />

             <span className="postDate">
                 26 June 2022
             </span>

         </div>

        <p className="postDesciption"> Assignment 2 :Creative And Technical Reflections On The Development Of The Website During The Semester
             </p>
    </div>
  )
}
