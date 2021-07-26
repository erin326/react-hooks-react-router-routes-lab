import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  width: '160px',
  padding:'14px',
  margin: '0 6px 6 px',
  background: 'orange',
  textDecoration: 'none',
  color: 'white'

}

function NavBar() {
  return ( 
    <div className='navbar'>
      <NavLink
      to='/'
      exact
      style={linkStyles}
      activeStyle={{
        background: 'pink'
      }}
      >
        Home
      </NavLink>
      <NavLink
      to='/movies'
      exact
      style={linkStyles}
      activeStyle={{
        background: 'pink'
      }}
      >
        Movies
      </NavLink>
      <NavLink
      to="/directors"
      exact
      style={linkStyles}
      activeStyle={{
        background: 'pink'
      }}
      >
        Directors
      </NavLink>
      <NavLink
      to='/actors'
      exact
      style={linkStyles}
      activeStyle={{
        background: 'pink'
      }}
      >
        Actors
      </NavLink>

    </div>
  )
}

export default NavBar;
