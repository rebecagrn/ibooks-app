import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './styles';

export default function Navbar() {
  return (
    <NavBar>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/details">Details</Link>
        </li>
      </ul>
    </NavBar>
  );
}
