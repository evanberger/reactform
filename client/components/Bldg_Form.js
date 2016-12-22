var React = require('react');
import Collapsible from 'react-collapsible';

var BuildingForm = React.createClass({
  handleChange: function(event) {
    console.log('Changing text...');
  },
  handleSubmit: function(event) {
    event.preventDefault();
    console.log(this.refs.load.value);
    var submittedData = {
      name: this.refs.name.value,
      existingRate: this.refs.existingRate.value,
      iceStorageRate:this.refs.iceStorageRate.value,
      chillerType:this.refs.chillerType.value,
      coolingMonths: this.refs.coolingMonths.value,
      chillerTonnage: this.refs.chillerTonnage.value,
      standardChillerEfficiency: this.refs.standardChillerEfficiency.value,
      ddChillerEfficiency: this.refs.ddChillerEfficiency.value,
      iceMakingEfficiency:this.refs.iceMakingEfficiency.value,
      standardChillerCost: this.refs.standardChillerCost.value,
      ddChillerCost:this.refs.icemakingChillerCost.value,
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
    this.refs.load.value = 0;
    this.refs.profile.value = '';
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
      <div>
        <Collapsible trigger="General Project Info" open="true">
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Project Name</label>
          <div className="col-xs-6">
            <input ref="name" id="name" className="form-control" className="form-control" type="text" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Existing Rate</label>
          <div className="col-xs-6">
            <select ref="existingRate" id="existingRate" className="form-control">
              <option value="LGS">LGS</option>
              <option value="LGS-TOU">LGS-TOU</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Ice Storage Rate</label>
          <div className="col-xs-6">
            <select ref="iceStorageRate" id="iceStorageRate" className="form-control">
              <option value="LGS">LGS</option>
              <option value="LGS-TOU">LGS-TOU</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Months of Cooling</label>
          <div className="col-xs-6">
            <select ref="coolingMonths" id="coolingMonths" className="form-control">
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8" selected>8</option>
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
            <select ref="chillerType" id="chillerType" className="form-control">
              <option value="Air-Cooled">Air-Cooled</option>
              <option value="Water-Cooled">Water-Cooled</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Chiller Tonnage</label>
          <div className="col-xs-6">
            <input ref="chillerTonnage" id="chillerTonnage" className="form-control" type="text"/>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Chiller Efficiency, standard chiller</label>
          <div className="col-xs-6 input-group">
            <input ref="standardChillerEfficiency" className="form-control" id="standardChillerEfficiency" type="number"/>
            <div className="input-group-addon">kW/ton</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Dual-Duty Chiller Efficiency</label>
          <div className="col-xs-6 input-group">
            <input ref="ddChillerEfficiency" className="form-control" id="ddChillerEfficiency" type="number"/>
            <div className="input-group-addon">kW/ton</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Ice-Making Chiller Efficiency</label>
          <div className="input-group col-xs-6">
            <input ref="iceMakingEfficiency" className="form-control" id="iceMakingEfficiency" type="number"/>
            <div className="input-group-addon">kW/ton</div>
          </div>
        </div>
        </Collapsible>
        <Collapsible trigger="Upfront Costs & Financial Variables">
        <div className="form-group row">
        <label className="col-xs-5 col-form-label">Non Ice Chiller Cost:</label>
          <div className="input-group col-xs-6">
            <div className="input-group-addon">$</div>
            <input ref="standardChillerCost" className="form-control" id="nonIceChillerCost" type="number" placeholder="500"/>
            <div className="input-group-addon">/ton</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Ice-Making Chiller Cost:</label>
          <div className="input-group col-xs-6">
            <div className="input-group-addon">$</div>
            <input ref="ddChillerCost" className="form-control" id="icemakingChillerCost" type="number" placeholder="500" />
            <div className="input-group-addon">/ton</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label" htmlFor="icebankCost">Cost per IceBank tank</label>
          <div className="input-group col-xs-6">
            <div className="input-group-addon">$</div>
            <input ref="icebankCost" className="form-control" id="icebankCost" type="number" placeholder="14,000"/>
            <div className="input-group-addon">/tank</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Cost for Plate-Frame HX</label>
          <div className="input-group col-xs-6">
            <div className="input-group-addon">$</div>
            <input ref="hxCost" className="form-control" id="hxCost" type="number" placeholder="60"/>
            <div className="input-group-addon">/ton</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Addl Costs for Ice Storage</label>
          <div className="input-group col-xs-6">
            <div className="input-group-addon">$</div>
            <input ref="addlIceCost" className="form-control" id="addlIceCost" type="number" placeholder="60,000"/>
          </div>
        </div>
        <div className="form-group row  ">
          <label className="col-xs-5 col-form-label">Rebate</label>
          <div className="input-group col-xs-6">
            <div className="input-group-addon">$</div>
            <input ref="rebate" className="form-control" id="rebate" type="number" placeholder="0"/>
            <div className="input-group-addon">/kW</div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Savings from Downsized Ductwork</label>
          <div className="input-group col-xs-6">
            <div className="input-group-addon">$</div>
            <input ref="downsizeDuctSavings" className="form-control" id="downsizeDuctSavings" type="number" placeholder="0"/>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Savings from Downsized Piping & Pumps</label>
          <div className="input-group col-xs-6">
            <div className="input-group-addon">$</div>
            <input ref="downsizePipeSavings" className="form-control" id="downsizePipeSavings" type="number" placeholder="0"/>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-5 col-form-label">Savings from Round Ductwork</label>
          <div className="input-group col-xs-6">
            <div className="input-group-addon">$</div>
            <input ref="roundDuctSavings" className="form-control" id="roundDuctSavings" type="number" placeholder="0"/>
          </div>
        </div>
        </Collapsible>
      </div>

    </form>
  );
  }
});

// Export goes here
module.exports = BuildingForm;
