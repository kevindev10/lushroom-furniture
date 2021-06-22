import React from 'react';
import './SlideShow.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from './sliderImg1.jpg';
import sliderImg2 from './sliderImg2.jpg';
import sliderImg3 from './sliderImg3.jpg';
import sliderImg4 from './sliderImg4.jpg';
import sliderImg5 from './sliderImg5.jpg';
import sliderImg6 from './sliderImg6.jpg';
import sliderImg7 from './sliderImg7.jpg';
import sliderImg8 from './sliderImg8.jpg';
import sliderImg9 from './sliderImg9.jpg';
import sliderImg10 from './sliderImg10.jpg';








class SlideShow extends React.Component {
   render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:3,
      slidesToScroll: 3,
      arrows:true
      

    };
  return (
      <div>
        <h2 className='tl f2 baskerville pb0'> Our Fave Finds</h2>
        <Slider {...settings}>
          <div>
            <h3 > <img src={sliderImg1}  width="400px" height='400px'  style={{"object-fit": "cover"}} alt=""/>
                <div className='flex'>
                   <div class="w-50 w-50-l ">
                      <h1 class="f6 fw1 tl  ">Kolbe Garden 3 Seater Sofa, Grey & Acacia Weave</h1>
                  </div>
                 <div class="w-50 w-50-r  ">
                    <h2 class="f6 fw1 tr mr4">$1,030</h2>
                  </div>

                </div>
               
             </h3>
          </div>


          <div>
            <h3> <img src={sliderImg2}  width="400px" height='400px'  style={{"object-fit": "cover"}} alt=""/> 
                <div className='flex'>
                   <div class="w-50 w-50-l ">
                      <h1 class="f6 fw1 tl  "> 1.4m, bronze Powder-Coated Steel lamp</h1>
                  </div>
                 <div class="w-50 w-50-r  ">
                    <h2 class="f6 fw1 tr mr4">$300</h2>
                  </div>
                </div>  
            </h3>
          </div>


          <div>
            <h3> <img src={sliderImg3}  width="400px" height='400px'  style={{"object-fit": "cover"}} alt=""/>
                 <div className='flex'>
                   <div class="w-50 w-50-l ">
                      <h1 class="f6 fw1 tl  ">Lenny Ceramic Coffee Table </h1>
                  </div>
                 <div class="w-50 w-50-r  ">
                    <h2 class="f6 fw1 tr mr4">$350</h2>
                  </div>
                </div> 
             </h3>
          </div>

          <div>
            <h3> <img src={sliderImg4}  width="400px" height='400px'  style={{"object-fit": "cover"}} alt=""/> 
                 <div className='flex'>
                   <div class="w-50 w-50-l ">
                      <h1 class="f6 fw1 tl  ">Casaco Jute & Wool Blend Rug,</h1>
                  </div>
                 <div class="w-50 w-50-r  ">
                    <h2 class="f6 fw1 tr mr4">$350</h2>
                  </div>
                </div> 
            </h3>
          </div>


        


          <div>
            <h3>  <img src={sliderImg5}  width="400px" height='400px'  style={{"object-fit": "cover"}} alt=""/> 
             <div className='flex'>
                   <div class="w-50 w-50-l ">
                      <h1 class="f6 fw1 tl  "> 3-Piece Abstract Canvas Wall Art Paintings</h1>
                  </div>
                 <div class="w-50 w-50-r  ">
                    <h2 class="f6 fw1 tr mr4">$50</h2>
                  </div>
                </div> 
              </h3>
          </div>


          <div>
            <h3> <img src={sliderImg6}  width="400px" height='400px'  style={{"object-fit": "cover"}} alt=""/>
               <div className='flex'>
                   <div class="w-50 w-50-l ">
                      <h1 class="f6 fw1 tl  ">Calligaris Lazy Armchair</h1>
                  </div>
                 <div class="w-50 w-50-r  ">
                    <h2 class="f6 fw1 tr mr4">$500</h2>
                  </div>
                </div> 
             </h3>
          </div>


          <div>
            <h3> <img src={sliderImg7}  width="400px" height='400px'  style={{"object-fit": "cover"}} alt=""/>
               <div className='flex'>
                   <div class="w-50 w-50-l ">
                      <h1 class="f6 fw1 tl  "> Antique sideboard</h1>
                  </div>
                 <div class="w-50 w-50-r  ">
                    <h2 class="f6 fw1 tr mr4">$500</h2>
                  </div>
                </div> 
             </h3>
          </div>


          <div>
            <h3> <img src={sliderImg8}  width="400px" height='400px'  style={{"object-fit": "cover"}} alt=""/>
               <div className='flex'>
                   <div class="w-50 w-50-l ">
                      <h1 class="f6 fw1 tl  ">Maxyoyo Mirror</h1>
                  </div>
                 <div class="w-50 w-50-r  ">
                    <h2 class="f6 fw1 tr mr4">$180</h2>
                  </div>
                </div> 
             </h3>
          </div>


          <div>
            <h3> <img src={sliderImg9}  width="400px" height='400px'  style={{"object-fit": "cover"}} alt=""/> 
               <div className='flex'>
                   <div class="w-50 w-50-l ">
                      <h1 class="f6 fw1 tl  ">Leather Sofa</h1>
                  </div>
                 <div class="w-50 w-50-r  ">
                    <h2 class="f6 fw1 tr mr4">$1,800</h2>
                  </div>
                </div> 
            </h3>
          </div>

          <div>
            <h3> <img src={sliderImg10}  width="400px" height='400px'  style={{"object-fit": "cover"}} alt=""/>
               <div className='flex'>
                   <div class="w-50 w-50-l ">
                      <h1 class="f6 fw1 tl  ">Natural Wood Coffee Table</h1>
                  </div>
                 <div class="w-50 w-50-r  ">
                    <h2 class="f6 fw1 tr mr4">$490</h2>
                  </div>
                </div> 
             </h3>
          </div>
        </Slider>
      </div>
    );
  }

	
}
  
export default SlideShow;
