import React from 'react';
import './NavBar.css';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className='tc' >
      <div class="navbar ">
      	  
      	  
		  <Link exact to="/" className ='fw8 tracked mr2  ' style={{"font-size":"30px","font-family":"Hanalei Fill",}} >LUSHROOM FURNITURE</Link>
		  <Link to="/about"  className ='fw8  ' style={{"font-size":"20px", "padding-top":"30px"}}>ABOUT</Link>
		  <div className="dropdown">
		    <button className="dropbtn fw8" style={{"font-size":"20px","padding-top":"30px"}}>SHOP 
		      <i className="fa fa-caret-down ph2"></i>
		    </button>
		    <div class="dropdown-content ">
		       <div class="header  " style={{"border":"1px solid red",}}>
		    </div>
		      <div class="row">
		        <div class="column">
		          <h3><Link to='/office-furniture' className='pointer no-underline '  style={{"font-size":"17px",}}>OFFICE FURNITURE</Link></h3>
		          <Link to="/exec-desks" style={{"font-size":"15px",}} >EXECUTIVE DESKS </Link>
		          <Link to="/workstations" style={{"font-size":"15px",}}>WORKSTATIONS</Link>
		          <Link to="/chairs" style={{"font-size":"15px",}}>CHAIRS</Link>
		          <Link to="/conf-tables" style={{"font-size":"15px",}}>CONFERENCE TABLES</Link>
		          <Link to="/recp-counters" style={{"font-size":"15px",}}>RECEPTION COUNTERS</Link>
		        </div>
		        <div class="column">
		          <h3><Link to='/home-furniture' className='pointer no-underline '  style={{"font-size":"17px",}}>HOME FURNITURE</Link></h3>
		          <Link to="/living-room" style={{"font-size":"15px",}}>LIVING ROOM</Link>
		          <Link to="/dining-room" style={{"font-size":"15px",}}>DINING ROOM</Link>
		          <Link to="/bedroom" style={{"font-size":"15px",}}>BEDROOM</Link>
		        </div>
		        <div class="column">
		          <h3><Link to='/outdoor-furniture' className='pointer no-underline '  style={{"font-size":"17px",}}>OUTDOOR FURNITURE</Link></h3>
		          <Link to="/gazebos" style={{"font-size":"15px",}}>GAZEBOS</Link>
		          <Link to="/outdoor-dining" style={{"font-size":"15px",}}>OUTDOOR DINING</Link>
		          <Link to="/outdoor-sofas" style={{"font-size":"15px",}}>OUTDOOR SOFAS</Link>
		        </div>
		        
		      </div>
		    </div>
		  </div> 

		</div>

    </div>
  );
}

export default Navbar;
