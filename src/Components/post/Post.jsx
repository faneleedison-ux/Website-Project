import React from "react";
import "./post.css";
import SinglePost from "../singlePost/SinglePost";
import Single from "../pages/single/Single";
import { Link } from "react-router-dom";
import folder from "./folder.jpg";

export default function Post() {
  return (
    <div className="post">
        < Link to="/single">
        <img className="postImg"
         src={folder} alt="image" />
         </Link>


         <div className="postInfo">
             <div className="postArts">
    
                 <span className="postArt"> Web Art</span>

             </div>

             <span className="postTitle">
                 Critical Writing: Design And Aestatics
             </span>
             <hr />

             <span className="postDate">
                 19 April 2022
             </span>

         </div>

        <p className="postDesciption"> Using the theoretical framework procived in the course and my own selection of blog posts, artcicles and examples I will disciss the core princples of design and aesthetics for the web. All work is referenced.
             </p>
    </div>
  )
}
