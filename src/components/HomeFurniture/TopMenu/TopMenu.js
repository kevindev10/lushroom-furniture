import React, { Component } from "react";
import Slider from "react-slick";
import livingRoom from './livingRoom.png';

import diningRoom from './diningRoom.png';
import bedroom from './bedroom.png';

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
          <Link to='/living-room' className='no-underline link pointer black'>
            <h3  className=''><img src={livingRoom} alt='' className='mw3' height='61px'  /></h3>
             <div className=''>
                   <div class="w-50 w-25-l ">
                      <h1 class="f6 fw1 tc  ">Living Room</h1>
                  </div>
              </div>
          </Link>        
          </div>


          


          <div className='mh4'>
          <Link to='/dining-room' className='no-underline link pointer black'>
            <h3><img src={diningRoom} alt='' className='mw3 '  height='61px' /></h3>
            <div className=''>
                   <div class="w-50 w-25-l ">
                      <h1 class="f6 fw1 tc  ">Dining Room</h1>
                  </div>
              </div>
           </Link>    
          </div>


       

          <div className='mh4'>
          <Link to='/bedroom' className='no-underline link pointer black'>
            <h3><img src={bedroom} alt='' className='mw3'  height='61px' /></h3>
            <div className=''>
                   <div class="w-50 w-25-l ">
                      <h1 class="f6 fw1 tl  ">Bedroom</h1>
                  </div>
              </div>
           </Link>    
          </div>
       
        </Slider>
      </div>
    );
  }
}