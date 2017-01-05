var React = require('react');
import Collapsible from 'react-collapsible';
import appState from '../appState';
import DevTools from 'mobx-react-devtools';

var BuildingForm = React.createClass({
  handleChange: function(event) {
    console.log('Changing text...');
  },
  getInitialState: function(){
    return {
      name: '',
      existingRate: '',
      iceStorageRate: '',
      chillerType: 'Air-Cooled',
      coolingMonths: 8,
      chillerTonnage: 0,
      ACcheckboxChecked: false,
      WCcheckboxChecked: false,
      standardChillerEfficiency: '',
      ddChillerEfficiency: '',
      iceMakingEfficiency: '',
      standardChillerCost: 1250,
      ddChillerCost: 1250,
      icebankCost: 20000,
      hxCost: 0,
      rebate: 0,
      addlIceCost: 0,
      downsizeDuctSavings: 0,
      downsizePipeSavings: 0,
      roundDuctSavings: 0
    }
  },
  // My attempt to toggle air-cooled/water-cooled; not working
  chillerType: function() {
    if (appState.chillerType == "Water-Cooled") {
      appState.chillerType = "Air-Cooled";
    } else {
      appState.chillerType = "Water-Cooled";
    }
  },
  handleACcheckbox: function (e) {
    appState.chillerType = "Air-Cooled";
    appState.standardChillerEfficiency = 1.10;
    appState.ddChillerEfficiency = 1.10;
    appState.iceMakingEfficiency = 1.10;
    appState.WCcheckboxChecked = false;
    appState.ACcheckboxChecked = true;
    this.setState({
      ACcheckboxChecked: e.target.checked,
      standardChillerEfficiency: 1.10,
      ddChillerEfficiency: 1.10,
      iceMakingEfficiency: 1.10,
      chillerType: 'Air-Cooled',
      WCcheckboxChecked: false
    });
  },
  handleWCcheckbox: function (e) {
    appState.chillerType = "Water-Cooled";
    appState.standardChillerEfficiency = 0.8;
    appState.ddChillerEfficiency = 0.85;
    appState.iceMakingEfficiency = 0.9;
    appState.ACcheckboxChecked = false;
    appState.WCcheckboxChecked = true;
    this.setState({
      WCcheckboxChecked: e.target.checked,
      standardChillerEfficiency: .8,
      ddChillerEfficiency: .85,
      iceMakingEfficiency: .9,
      chillerType: "Water-Cooled",
      ACcheckboxChecked: false
    });
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var submittedData = {
      name: this.refs.name.value,
      existingRate: this.refs.existingRate.value,
      iceStorageRate:this.refs.iceStorageRate.value,
      chillerType:this.refs.chillerType.value,
      coolingMonths: this.refs.coolingMonths.value,
      standardChillerEfficiency: this.refs.standardChillerEfficiency.value,
      ddChillerEfficiency: this.refs.ddChillerEfficiency.value,
      iceMakingEfficiency:this.refs.iceMakingEfficiency.value,
      standardChillerCost: this.refs.standardChillerCost.value,
      ddChillerCost:this.refs.ddChillerCost.value,
      icebankCost: this.refs.icebankCost.value,
      hxCost:this.refs.hxCost.value,
      rebate: this.refs.rebate.value,
      addlIceCost: this.refs.addlIceCost.value,
      downsizeDuctSavings: this.refs.downsizeDuctSavings.value,
      downsizePipeSavings: this.refs.downsizePipeSavings.value,
      roundDuctSavings: this.refs.roundDuctSavings.value
    };
    // Here, this.props.onFormSubmit is just linking Parent to child
    // It has no other purpose.
    this.props.onBuildingFormSubmit(submittedData);
    console.log(submittedData.name);
    console.log("Name is: " + appState.name);
  },
  onNameChange: function(e){
      this.setState({name: e.target.value });
      appState.name = e.target.value;

  },
  onExistingRateChange: function(e){
      this.setState({existingRate: e.target.value });
      appState.existingRate = e.target.value;
  },
  onIceStorageRateChange: function(e){
      this.setState({iceStorageRate: e.target.value });
      appState.iceStorageRate = e.target.value;
  },
  onCoolingMonthsChange: function(e) {
    this.setState({coolingMonths: e.target.value});
    appState.coolingMonths = e.target.value;
  },
  onChillerTypeChange: function(e){
      this.setState({chillerType: e.target.value });
      appState.chillerType = e.target.value;
  },
  // onChillerTonnageChange: function(e){
  //     this.setState({chillerTonnage: e.target.value })
  // },
  onStandardChillerEfficiencyChange: function(e){
      this.setState({standardChillerEfficiency: e.target.value });
      appState.standardChillerEfficiency = e.target.value;
  },
  onDdChillerEfficiencyChange: function(e){
      this.setState({ddChillerEfficiency: e.target.value });
      appState.ddChillerEfficiency = e.target.value;
  },
  onIceMakingEfficiencyChange: function(e){
      this.setState({iceMakingEfficiency: e.target.value });
      appState.iceMakingEfficiency = e.target.value;
  },
  onStandardChillerCostChange: function(e){
      this.setState({standardChillerCost: e.target.value });
      appState.standardChillerCost = e.target.value;
  },
  onDdChillerCostChange: function(e){
      this.setState({ddChillerCost: e.target.value });
      appState.ddChillerCost = e.target.value;
  },
  onIceBankCostChange: function(e){
      this.setState({icebankCost: e.target.value });
      appState.icebankCost = e.target.value;
  },
  onHxCostChange: function(e){
      this.setState({hxCost: e.target.value });
      appState.hxCost = e.target.value;
  },
  onRebateChange: function(e){
      this.setState({rebate: e.target.value });
      appState.rebate = e.target.value;
  },
  onAddlIceCostChange: function(e){
      this.setState({addlIceCost: e.target.value });
      appState.addlIceCost = e.target.value;
  },
  onDownsizeDuctSavingsChange: function(e){
      this.setState({downsizeDuctSavings: e.target.value });
      appState.downsizeDuctSavings = e.target.value;
  },
  onDownsizePipeSavingsChange: function(e){
      this.setState({downsizePipeSavings: e.target.value });
      appState.downsizePipeSavings = e.target.value;
  },
  onRoundDuctSavingsChange: function(e){
      this.setState({roundDuctSavings: e.target.value });
      appState.roundDuctSavings = e.target.value;
  },
    render: function () {

    return (
      <div>
      <DevTools />
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
      <div>
        <Collapsible trigger="General Project Info" open="true">
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Project Name</label>
          <div className="col-xs-6">
            <input
              onChange={this.onNameChange}
              value={appState.name}
              ref="name" id="name" className="form-control" className="form-control" type="text" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Existing Rate</label>
          <div className="col-xs-6">
            <select
              onChange={this.onExistingRateChange}
              value={appState.existingRate}
              ref="existingRate" id="existingRate" className="form-control">
              <option value="LGS">LGS</option>
              <option value="LGS-TOU">LGS-TOU</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Ice Storage Rate</label>
          <div className="col-xs-6">
            <select
              onChange={this.onIceStorageRateChange}
              value={appState.iceStorageRate}
              ref="iceStorageRate" id="iceStorageRate" className="form-control">
              <option value="LGS">LGS</option>
              <option value="LGS-TOU">LGS-TOU</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Months of Cooling</label>
          <div className="col-xs-6">
            <select
              onChange={this.onCoolingMonthsChange}
              value={appState.coolingMonths}
              ref="coolingMonths" id="coolingMonths" className="form-control">
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>
        </Collapsible>
        <Collapsible trigger="Chiller Plant Info">
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Air-Cooled / Water-Cooled</label>
          <div className="col-xs-6">
            <select ref="chillerType"
              onChange={this.onChillerTypeChange}
              value={appState.chillerType}
              id="chillerType" className="form-control">
              <option value="Air-Cooled">Air-Cooled</option>
              <option value="Water-Cooled">Water-Cooled</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Use Air-Cooled Defaults</label>
          <span className="col-xs-1 form-group-addon">
            <input type="checkbox" checked={appState.ACcheckboxChecked}
              onChange={this.handleACcheckbox}/>
          </span>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Use Water-Cooled Defaults</label>
          <span className="col-xs-1 form-group-addon">
            <input type="checkbox" checked={appState.WCcheckboxChecked}
              onChange={this.handleWCcheckbox}/>
          </span>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Chiller Efficiency, standard chiller</label>
          <div className="col-xs-6 input-group">
            <input type="number" ref="standardChillerEfficiency"
              value={appState.standardChillerEfficiency}
              onChange={this.onStandardChillerEfficiencyChange}
              min={0.5} max={2} step={.01}
              className="form-control" id="standardChillerEfficiency" />
            <div className="input-group-addon">kW/ton</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Dual-Duty Chiller Efficiency</label>
          <div className="col-xs-6 input-group">
            <input type="number" ref="ddChillerEfficiency"
              value={appState.ddChillerEfficiency}
              onChange={this.onDdChillerEfficiencyChange}
              min={0.5} max={2} step={.01}
              className="form-control" id="ddChillerEfficiency" />
            <div className="input-group-addon">kW/ton</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Ice-Making Chiller Efficiency</label>
          <div className="input-group col-xs-6">
            <input ref="iceMakingEfficiency" className="form-control"
              value={appState.iceMakingEfficiency}
              onChange={this.onIceMakingEfficiencyChange}
              min={0.5} max={2} step={.01}
               id="iceMakingEfficiency" type="number"/>
            <div className="input-group-addon">kW/ton</div>
          </div>
        </div>
        </Collapsible>
        <Collapsible trigger="Upfront Costs & Financial Variables">
        <div className="form-group row">
        <label className="col-xs-5 col-form-label">Non Ice Chiller Cost:</label>
          <div className="input-group col-xs-6">
            <div className="input-group-addon">$</div>
            <input
              onChange={this.onStandardChillerCostChange}
              value={appState.standardChillerCost}
              ref="standardChillerCost" className="form-control" id="standardChillerCost" type="number" placeholder="500"/>
            <div className="input-group-addon">/ton</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Ice-Making Chiller Cost:</label>
          <div className="input-group col-xs-6">
            <div className="input-group-addon">$</div>
            <input
              onChange={this.onDdChillerCostChange}
              value={appState.ddChillerCost}
              ref="ddChillerCost" className="form-control" id="icemakingChillerCost" type="number" placeholder="500" />
            <div className="input-group-addon">/ton</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label" htmlFor="icebankCost">Cost per IceBank tank</label>
          <div className="input-group col-xs-6">
            <div className="input-group-addon">$</div>
            <input
              onChange={this.onIceBankCostChange}
              value={appState.icebankCost}
              ref="icebankCost" className="form-control" id="icebankCost" type="number" placeholder="20,000"/>
            <div className="input-group-addon">/tank</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Cost for Plate-Frame HX</label>
          <div className="input-group col-xs-6">
            <div className="input-group-addon">$</div>
            <input
              onChange={this.onHxCostChange}
              value={appState.hxCost}
              ref="hxCost" className="form-control" id="hxCost" type="number" placeholder="60"/>
            <div className="input-group-addon">/ton</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Addl Costs for Ice Storage</label>
          <div className="input-group col-xs-6">
            <div className="input-group-addon">$</div>
            <input
              onChange={this.onAddlIceCostChange}
              value={appState.addlIceCost}
              ref="addlIceCost" className="form-control" id="addlIceCost" type="number" placeholder="60,000"/>
          </div>
        </div>
        <div className="form-group row  ">
          <label className="col-xs-5 col-form-label">Rebate</label>
          <div className="input-group col-xs-6">
            <div className="input-group-addon">$</div>
            <input
              onChange={this.onRebateChange}
              value={appState.rebate}
              ref="rebate" className="form-control" id="rebate" type="number" placeholder="0"/>
            <div className="input-group-addon">/kW</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Savings from Downsized Ductwork</label>
          <div className="input-group col-xs-6">
            <div className="input-group-addon">$</div>
            <input
              onChange={this.onDownsizeDuctSavingsChange}
              value={appState.downsizeDuctSavings}
              ref="downsizeDuctSavings" className="form-control" id="downsizeDuctSavings" type="number" placeholder="0"/>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Savings from Downsized Piping & Pumps</label>
          <div className="input-group col-xs-6">
            <div className="input-group-addon">$</div>
            <input
              onChange={this.onDownsizePipeSavingsChange}
              value={appState.downsizePipeSavings}
              ref="downsizePipeSavings" className="form-control" id="downsizePipeSavings" type="number" placeholder="0"/>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Savings from Round Ductwork</label>
          <div className="input-group col-xs-6">
            <div className="input-group-addon">$</div>
            <input
              onChange={this.onRoundDuctSavingsChange}
              value={appState.roundDuctSavings}
              ref="roundDuctSavings" className="form-control" id="roundDuctSavings" type="number" placeholder="0"/>
          </div>
        </div>
        </Collapsible>
      </div>
      <button className="btn btn-block btn-primary homebutton">Submit</button>
    </form>
    </div>
  );
  }
});

// Export goes here
module.exports = BuildingForm;
