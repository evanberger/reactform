// Any JS in here is automatically ran for us

// Import the React library
var React = require('react');
var ReactDOM = require('react-dom');
var Form = require('./components/form');

// Create a component
var App = React.createClass({
  getInitialState: function() {
    return {load: 0};
  },
  handleSubmit: function(event) {
    event.preventDefault();
    console.log("I've submitted");
    var loadValue = this.refs.load.value;
    console.log(loadValue);
    // When we separate into components, this should be "this.props.onFormSubmit"
    this.onFormSubmit(loadValue);
    this.refs.load.value = 0;
    // Insert a setState here-->
  },
  handleChange: function(event) {
    event.preventDefault();
    // console.log("I've been changed");
    console.log(this.refs.load.value);
  },
  onFormSubmit: function(load){
    var newLoad = load;
  },
  render: function () {
      return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <label>Peak Load: </label>
          <input type="number" ref="load"  />
          <input type="submit" />
        </form>
        <div>-----------------</div>
        <div>Peak: {this.newLoad}</div>
      </div>
    );
    // <div>
    //   <Form load={this.state.load}
    //   onClick={this.handleClick.bind(this)}
    //   onChange={this.handleChange.bind(this)} />
    // </div>
    }
  });

// Render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
