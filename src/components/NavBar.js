import React from 'react';
import { MenuItems } from './MenuItems'
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { Button } from "./Button"



// https://youtu.be/fL8cFqhTHwA?t=1143


class NavBar extends React.Component {
  
  state = { clicked: false }
  
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
    console.log(this.state)
  }

  render () {
    
    return(
    <nav className="NavbarItems">
      <h2 className='navbar-logo'>React<i className='fab fa-react'></i>
      </h2>
      <div className="menu-icon" onClick={this.handleClick}>
        <i className={this.state.clicked ? 'fa-solid fa-xmark' : 'fas fa-bars'}></i>
      </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className="adjust">
                <NavLink className={item.cName} to={item.to}>
                  {item.title}
                </NavLink>
              </li>
            )
          })}
        </ul>

          <Button>Sign up</Button>

      </nav>
    )
  }
}

export default NavBar;
