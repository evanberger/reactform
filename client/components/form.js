var React = require('react');
import { observer } from 'mobx-react';
import appState from '../appState';

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
    // this.refs.load.value = 0;
    // this.refs.profile.value = '';
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <div className="input-group col-xs-11">
          <div className="input-group-addon">Peak Load:</div>
          <span className="input-group-addon">
            <input type="number" ref="load"  />
          </span>
          <span className="input-group-addon">
            <select ref="profile">
              <option value=''>--Select Load Profile --</option>
              <option value="Middle School">Middle School</option>
              <option value="High School">High School</option>
              <option value="Office Building">Office Building</option>
              <option value="College">College Campus</option>
              <option value="Manual">Manual</option>
            </select>
          </span>
          <span className="input-group-addon">
            <input type="submit" id="formsubmit" value="View" />
          </span>
        </div>
      </form>
    );
  }
});

// Export goes here
module.exports = observer(Form);
