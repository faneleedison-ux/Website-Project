import React from 'react';
//import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Slider from '../Slider';
import "./design.css";
import vid from "./vid.mp4";



export default function Design() {
    return (
  
      <>
     
  
      
        <div className="design">
        <br />
        <br />
       
  
        <span className='headings'>THE WIRE FRAMES SLIDESHOW</span>
        
    
        <br />
        <br />    
        <Slider/>
          
        <br />
        <br/>
        <br/>



        <span className='headings'>WHAT IS MY INTERNET ART</span>
        <br/>
        <span className="texts"> 
        My website and art is mainly based on the current events of corona virus and how it has affected many in different ways,
        some have lost family members and some through the extended isolation periods have lost themselves hence the high suicide rate and
        very high number of people diagnosed with mental illness. I have used images of an african artists called Tatenda Chidora 
        which display a man covering and "overprotecting" himself with alot masks from "the corona man" but when you hover over him with a mouse 
        you get to read his thoughts and find that even though he has covered himself the corona man still found him. This portrays the uncertainty and
        the tradegy many faced when after trying everything to protect themselves from thr virus they still succumbed to it or were affected by it.

        </span>
        <br/>
        <br/>

        <span className='headings'> REFERENCES </span>

        <br/>
        <span className="texts"> 
        My art was inspired by the diary entry in a form of an internet art which is featured in one of my blogs. The art is called

        "My Boyfriend Came Home From The War"
        <br/><br/> <br/>

Interactive hypertext storytelling is seen in My Boyfriend Came Back From the War. The work is made up of stacked frames with black and white web pages and grainy GIF graphics (sometimes animated). The frame divides into tiny frames when the user clicks hyperlinks in the work, revealing a nonlinear story about a couple who is reunited after a nameless military fight. The lovers are having trouble reuniting; the woman admits to having an affair with a neighbour, while the returned soldier proposes marriage. The plot progresses to the point where the screen has become a mosaic of black frames with no content.
Because of the work's resemblance to a movie plot, Olia Lialina refers to it as a netfilm.
“The grainy black-and-white images and intertitles refer to early silent movies” (Connor, 2016).
<br/> <br/>

        The short poem in my internet art is written by myself and was inspired by Willaim Shakespeare's Sonnet 8 poem that summarises and compares the life of
        a young man to a single musical chord and the chords to a union of a wife and husband to have a family. I was highly inspired by this poem because of its was it uses little words to intensify the story life and how it compares the nonliving things to living things.

        <br/> <br/>
        The "hover" over image inorder to reveal hidden was inspired by an internet i saw while using "wetransfer" and can be viewed on the video down below. The constant glitching represents the unstableness the virus brought into society and how it disrupted all norms people once knew and found comfort in.

        </span>


        <br/>
        <br/>
        <video  width="1300" height="500" loop muted autoPlay controls >
              <source src={vid}  type="video/mp4"/>
       </video>
        </div>
      </>
    )
  }

  



