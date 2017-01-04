var React = require('react');
import {Link} from 'react-router';
import Accounts from './accounts';

const Header = () => {
  return (
    <header className="site-header">
        <span className="glyphicon glyphicon-equalizer headericon"></span>
        <Link to="/">IceBank Analyzer</Link>
      <nav className="site-nav">
        <ul>
          <li className=""><Link to="">Inputs</Link></li>
          <li className=""><Link to="/details">Project Info</Link></li>
          <li className=""><Link to="/loadgraph">24-Hour Load profile</Link></li>
          <li className=""><Link to="/versus">Ice vs. Conventional</Link></li>
          <li className=""><Accounts /></li>
        </ul>
      </nav>
    </header>
  );
};

module.exports = Header;
