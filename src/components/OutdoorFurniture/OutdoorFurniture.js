import React from 'react';
import gazebos from './gazebos.png';
import outdoorDining from './outdoorDining.png';
import outdoorSofas from './outdoorSofas.png';
import {Link} from 'react-router-dom';
import TopMenu from './TopMenu/TopMenu';
import gazebo1 from './gazebo1.jpg';
import gazebo2 from './gazebo2.jpg';
import gazebo3 from './gazebo3.jpg';
import outdoorDining1 from './outdoorDining1.jpg'
import outdoorDining2 from './outdoorDining2.jpg'
import outdoorDining3 from './outdoorDining3.jpg'
import outdoorSofas1 from './outdoorSofas1.jpg';
import outdoorSofas2 from './outdoorSofas2.jpg';
import outdoorSofas3 from './outdoorSofas3.jpg';



function OutdoorFurniture() {
  return (
    <div >
      
    	<div>
    		<h1 className='baskerville tracked giant-logo-on-mobile ' style={{'font-size':'50px'}}>Outdoor Furniture </h1>
       </div>

       <div className='bb b--black-20 center  top-menu-desktop-only ' style={{'width':'96%'}}>
    		<div className='flex mh6 ph7 pv0'>
    			<section class="tc pa4   ">
    				<Link to='/gazebos' className='no-underline link pointer'>
			  		<article class=" mw4 center ">
				    <img src={gazebos} height="81px"  class=" mw4 " alt="executive desk" />
				    <div class="pa2 ">
				      <p class="f6 db link  black" href="#">Gazebos</p>
				    </div>
			    	</article>
			    	</Link>
				</section>

			

				<section class="tc  pa4 ">
					<Link to='/outdoor-dining' className='no-underline link pointer'>
			  		<article class="  mw4 center ">
				    <img src={outdoorDining} height="81px"  class=" mw4 " alt="executive desk" />
				    <div class="pa2 ">
				      <p class="f6 db link  black" href="#">Outdoor Dining</p>
				    </div>
			    	</article>
			    	</Link>
				</section>

		

				<section class="tc pa4  ">
					<Link to='/outdoor-sofas' className='no-underline link pointer'>
			  		<article class="  mw4 center ">
				    <img src={outdoorSofas} height="81px" class="  mw4 " alt="executive desk" style={{"object-fit": "cover"}}/>
				    <div class="pa2 ">
				      <p class="f6 db link  black" href="#">Outdoor Sofas</p>
				    </div>
			    	</article>
			    	</Link>
				</section>


    		</div>
    	</div>	

    	<div className='top-menu-mobile-only'>
    		<TopMenu className=''/>
    	</div>



    	<div className='pv3 mv3 '>
    		<div>
    			<h1 className=' ml2 pl4 tl f2 dim'><Link to='/gazebos' className='no-underline link pointer black baskerville'>Gazebo</Link></h1>
    			<div className='flex mh4   off-furn-pic-row-on-mobile '>
    				<article class="br2  mv4 ph2 center  off-furn-pic-row-on-mobile-article">
    				<Link to='/gazebos' className='no-underline link pointer black'>
					  <img src={gazebo1} height='450px' width='450px'  class="db  br2 br--top    off-furn-pic-row-on-mobile-img " alt=" kitten looking menacing." style={{"object-fit": "cover"}}/>
					  <div class="pa2 ph3-ns pb3-ns">
					    <div class="dt w-100 mt1">
					      <div class="dtc">
					        <h1 class="f6 f6-ns mv0 tl fw1">Gable Roof Gazebo </h1>
					      </div>
					      <div class="dtc tr">
					        <h2 class="f6 mv0 fw1">$$$$</h2>
					      </div>
					    </div>
					   </div>
					  </Link>
					</article>

					<article class="br2 mv4 ph2 center">
					<Link to='/gazebos' className='no-underline link pointer black'>
					  <img src={gazebo2} height='450px' width='450px'   class="db  br2 br--top  off-furn-pic-row-on-mobile-img " alt="kitten looking menacing."/>
					  <div class="pa2 ph3-ns pb3-ns">
					    <div class="dt w-100 mt1">
					      <div class="dtc">
					        <h1 class="f6 f6-ns mv0 fw1 tl">Casa Padrino Gazebo</h1>
					      </div>
					      <div class="dtc tr">
					        <h2 class="f6 mv0 fw1">$$$$</h2>
					      </div>
					    </div>
					   
					  </div>
					  </Link >
					  </article>

					<article class="br2  mv4 ph2 center off-furn-pic-row-on-mobile-article">
						<Link to='/gazebos' className='no-underline link pointer black'>
					  <img src={gazebo3} height='450px' width='450px'   class="db  br2 br--top  off-furn-pic-row-on-mobile-img" alt=" looking menacing." style={{"object-fit": "cover"}}/>
					  <div class="pa2 ph3-ns pb3-ns">
					    <div class="dt w-100 mt1">
					      <div class="dtc">
					        <h1 class="f6 f6-ns mv0 fw1 tl">Kampala Gazebo</h1>
					      </div>
					      <div class="dtc tr">
					        <h2 class="f6 mv0 fw1">$$$$</h2>
					      </div>
					    </div>
					   
					  </div>
					  </Link>
					</article>
    			</div>
    		</div>
    	</div>		


        <div className='pv3 mv3 '>
    		<div>
    			<h1 className=' ml2 pl4 tl f2 dim'><Link to='/outdoor-dining' className='no-underline link pointer black baskerville'>Outdoor Dining</Link></h1>
    			<div className='flex mh4  off-furn-pic-row-on-mobile'>
    				<article class="br2  mv4 ph2 center off-furn-pic-row-on-mobile-article">
    				<Link to='/outdoor-dining' className='no-underline link pointer black'>
					  <img src={outdoorDining1} height='450px' width='450px'  class="db  br2 br--top  off-furn-pic-row-on-mobile-img" alt=" kitten looking menacing." style={{"object-fit": "cover"}} />
					  <div class="pa2 ph3-ns pb3-ns">
					    <div class="dt w-100 mt1">
					      <div class="dtc">
					        <h1 class="f6 f6-ns mv0 tl fw1"> Outdoor 10 Person Dining Table </h1>
					      </div>
					      <div class="dtc tr">
					        <h2 class="f6 mv0 fw1">$2500</h2>
					      </div>
					    </div>
					   </div>
					  </Link>
					</article>

					<article class="br2 mv4 ph2 center">
					<Link to='/outdoor-dining' className='no-underline link pointer black'>
					  <img src={outdoorDining2} height='450px' width='450px'  class="db  br2 br--top  off-furn-pic-row-on-mobile-img" alt=" kitten looking menacing." style={{"object-fit": "cover"}} />
					  <div class="pa2 ph3-ns pb3-ns">
					    <div class="dt w-100 mt1">
					      <div class="dtc">
					        <h1 class="f6 f6-ns mv0 fw1 tl">Outdoor Dining Set Weathered Wood</h1>
					      </div>
					      <div class="dtc tr">
					        <h2 class="f6 mv0 fw1">$1800</h2>
					      </div>
					    </div>
					   
					  </div>
					  </Link >
					  </article>

					<article class="br2  mv4 ph2 center off-furn-pic-row-on-mobile-article">
						<Link to='/outdoor-dining' className='no-underline link pointer black'>
					  <img src={outdoorDining3} height='450px' width='450px'  class="db  br2 br--top  off-furn-pic-row-on-mobile-img" alt=" kitten looking menacing." style={{"object-fit": "cover"}} />
					  <div class="pa2 ph3-ns pb3-ns">
					    <div class="dt w-100 mt1">
					      <div class="dtc">
					        <h1 class="f6 f6-ns mv0 fw1 tl">Best-Patio-Furniture</h1>
					      </div>
					      <div class="dtc tr">
					        <h2 class="f6 mv0 fw1">$1700</h2>
					      </div>
					    </div>
					   
					  </div>
					  </Link>
					</article>
    			</div>
    		</div>
    	</div>


    	<div className='pv3 mv3 '>
    		<div>
    			<h1 className=' ml2 pl4 tl f2 dim'><Link to='/outdoor-sofas' className='no-underline link pointer black baskerville'>Outdoor Sofas</Link></h1>
    			<div className='flex mh4  off-furn-pic-row-on-mobile'>
    				<article class="br2  mv4 ph2 center off-furn-pic-row-on-mobile-article">
    				<Link to='/outdoor-sofas' className='no-underline link pointer black'>
					  <img src={outdoorSofas1} height='450px' width='450px'  class="db  br2 br--top  off-furn-pic-row-on-mobile-img" alt="kitten looking menacing." style={{"object-fit": "cover"}}/>
					  <div class="pa2 ph3-ns pb3-ns">
					    <div class="dt w-100 mt1">
					      <div class="dtc">
					        <h1 class="f6 f6-ns mv0 tl fw1">Tango Outdoor Sofaset</h1>
					      </div>
					      <div class="dtc tr">
					        <h2 class="f6 mv0 fw1">$1600</h2>
					      </div>
					    </div>
					   </div>
					  </Link>
					</article>

					<article class="br2 mv4 ph2 center">
					<Link to='/outdoor-sofas' className='no-underline link pointer black'>
					  <img src={outdoorSofas2} height='450px' width='450px'  class="db  br2 br--top  off-furn-pic-row-on-mobile-img" alt=" kitten looking menacing." style={{"object-fit": "cover"}}/>
					  <div class="pa2 ph3-ns pb3-ns">
					    <div class="dt w-100 mt1">
					      <div class="dtc">
					        <h1 class="f6 f6-ns mv0 fw1 tl">Metal Sofas</h1>
					      </div>
					      <div class="dtc tr">
					        <h2 class="f6 mv0 fw1">$2200</h2>
					      </div>
					    </div>
					   
					  </div>
					  </Link >
					  </article>

					<article class="br2  mv4 ph2 center off-furn-pic-row-on-mobile-article">
						<Link to='/outdoor-sofas' className='no-underline link pointer black'>
					  <img src={outdoorSofas3} height='450px' width='450px'  class="db  br2 br--top  off-furn-pic-row-on-mobile-img" alt=" kitten looking menacing."  style={{"object-fit": "cover"}}/>
					  <div class="pa2 ph3-ns pb3-ns">
					    <div class="dt w-100 mt1">
					      <div class="dtc">
					        <h1 class="f6 f6-ns mv0 fw1 tl">Porto Sofa & Portside Coffee Table Set</h1>
					      </div>
					      <div class="dtc tr">
					        <h2 class="f6 mv0 fw1">$1950</h2>
					      </div>
					    </div>
					   
					  </div>
					  </Link>
					</article>
    			</div>
    		</div>
    	</div>



	   	<div>
	   		<footer className="pa4 pa5-l black-70 bt b--black-10 " style={{"box-shadow":" 0 -11px 11px -11px #333"}}>
	   			<section className="cf mb5">
			    <div className="mb4 mb0-ns w-100 w-50-l fr">
			      <a className="black-70 f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l  " href="mailto:hello@lushroom.com" >
			        Join our newsletter for $10 off
			      </a>
			      <h5 className="black-70 f6 fw1 tc  dib  mt0 mb4 mb0-l">We'll email you a voucher worth $10 off your first order over $50. By subscribing you
			       agree to our Terms & Conditions and Privacy & Cookies Policy.</h5>
			    </div>
			    <div className="mb4 mb0-ns fl w-100 w-50-l" >
			      <p className="f4 fw6 mb2 f6 mt0">
			        Sign up for our newsletter.
			      </p>
			      <input placeholder="Email Address" className="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box"/>
			      <input type="submit" className="grow input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray"/>
			    </div>
			  </section>

			  <div className="mb4-l cf ">
			    <h1 className="fl w-100 pv0 f6 fw6 ttu tracked mb4 ">LOCATIONS</h1>
			    <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns ">
			      <h4 className="f5 f4-l fw6">SF</h4>
			      <span className="f7 f6-l db black-70">837 Larkin St.</span>
			      <span className="f7 f6-l black-70">San Francisco, CA 94109 </span>
			      <a class="f6 db fw6 pv3 black-70 link dim" title="Call SF" href="tel:+12075555555">
			        +1 207-555-5555
			      </a>
			    </article>
			    <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pl2 pl0-ns">
			      <h4 className="f5 f4-l fw6">LA</h4>
			      <span className="f7 f6-l db black-70">
			        1111 Manor Way
			      </span>
			      <span className="f7 f6-l di black-70">
			        Los Angeles, CA 90048
			      </span>
			      <a href="tel:+13235555555" className="f6 db fw6 pv3 link dim black-70" title="Call the LA office.">
			        +1 323-555-5555
			      </a>
			    </article>


			    <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
			      <h4 className="f5 f4-l fw6">London</h4>
			      <span className="f7 f6-l db black-70">11 Downey St.</span>
			      <span className="f7 f6-l black-70">London, UK</span>
			      <a href="tel:+5555555555" className="link dim f6 db fw6 pv3 black-70" title="Call the London office">+44 0 5555-5555</a>
			    </article>


			    <article className="fl w-50 dib-ns w-auto-ns mb4 pl2 pl0-ns">
			      <h4 className="f5 f4-l fw6">Tokyo</h4>
			      <span className="f7 f6-l db black-70">1982 Flangan Rd.</span>
			      <span className="f7 f6-l">Shinjuku, Tokyo</span>
			      <a href="tel:+444444444444" className="f6 db dim fw6 pv3 link black-70" title="Call Tokyo Office">
			        +99 5555-5555
			      </a>
			    </article>


			    <article className="fl w-50 dib-ns w-auto-ns  mb4 ml6 mt5 grow logo-bottom-on-mobile" >
			     
			      <span className="f1 f1-l dib black-70  " style={{"font-size":"40px","font-family":"Hanalei Fill",}}>
			        LUSHROOM FURNITURE
			      </span>
			      
			    </article>


			  </div>
			  
			  <div className="dt dt--fixed w-100" >
			    <div className="dn dtc-ns v-mid">
			      <p className="f7 black-70 dib pr3 mb3">
			        Copyright © LUSHROOM FURNITURE 2021
			      </p>
			    </div>
			    <div className="db dtc-ns black-70 tc tr-ns v-mid">
			      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"  className="link dim dib mr3 black-70" title="Impossible Labs on Facebook">
			        <svg className="db w2 h2" data-icon="facebook" viewBox="0 0 32 32" fill="currentColor">
			          <title >facebook icon</title>
			          <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"
			          ></path>
			        </svg>
			      </a>
			      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"  className="link dim dib mr3 black-70">
			        <svg className="db w2 h2" data-icon="twitter" viewBox="0 0 32 32"
			          fill="currentColor" >
			          <title >twitter icon</title>
			          <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"
			          ></path>
			        </svg>
			      </a>
			      <a href="https://medium.com/" target="_blank" rel="noopener noreferrer"  className="link dim dib mr3 black-70" title="Impossible Labs on Medium">
			        <svg className="db w2 h2" x="0px" y="0px" viewBox="0 0 290 248.6"
			          fill="currentColor" >
			          <g >
			            <path fill="currentColor" class="st0" d="M287.8,46.3L196,0.3c-0.4-0.2-0.9-0.3-1.3-0.3c0,0-0.1,0-0.1,0c-1.1,0-2.2,0.6-2.8,1.5l-56.6,92l63.2,102.7 l90.4-146.9C289.4,48.3,289,46.8,287.8,46.3z"
			            ></path>
			            <polygon fill="currentColor" points="105.2,61.2 105.2,160.3 193.3,204.4 	"
			            ></polygon>
			            <path fill="currentColor" d="M201,208.2l80.9,40.5c4.4,2.2,8,0,8-5v-180L201,208.2z"
			            ></path>
			            <path fill="currentColor" d="M95.5,46.7L10.7,4.3L5.4,1.7C4.6,1.3,3.8,1.1,3.2,1.1c-0.9,0-1.7,0.4-2.3,1.1C0.3,2.8,0,3.8,0,5v193.4 c0,3.3,2.4,7.2,5.4,8.7l83.3,41.6c1.2,0.6,2.3,0.9,3.3,0.9c2.8,0,4.8-2.2,4.8-5.8V48.7C96.7,47.8,96.2,47.1,95.5,46.7z"
			            ></path>
			          </g>
			        </svg>
			      </a>
			      <a href="https://www.linkedin.com/company/" target="_blank" rel="noopener noreferrer"  className="link dim dib black-70">
			        <svg className="db w2 h2" x="0px" y="0px" viewBox="0 0 48 48" >
			          <linearGradient gradientUnits="userSpaceOnUse" x1="23.9995"
			            y1="0" x2="23.9995" y2="48.0005" >
			            <stop offset="0" ></stop>
			            <stop offset="1" ></stop>
			          </linearGradient>
			          <path fill="currentColor" d="M48,42c0,3.313-2.687,6-6,6H6c-3.313,0-6-2.687-6-6V6 c0-3.313,2.687-6,6-6h36c3.313,0,6,2.687,6,6V42z"
			          ></path>
			          <g >
			            <g >
			              <path fill="#FFFFFF" d="M15.731,11.633c-1.608,0-2.658,1.083-2.625,2.527c-0.033,1.378,1.018,2.494,2.593,2.494 c1.641,0,2.691-1.116,2.691-2.494C18.357,12.716,17.339,11.633,15.731,11.633z M13.237,35.557h4.988V18.508h-4.988V35.557z M31.712,18.748c-1.595,0-3.222-0.329-4.956,2.36h-0.099l-0.087-2.599h-4.417c0.065,1.411,0.074,3.518,0.074,5.52v11.529h4.988 v-9.854c0-0.46,0.065-0.919,0.196-1.248c0.328-0.919,1.149-1.871,2.527-1.871c1.805,0,2.527,1.411,2.527,3.479v9.494h4.988V25.439 C37.455,20.713,34.993,18.748,31.712,18.748z"
			              ></path>
			            </g>
			          </g>
			        </svg>
			      </a>
			    </div>
			  </div>
			  <div className="db dn-ns">
			   
			  </div>
			</footer>
	   	</div>
 


    </div>
  );
}

export default OutdoorFurniture;
