import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import  "./slider.css";

import {Carousel} from "react-bootstrap";

import image1 from "./design/images/1.png";
import image2 from "./design/images/2.png";
import image3 from "./design/images/3.png";




  



const Slider =  () => {

  return(


    <Carousel className='carousel'>
  <Carousel.Item className='carousel'>
    <img
      className="d- wblock-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption className='caption'>
      <h3 className='caption'>Design Section Page WireFrame</h3>
      <p className='caption'>This is the low fidelity design of the Design page.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />

    <Carousel.Caption className='caption'>
      <h3  className='caption'>Internet Art Page WireFrame</h3>
      <p  className='caption'>This is the low fidelity design of my Internet Art page.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption className='caption'>
      <h3 className='caption'>Home Page WireFrame</h3>
      <p  className='caption'>This is the low fidelity design of the Home page.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default Slider;