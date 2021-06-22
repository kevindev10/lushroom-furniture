import React, { Component } from "react";
import Slider from "react-slick";
import gazebos from './gazebos.png';
import outdoorDining from './outdoorDining.png';
import outdoorSofas from './outdoorSofas.png';

import {Link} from 'react-router-dom';



export default class Responsive extends Component {
  render() {
    var settings = {
      arrows:false,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        
      
        {
          breakpoint: 960,
          settings: {
            slidesToShow:3,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        
        <Slider {...settings}>

          <div className='pl3 mh4'>
          <Link to='/gazebos' className='no-underline link pointer black'>
            <h3  className=''><img src={gazebos} alt='' className='mw3' height='61px'  /></h3>
             <div className=''>
                   <div class="w-50 w-25-l ">
                      <h1 class="f6 fw1 tc  ">Gazebos</h1>
                  </div>
              </div>
          </Link>        
          </div>


          


          <div className='mh4'>
          <Link to='/outdoor-dining' className='no-underline link pointer black'>
            <h3><img src={outdoorDining} alt='' className='mw3 '  height='61px' /></h3>
            <div className=''>
                   <div class="w-50 w-25-l ">
                      <h1 class="f6 fw1 tc  ">Outdoor Dinning</h1>
                  </div>
              </div>
           </Link>    
          </div>


       

          <div className='mh4'>
          <Link to='/outdoor-sofas' className='no-underline link pointer black'>
            <h3><img src={outdoorSofas} alt='' className='mw3'  height='61px' /></h3>
            <div className=''>
                   <div class="w-50 w-25-l ">
                      <h1 class="f6 fw1 tl  ">Outdoor Sofas</h1>
                  </div>
              </div>
           </Link>    
          </div>
       
        </Slider>
      </div>
    );
  }
}