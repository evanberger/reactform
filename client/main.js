// Any JS in here is automatically ran for us

// Import the React library
var React = require('react');
var ReactDOM = require('react-dom');
import Collapsible from 'react-collapsible';
var {Route, Router, IndexRoute,
  hashHistory, browserHistory} = require('react-router');
var App = require('./components/App');
var Header = require('./components/header');
var Form = require('./components/form');
var Table = require('./components/table');
var BuildingForm = require('./components/bldg_form');
var LoadGraph = require('./components/load_graph');
var Homepage = require('./components/homepage');
var ProjectDetails = require('./components/details');
var Versus = require('./components/versus');

// Create a component

// Render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Homepage} />
        <Route path="loadgraph" component={LoadGraph} />
        <Route path="details" component={ProjectDetails} />
        <Route path="versus" component={Versus} />
      </Route>
    </Router>
, document.querySelector('.container'));
});
