import React from 'react';
import Form from './form';
import Table from './table';
import BuildingForm from './bldg_form';
import { observer } from 'mobx-react';
import appState from '../appState';

var Homepage = React.createClass({
  /*getInitialState: function() {
    return {
      load: 0,
      profile: ''
    }
  },*/
  handleFormSubmit: function(submittedData) {
    var newData = {
      load: submittedData.load,
      profile: submittedData.profile
    }
    ///this.setState({load: newData.load, profile: newData.profile});
    appState.load = newData.load;
    appState.profile = newData.profile;
    if (appState.profile == "Middle School") {
      appState.hours = [ 0, 0, 0, 0, 0, 0, appState.load * 0.25, appState.load * .45,
        appState.load * .75, appState.load * .9, appState.load * 1.0, appState.load * 1.0, appState.load * 1.0, appState.load * 1.0,
        appState.load * .8, appState.load * .5, appState.load * .2, appState.load * .2,
        0, 0, 0, 0, 0, 0];
      } else if (appState.profile =="High School") {
        appState.hours = [ 0, 0, 0, 0, 0, appState.load * .25, appState.load * 0.3, appState.load * .45,
          appState.load * .75, appState.load * .9, appState.load * 1.0, appState.load * 1.0, appState.load * 1.0, appState.load * 1.0,
          appState.load * 1.0, appState.load * .8, appState.load * .8, appState.load * .7, appState.load * .5,
          appState.load * .5, appState.load * .3, appState.load * .2, appState.load * .1, 0];
      } else if (appState.profile =="Office Building") {
        appState.hours = [ appState.load * .1, appState.load * .1, appState.load * .1, appState.load * .1, appState.load * .1,
          appState.load * .1, appState.load * 0.3, appState.load * .35, appState.load * .75,
          appState.load * .9, appState.load * 1.0, appState.load * .9, appState.load * 1.0, appState.load * 1.0, appState.load * 1.0,
          appState.load * 1.0, appState.load * .9, appState.load * .7, appState.load * .6, appState.load * .4,
          appState.load * .4, appState.load * .2, appState.load * .1, appState.load * .1];
      } else if (appState.profile == "College") {
        appState.hours = [ appState.load * .2, appState.load * .2, appState.load * .2, appState.load * .2, appState.load * .2,
          appState.load * .3, appState.load * .4, appState.load * .5, appState.load * .7,
          appState.load * .9, appState.load * 1.0, appState.load * 1.0, appState.load * 1.0, appState.load * 1.0, appState.load * 1.0,
          appState.load * 1.0, appState.load * .8, appState.load * .7, appState.load * .5, appState.load * .5,
          appState.load * .5, appState.load * .5, appState.load * .2, appState.load * .2 ];
      }
      appState.HE1 = appState.hours[0]; appState.HE2 = appState.hours[1]; appState.HE3 = appState.hours[2];
      appState.HE4 = appState.hours[3]; appState.HE5 = appState.hours[4]; appState.HE6 = appState.hours[5];
      appState.HE7 = appState.hours[6]; appState.HE8 = appState.hours[7]; appState.HE9 = appState.hours[8];
      appState.HE10 = appState.hours[9]; appState.HE11 = appState.hours[10]; appState.HE12 = appState.hours[11];
      appState.HE13 = appState.hours[12]; appState.HE14 = appState.hours[13]; appState.HE15 = appState.hours[14]; appState.HE16 = appState.hours[15];
      appState.HE17 = appState.hours[16]; appState.HE18 = appState.hours[17];
      appState.HE19 = appState.hours[18]; appState.HE20 = appState.hours[19]; appState.HE21 = appState.hours[20];
      appState.HE22 = appState.hours[21]; appState.HE23 = appState.hours[22]; appState.HE24 = appState.hours[23];
      console.log("Hour 1 is: " + appState.HE1);
      console.log("Hour 12 is: " + appState.HE12);
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
      ddChillerCost:submittedData.ddChillerCost,
      icebankCost: submittedData.icebankCost,
      hxCost:submittedData.hxCost,
      rebate: submittedData.rebate,
      addlIceCost: submittedData.addlIceCost,
      downsizePipeSavings: submittedData.downsizePipeSavings,
      downsizeDuctSavings: submittedData.downsizeDuctSavings,
      roundDuctSavings: submittedData.roundDuctSavings
    }
    appState.name = newData.name;
    appState.existingRate = newData.existingRate;
    appState.iceStorageRate =newData.iceStorageRate;
    appState.chillerType = newData.chillerType;
    appState.coolingMonths = newData.coolingMonths;
    appState.chillerTonnage = newData.chillerTonnage;
    appState.standardChillerEfficiency = newData.standardChillerEfficiency;
    appState.ddChillerEfficiency = newData.ddChillerEfficiency;
    appState.iceMakingEfficiency = newData.iceMakingEfficiency;
    appState.standardChillerCost = newData.standardChillerCost;
    appState.ddChillerCost = newData.ddChillerCost;
    appState.icebankCost = newData.icebankCost;
    appState.hxCost = newData.hxCost;
    appState.rebate = newData.rebate;
    appState.addlIceCost = newData.addlIceCost;
    appState.downsizePipeSavings = newData.downsizePipeSavings;
    appState.downsizeDuctSavings =  newData.downsizeDuctSavings;
    appState.roundDuctSavings = newData.roundDuctSavings;
    // this.setState({
    //   name: newData.name;
    //   existingRate: newData.existingRate,
    //   iceStorageRate:newData.iceStorageRate,
    //   chillerType:newData.chillerType,
    //   coolingMonths: newData.coolingMonths,
    //   chillerTonnage: newData.chillerTonnage,
    //   standardChillerEfficiency: newData.standardChillerEfficiency,
    //   ddChillerEfficiency: newData.ddChillerEfficiency,
    //   iceMakingEfficiency:newData.iceMakingEfficiency,
    //   standardChillerCost: newData.standardChillerCost,
    //   ddChillerCost:newData.ddChillerCost,
    //   icebankCost: newData.icebankCost,
    //   hxCost:newData.hxCost,
    //   rebate: newData.rebate,
    //   addlIceCost: newData.addlIceCost,
    //   downsizePipeSavings: newData.downsizePipeSavings,
    //   downsizeDuctSavings: newData.downsizeDuctSavings,
    //   roundDuctSavings: newData.roundDuctSavings
    // });
  },
  render: function() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <Form onFormSubmit={this.handleFormSubmit} />
             <div>-------------------</div>
             <Table load={appState.load} profile={appState.profile} />
          </div>
            <div className="row">
            <div className="col-xs-12 col-sm-6">
              <BuildingForm onBuildingFormSubmit={this.handleBuildingFormSubmit} />
              <div>Project Name: {appState.name}</div>
              <div>Peak Load: {appState.load}</div>
              <div>Profile: {appState.profile}</div>
            </div>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = observer(Homepage);
