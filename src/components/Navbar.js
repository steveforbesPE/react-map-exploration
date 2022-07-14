import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	
  return ( 
  	<nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">

				<NavLink
					className="navbar-item"
					activeClassName="is-active"
					to="/"
					exact
				>
					Home
        </NavLink>

				<NavLink
					className="navbar-item"
					activeClassName="is-active"
					to="/basic"
				>
					Basic Heatmap
				</NavLink>

      </div>
    </nav>
  );
 };
 
 export default Navbar;