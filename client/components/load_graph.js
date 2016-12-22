var React = require('react');
var Header = require('./header');

var LoadGraph = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <h1>This is where the 24-hour graph will be.</h1>
      </div>
    );
  }
});

module.exports = LoadGraph;
