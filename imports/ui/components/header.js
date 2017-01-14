var React = require('react');
import {Link} from 'react-router';
import Accounts from './accounts';

const Header = () => {
  return (
    <div className="navbar navbar-inverse navbar-fixed-top" id="nav">
        <div className="navbar-header">
          <span className="glyphicon glyphicon-equalizer headericon"></span>
          <Link to="/">IceBank Analyzer</Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className=""><Link to="/">Inputs</Link></li>
            <li className=""><Link to="/details">Project Info</Link></li>
            <li className=""><Link to="/versus">Ice vs. Conventional</Link></li>
            <li className=""><Link to="/analysis">Financial Analysis</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className=""><Accounts /></li>
          </ul>
        </div>
    </div>
  );
};

module.exports = Header;
