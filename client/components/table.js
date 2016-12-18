var React = require('react');

var Table = React.createClass({
  render: function () {
	var load = this.props.load;
  var profile = this.props.profile;
  if (profile == "Office Building") {
    var HE1 = load * 0.5;
    var HE2 = load * 0.8;
    var HE3 = load;
    var HE4 = load * 0.5;
  } else {
    var HE1 = load * 0.25;
    var HE2 = load * 0.5;
    var HE3 = load;
    var HE4 = load;

  }
    return (
      <div>
        <table>
          <tr>
            <td>Profile is {profile}!</td>
          </tr>
          <tr>
           <td>Load is: {load}</td>
          </tr>
          <tr>
            <td>HE1</td>
            <td>{HE1}</td>
          </tr>
          <tr>
            <td>HE2</td>
            <td>{HE2}</td>
          </tr>
          <tr>
            <td>HE3</td>
            <td>{HE3}</td>
          </tr>
          <tr>
            <td>HE4</td>
            <td>{HE4}</td>
          </tr>
        </table>
      </div>
    );
  }
});

module.exports = Table;
