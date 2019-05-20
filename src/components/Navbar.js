import React from 'react';
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
          <img className="navbar-brand" src={logo} alt="navbar-logo"/>
      </Link>
      <div className="collapse navbar-collapse show ml-sm-5">
          <ul className="navbar-nav">
              <li className="navbar-item mx-3">
                  <Link to="/" className="navbar-link">Home</Link>
              </li>
              <li className="navbar-item mx-3">
                  <Link to="/recipes" className="navbar-link">Recipes</Link>
              </li>
          </ul>
      </div>
    </nav>
  )
}
