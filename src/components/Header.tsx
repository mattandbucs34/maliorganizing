import React from 'react';
import NavBar from './NavBar/NavBar';

const Header = () => {
  return (
    <header>
      <h1 id="title">Mali Organizing</h1>
      <p><a href="tel:2819006552">281-900-6552</a></p>
      <p><a href="mailto:#">maliorganizing@gmail.com</a></p>
      <NavBar />
    </header>
  )
}

export default Header;