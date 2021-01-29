import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/img/logo.png';
import { NavBar } from './styles';

export default function Navbar() {
  return (
    <NavBar>
      <div>
        <Link to="/">
          <img src={logoImg} width={40} alt="Logo" />
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
