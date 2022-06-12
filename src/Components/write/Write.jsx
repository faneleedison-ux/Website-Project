import './write.css';
import React from "react";
import webart from "./webart1.jpg";

export default function write() {
  return (
    <div className="write">

        <img className='writeImage' src={webart} alt="blog post image" />
        
       <form className='writeForm'>
        <div className="writeFormGroup">
            <label htmlFor="fileInput"> <i className="writeIcon fas fa-plus"></i></label>
            <input type="file" id="fileInput" style={{display: "none"}} />
            <input type="text" placeholder='Title' className='writeInput' autoFocus= {true} />
        </div>


        <div className="writeFormGroup">

            <textarea placeholder='Blog about your art...' type="text" className='writeInput writeText'></textarea>
        </div>


        <button className='writeSubmit'>

            Publish
        </button>

       </form>

    </div>
  )
}
