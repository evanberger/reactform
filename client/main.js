// Any JS in here is automatically ran for us

// Import the React library
var React = require('react');
var ReactDOM = require('react-dom');
import Collapsible from 'react-collapsible';
var {Route, Router, IndexRoute,
  hashHistory, browserHistory} = require('react-router');
var port = process.env.PORT  || 300;
// import '../firebase/index';
var App = require('../imports/ui/components/App');
var Header = require('../imports/ui/components/header');
var Form = require('../imports/ui/components/form');
var Table = require('../imports/ui/components/table');
var BuildingForm = require('../imports/ui/components/bldg_form');
var LoadGraph = require('../imports/ui/components/load_graph');
var Homepage = require('../imports/ui/components/homepage');
var ProjectDetails = require('../imports/ui/components/details');
var Versus = require('../imports/ui/components/versus');
var FinanacialComparison = require('../imports/ui/components/financial_comp');


// Create a component

// Render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Homepage} />
        <Route path="details" component={ProjectDetails} />
        <Route path="versus" component={Versus} />
        <Route path="analysis" component={FinanacialComparison} />
      </Route>
    </Router>
, document.querySelector('.container'));
});
