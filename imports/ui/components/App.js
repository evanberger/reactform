var React = require('react');
import Collapsible from 'react-collapsible';
var Header = require('./header');
var Form = require('./form');
var Table = require('./table');
var BuildingForm = require('./bldg_form');
import { observer } from 'mobx-react';
import appState from '../../../client/appState'


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
    render: function () {
    return (
      <div>
        <Header />
        <div>{this.props.children}</div>
          {/* <div onClick={ function(){ appState.glName="New title for glName" } }>changeTitle</div> */}
        </div>
    );
    }
  });
module.exports = observer(App);
