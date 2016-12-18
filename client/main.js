// Any JS in here is automatically ran for us

// Import the React library
var React = require('react');
var ReactDOM = require('react-dom');
var Form = require('./components/form');
var Table = require('./components/table');

// Create a component
var App = React.createClass({
  getInitialState: function() {
    return {
      load: 0,
      profile: ''
    };
  },
  handleFormSubmit: function(submittedData) {
    var newData = {
      load: submittedData.load,
      profile: submittedData.profile
    }
    this.setState({load: newData.load * 100, profile: newData.profile});
  },
  render: function () {
      return (
      <div>
        <div className="col-xs-6">
          <Form onFormSubmit={this.handleFormSubmit} />
           <div>-------------------</div>
           <Table load={this.state.load} profile={this.state.profile} />
        </div>
      </div>
    );
    }
  });

// Render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
