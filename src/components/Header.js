import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Header() {
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </>
    </Router>
  );
}
