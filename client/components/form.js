var React = require('react');

var Form = React.createClass({
  handleChange: function(event) {
    console.log('Changing text...');
  },
  handleSubmit: function(event) {
    event.preventDefault();
    console.log(this.refs.load.value);
    var submittedData = {
      load: this.refs.load.value,
      profile:this.refs.profile.value};
    // Here, this.props.onFormSubmit is just linking Parent to child
    // It has no other purpose.
    this.props.onFormSubmit(submittedData);
    this.refs.load.value = 0;
    this.refs.profile.value = '';
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <label>Peak Load: </label>
        <input type="number" ref="load"  />
        <select ref="profile">
          <option value=''>--Select Load Profile --</option>
          <option value="High School">High School</option>
          <option value="Office Building">Office Building</option>
        </select>
        <input type="submit" />
      </form>
    );
  }
});

// Export goes here
module.exports = Form;
