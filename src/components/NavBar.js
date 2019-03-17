import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar" >
        <span ><NavLink to="/" id="navlink1" >Home</NavLink></span><span className="non_mobile">(1)</span>
        <span>-   -   -</span>
        <span ><NavLink to="/second" id="navlink2" >Second Container</NavLink></span><span className="non_mobile">(2)</span>
        <span>-   -   -</span>
        <span ><NavLink to="/third" id="navlink3" >Third Container</NavLink></span><span className="non_mobile">(3)</span>
    </div>
  );
};

export default NavBar;
