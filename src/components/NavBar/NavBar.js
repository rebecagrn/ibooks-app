import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { NavBar } from './styles';

export default function Navbar() {
  return (
    <Router>
      <>
        <NavBar>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </NavBar>
      </>
    </Router>
  );
}
