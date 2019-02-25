import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return(
    <header className="site-header">
      <h1><Link to="/"><span className="pink">this</span>.<span className="blue">webDeveloperDude</span>();</Link></h1>
      <p className="string">Los Angeles based Software Engineer.</p>
    </header>
  );
}

export default Header;
