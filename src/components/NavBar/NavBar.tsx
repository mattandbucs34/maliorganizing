import './Navbar.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props: any) => {
  return (
    <React.Fragment>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/before-after">Before and After</NavLink>
        <NavLink to="/testimonials">Testimonials</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </React.Fragment>
  )
}

export default NavBar;