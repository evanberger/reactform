var React = require('react');

var Form = React.createClass({
  handleChange: function(event) {
    event.preventDefault();
    console.log(this.target.value);
  },
  render: function () {
    return (
      <form onClick={this.props.onClick} onChange={this.props.onChange}>
        <label>Peak Load: </label>
        <input type="number" ref="load"  />
        <input type="submit" />
      </form>
    );
  }
});

// ReactDOM.render goes here:
module.exports = Form;
