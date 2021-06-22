import React, { Component } from "react";
import Slider from "react-slick";
import execDesk from './execDesk.png';
import confTables from './confTables.png';
import chairs from './chairs.png';
import recpCounters from './recpCounters.png';
import workstations from './workstations.png';
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
          <Link to='/exec-desks' className='no-underline link pointer black'>
            <h3  className=''><img src={execDesk} alt='' className='mw3' height='61px'  /></h3>
             <div className=''>
                   <div class="w-50 w-25-l ">
                      <h1 class="f6 fw1 tc  ">Executive Desks</h1>
                  </div>
              </div>
          </Link>        
          </div>


          <div className='mh4'>
          <Link to='/workstations' className='no-underline link pointer black'>
            <h3><img src={workstations} alt='' className='mw3 ' height='61px'   /></h3>
            <div className=''>
                   <div class="w-50 w-25-l ">
                      <h1 class="f6 fw1 tc  ">Work Stations</h1>
                  </div>
              </div>  
            </Link>   
          </div>


          <div className='mh4'>
          <Link to='/chairs' className='no-underline link pointer black'>
            <h3><img src={chairs} alt='' className='mw3 '  height='61px' /></h3>
            <div className=''>
                   <div class="w-50 w-25-l ">
                      <h1 class="f6 fw1 tc  ">Chairs</h1>
                  </div>
              </div>
           </Link>    
          </div>


          <div className='mh4'>
          <Link to='/conf-tables' className='no-underline link pointer black'>
            <h3><img src={confTables} alt='' className='mw3 '  height='61px'  /></h3>
            <div className=''>
                   <div class="w-50 w-25-l ">
                      <h1 class="f6 fw1 tc  ">Conference Tables</h1>
                  </div>
              </div>
           </Link>    
          </div>


          <div className='mh4'>
          <Link to='/recp-counters' className='no-underline link pointer black'>
            <h3><img src={recpCounters} alt='' className='mw3'  height='61px' /></h3>
            <div className=''>
                   <div class="w-50 w-25-l ">
                      <h1 class="f6 fw1 tl  ">Reception Counters</h1>
                  </div>
              </div>
           </Link>    
          </div>
       
        </Slider>
      </div>
    );
  }
}