var React = require('react');
import {Link} from 'react-router';
import Accounts from './accounts';

const Header = () => {
  return (
    <div>
        <div className="navbar navbar-inverse navbar-fixed-top" id="nav">
              <Link to="/"><h1 id="headertext">IceBank Analyzer</h1></Link>
        </div>
        <div className="collapse navbar-collapse" id="stripe">
          <ul className="nav navbar-nav">
            <li className="headerbutton"><Link to="/">Inputs</Link></li>
            <li className="headerbutton"><Link to="/details">Project Info</Link></li>
            <li className="headerbutton"><Link to="/versus">Ice vs. Conventional</Link></li>
            <li className="headerbutton"><Link to="/analysis">Financial Analysis</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className=""><Accounts /></li>
          </ul>
        </div>      
    </div>
  );
};

module.exports = Header;
