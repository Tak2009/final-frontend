import React from 'react';
import { NavLink } from 'react-router-dom';


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink 
        style={link} 
        to="/"
        activeStyle={{
          background: "darkblue"
        }}
      >Home</NavLink>
      <NavLink 
        style={link} 
        to="/about"
        activeStyle={{
          background: "darkblue"
        }}
      >About</NavLink>
      <NavLink 
        style={link} 
        to="/sites"
        activeStyle={{
          background: "darkblue"
        }}
      >Site List</NavLink>
    
   </div>
  );
}

export default NavBar;
