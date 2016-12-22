var React = require('react');

const Header = () => {
  return (
    <nav className="nav navbar-default header">
      <div className="navbar-header">
        <h2 className="navbar-brand" id="headertext">IceBank Analyzer Financial Tool</h2>
      </div>
      <div className="form-group">
        <span className="navbar-icon"><a href="#">Inputs</a></span>
        <span className="navbar-icon"><a href="#">24-Hour Load profile</a></span>
        <span className="navbar-icon"><a href="#">Financial Analysis</a></span>
        <span className="navbar-icon"><a href="#">Ice vs. Conventional</a></span>
      </div>
    </nav>
  );
};

module.exports = Header;
