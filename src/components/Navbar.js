import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const links = [
  { path: '/', text: 'Rockets' },
  { path: '/missions', text: 'Missions' },
  { path: '/myprofile', text: 'My Profile' },
];

function Navbar() {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <>
      <div className="header">
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <div className="logo">
            <img src="./images/planet.png" style={{ width: '50px', height: '50px' }} alt="planet" />
            <h2>Space Travelers Hub</h2>
          </div>
        </NavLink>
        <nav>
          <ul className="nav-items">
            {links.map((link) => (
              <li key={link.text}>
                <NavLink
                  to={link.path}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
