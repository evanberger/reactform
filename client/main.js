// Any JS in here is automatically ran for us

// Import the React library
var React = require('react');
var ReactDOM = require('react-dom');
import Collapsible from 'react-collapsible';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Form = require('./components/form');
var Table = require('./components/table');
var BuildingForm = require('./components/bldg_form');
var Header = require('./components/header');
var LoadGraph = require('./components/load_graph');
var Author = require('./components/author');

// Create a component
var App = React.createClass({
  getInitialState: function() {
    return {
      load: 0,
      profile: '',
      name: '',
      existingRate: '',
      iceStorageRate: '',
      chillerType: '',
      coolingMonths: 8,
      chillerTonnage: 0,
      standardChillerEfficiency: 0,
      ddChillerEfficiency: 0,
      iceMakingEfficiency: 0,
      standardChillerCost: 0,
      ddChillerCost: 0,
      icebankCost: 0,
      hxCost: 0,
      rebate: 0,
      addlIceCost: 0,
      taxes: 0,
      downsizePipeSavings: 0,
      downsizeDuctSavings: 0,
      roundDuctSavings: 0
    };
  },
  handleFormSubmit: function(submittedData) {
    var newData = {
      load: submittedData.load,
      profile: submittedData.profile
    }
    this.setState({load: newData.load, profile: newData.profile});
  },
  handleBuildingFormSubmit: function(submittedData) {
    var newData = {
      name: submittedData.name,
      existingRate: submittedData.existingRate,
      iceStorageRate:submittedData.iceStorageRate,
      chillerType:submittedData.chillerType,
      coolingMonths: submittedData.coolingMonths,
      chillerTonnage: submittedData.chillerTonnage,
      standardChillerEfficiency: submittedData.standardChillerEfficiency,
      ddChillerEfficiency: submittedData.ddChillerEfficiency,
      iceMakingEfficiency:submittedData.iceMakingEfficiency,
      standardChillerCost: submittedData.standardChillerCost,
      ddChillerCost:submittedData.icemakingChillerCost,
      icebankCost: submittedData.icebankCost,
      hxCost:submittedData.hxCost,
      rebate: submittedData.rebate,
      addlIceCost: submittedData.addlIceCost,
      downsizePipeSavings: submittedData.downsizePipeSavings,
      downsizeDuctSavings: submittedData.downsizeDuctSavings,
      roundDuctSavings: submittedData.roundDuctSavings
    }
    this.setState({
      name: newData.name,
      existingRate: newData.existingRate,
      iceStorageRate:newData.iceStorageRate,
      chillerType:newData.chillerType,
      coolingMonths: newData.coolingMonths,
      chillerTonnage: newData.chillerTonnage,
      standardChillerEfficiency: newData.standardChillerEfficiency,
      ddChillerEfficiency: newData.ddChillerEfficiency,
      iceMakingEfficiency:newData.iceMakingEfficiency,
      standardChillerCost: newData.standardChillerCost,
      ddChillerCost:newData.icemakingChillerCost,
      icebankCost: newData.icebankCost,
      hxCost:newData.hxCost,
      rebate: newData.rebate,
      addlIceCost: newData.addlIceCost,
      downsizePipeSavings: newData.downsizePipeSavings,
      downsizeDuctSavings: newData.downsizeDuctSavings,
      roundDuctSavings: newData.roundDuctSavings
    });
  },
    render: function () {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-6">
            <Form onFormSubmit={this.handleFormSubmit} />
             <div>-------------------</div>
             <Table load={this.state.load} profile={this.state.profile} />
          </div>
          <div className="col-xs-6">
            <BuildingForm onFormSubmit={this.handleBuildingFormSubmit} />
          </div>
        </div>
        <div className="row">
          // components go here
        </div>
      </div>
    );
    }
  });

// Render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="loadgraph" component={LoadGraph}/>
        <IndexRoute component={Author} />
      </Route>
    </Router>
, document.querySelector('.container'));
});
