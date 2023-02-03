import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        
          <nav className="navbar navbar-dark bg-dark justify-content-between">
          <div className='container'>
  <NavLink to={"Navbar.jsx"} className="navbar-brand">Home</NavLink>
  <div className='sign-up'>
    <NavLink to="SignUP">sign up</NavLink>
  {/* <button className="btn btn-outline-success bg-success my-2 my-sm-0" style={{color:"#fff"}} type="signup"><NavLink to="#">SignUp</NavLink></button>   */}
  </div>
        
  </div> 
</nav>
{/* <div className='Entry' style={{display:'flex',justifyContent:"center"}}>
     <h1>Please the Sign Up page</h1>
    </div>  */}
        </>
    );
}

export default Navbar;
