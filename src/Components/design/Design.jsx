import React from 'react';
//import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Slider from '../Slider';
import "./design.css";

import Post5 from "../post/Post5";
import Post6 from "../post/Post6";
import About from "../about/About";




export default function Design() {
    return (
  
      <>
     
  
     
        <div className="design">
        <br />
        <br />
       
  
        <span className='headings'>THE LOW FI WIRE FRAMES SLIDESHOW</span>
        
    
        <br />
        <br />    
        <Slider/>
          
        <br />
        <br/>
        <br/>

        <div className='posts'>
          
        <Post5/>
        <Post6/>

         </div>
        
       </div>

       <About/>
      </>
    )
  }

  



