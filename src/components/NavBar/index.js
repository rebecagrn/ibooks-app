import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/img/logo.png';
import { NavBar } from './styles';

function Navbar() {
  return (
    <NavBar>
      <div>
        <Link to="/">
          <img src={logoImg} width={140} alt="Logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favoritos</Link>
        </li>
      </ul>
    </NavBar>
  );
}

export default Navbar;
