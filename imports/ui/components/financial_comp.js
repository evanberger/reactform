import React from 'react';
import Form from './form';
import Table from './table';
import BuildingForm from './bldg_form';
import { observer } from 'mobx-react';
import Select2 from 'react-select2-wrapper';
import appState from '../../../client/appState';
import 'react-select2-wrapper/css/select2.css';

var utility = appState.utility;
function commas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


var FinancialComparison = React.createClass({
	getInitialState: function(){
    	return {
      		utility: 'Florida Power & Light'
  		}
  	},
	onSelect2: function(event) {
		this.setState({utility: event.target.value });
		appState.utility = this.state.utility;
		var rates = appState.utilities.map(function(utility) {return utility.rates;});
		console.log(rates);
	},
	  onNameChange: function(e){
      this.setState({name: e.target.value });
      appState.name = e.target.value;

  },
	render: function() {
		var offSeasonMonths = appState.coolingMonths - 4;
		var convSummerDemand = parseInt(appState.load * appState.standardChillerEfficiency,10);
		var convSummerDemandCost = parseInt(convSummerDemand * appState.mockDemand, 10);
		var convSummerConsumption = appState.load * 400;
		var convSummerConsumptionCost = convSummerConsumption * appState.mockConsumption;
		var convSummerCost = convSummerConsumptionCost + convSummerDemandCost;
		var convOffseasonDemand = parseInt(appState.offseason * appState.load * appState.standardChillerEfficiency,10);
		var convOffseasonDemandCost = parseInt(convOffseasonDemand * appState.mockDemand, 10);
		var convOffseasonConsumption = appState.offseason * appState.load * 400;
		var convOffseasonConsumptionCost = convOffseasonConsumption * appState.mockConsumption;
		var convOffseasonCost = convOffseasonConsumptionCost + convOffseasonDemandCost;
		var convCost = (4 * convSummerCost) + (offSeasonMonths * convOffseasonCost);
		var iceChillerSize = 0.6 * appState.load;
		var iceSummerDemand = parseInt(0.6* appState.load * appState.standardChillerEfficiency,10);
		var iceSummerDemandCost = parseInt(iceSummerDemand * appState.mockDemand, 10);
		var iceSummerConsumption = parseInt(1.1 * appState.load * 400,10);
		var iceSummerConsumptionCost = iceSummerConsumption * appState.mockConsumption;
		var iceSummerCost = parseInt(iceSummerConsumptionCost + iceSummerDemandCost,10);
		var iceOffseasonDemand = parseInt(0.6 * appState.offseason * appState.load * appState.standardChillerEfficiency,10);
		var iceOffseasonDemandCost = parseInt(iceOffseasonDemand * appState.mockDemand, 10);
		var iceOffseasonConsumption = parseInt(1.1 * appState.offseason * appState.load * 400, 10);
		var iceOffseasonConsumptionCost = parseInt(iceOffseasonConsumption * appState.mockConsumption,10);
		var iceOffseasonCost = parseInt(iceOffseasonConsumptionCost + iceOffseasonDemandCost,10);
		var iceCost = parseInt(((4 * iceSummerCost) + (offSeasonMonths * iceOffseasonCost)),10);
		appState.costDelta = convCost - iceCost;
		console.log(appState.costDelta);
		return (
			<div>
				<div>
					<Select2
					  className="select2object"
					  ref="utility"
					  value={appState.utility}
					  onSelect={this.onSelect2} 
					  data={[
					    { text: 'Florida Power & Light', id: 'Florida Power & Light' },
					    { text: 'Consumers Energy', id: 'Consumers Energy' },
					    { text: 'ConEdison', id: 'ConEdison' },
					    { text: 'PSEG NJ', id: "PSEG NJ" },
					  ]}
					  />
				</div>
				<div className="row">
					<div className="col-xs-4">
						<table className="table">
						 <tbody>	
							<tr><td><b>Rates Summary</b></td></tr>
							<tr><td>Utility:</td> <td>{appState.utility}</td></tr>
							<tr><td>Rate:</td> <td>{appState.mockRate}</td></tr>
							<tr><td>Demand:</td><td>${appState.mockDemand}/kW</td></tr>
							<tr><td>Consumption:</td><td>${appState.mockConsumption} per kWh</td></tr>
							<tr><td>Taxes & Fees:</td><td>{appState.mockTaxes}%</td></tr>
						 </tbody>
						</table>
					</div>
					<div className="col-xs-4">
						<table className="table">
							<thead>
								<tr><td><b>Scenario #1: Conventional Chiller</b></td></tr>
								<tr><td>Chiller Size: {appState.load} tons</td></tr>
								<tr><td><strong>Item</strong></td><td><b>Amount</b></td><td><b>Cost</b></td></tr>
							</thead>
							<tfoot>
								<tr>
								<td><b>Total Annual Cost</b></td>
								<td></td>
								<td><b>${commas(convCost)}</b></td>
								</tr>
							</tfoot>
							<tbody>
								<tr><td><i>Summer (4 mos.)</i></td></tr>
								<tr>
									<td>Demand</td>
									<td>{commas(convSummerDemand)} kW</td>
									<td>${commas(convSummerDemandCost)}</td>
								</tr>
								<tr>
									<td>Consumption</td>
									<td className="bottom-border">{commas(convSummerConsumption)} kWh</td>
									<td className="bottom-border">${commas(convSummerConsumptionCost)}</td>
								</tr>
								<tr>
									<td><strong>Total before tax</strong></td>
									<td></td>
									<td>${commas(convSummerCost)}</td>
								</tr>
								<tr><td><i>Rest-of-Year ({offSeasonMonths} mos.)</i></td></tr>
								<tr>
									<td>Demand</td>
									<td>{commas(convOffseasonDemand)} kW</td>
									<td>${commas(convOffseasonDemandCost)}</td>
								</tr>
								<tr>
									<td>Consumption</td>
									<td className="bottom-border">{commas(convOffseasonConsumption)} kWh</td>
									<td className="bottom-border">${commas(convOffseasonConsumptionCost)}</td>
								</tr>
								<tr>
									<td><strong>Total before tax</strong></td>
									<td></td>
									<td>${commas(convOffseasonCost)}</td>
								</tr>
							</tbody>
						</table>
					</div>					
					<div className="col-xs-4">
						<table className="table">
							<thead>
								<tr><td><b>Scenario #2: Ice Chiller</b></td></tr>
								<tr><td>Chiller Size: {iceChillerSize} tons</td></tr>
								<tr><td><strong>Item</strong></td><td><b>Amount</b></td><td><b>Cost</b></td></tr>
							</thead>
							<tfoot>
								<tr>
								<td><b>Total Annual Cost</b></td>
								<td></td>
								<td><b>${commas(iceCost)}</b></td>
								</tr>
							</tfoot>
							<tbody>
								<tr><td><i>Summer (4 mos.)</i></td></tr>
								<tr>
									<td>Demand</td>
									<td>{commas(iceSummerDemand)} kW</td>
									<td>${commas(iceSummerDemandCost)}</td>
								</tr>
								<tr>
									<td>Consumption</td>
									<td className="bottom-border">{commas(iceSummerConsumption)} kW</td>
									<td className="bottom-border">${commas(iceSummerConsumptionCost)}</td>
								</tr>
								<tr>
									<td><strong>Total before tax</strong></td>
									<td></td>
									<td>${commas(iceSummerCost)}</td>
								</tr>
								<tr><td><i>Rest-of-Year ({offSeasonMonths} mos.)</i></td></tr>
								<tr>
									<td>Demand</td>
									<td>{commas(iceOffseasonDemand)} kW</td>
									<td>${commas(iceOffseasonDemandCost)}</td>
								</tr>
								<tr>
									<td>Consumption</td>
									<td className="bottom-border">{commas(iceOffseasonConsumption)} kW</td>
									<td className="bottom-border">${commas(iceOffseasonConsumptionCost)}</td>
								</tr>
								<tr>
									<td><strong>Total before tax</strong></td>
									<td></td>
									<td>${commas(iceOffseasonCost)}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = FinancialComparison;