var React = require('react');
var Homepage = require('./homepage');
import { observer } from 'mobx-react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import appState from '../appState';


function commas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

var Versus = React.createClass({
  render: function() {
    var standardChillerPlantCost = appState.standardChillerCost * appState.load;
    var iceChillerPlantCost = 0.6 * appState.ddChillerCost * appState.load;
    var icebanks = Math.ceil(0.4 * (appState.load/20));
    var icebankPlantCost = icebanks * appState.icebankCost;
    var PFHXCost = appState.load * appState.hxCost;
    var additionalCost = appState.addlIceCost;
    var rebateSavings = 0.4 * appState.load * appState.standardChillerEfficiency * appState.rebate;
    var iceTotal = 0.1 * (iceChillerPlantCost + icebankPlantCost + appState.addlIceCost);
    var demandCharge = 20, months = appState.coolingMonths, kWReduced = ((appState.load *0.4) * appState.standardChillerEfficiency);
    var totalSavings = demandCharge * months * kWReduced;
    var costDifference = iceTotal - standardChillerPlantCost;
    var payback = costDifference / totalSavings; 
    console.log("Total ice costs are", iceTotal);


    ((iceTotal - standardChillerPlantCost) / totalSavings);
    var standardChillerPlantCostString = commas(standardChillerPlantCost); 

    var peakload = appState.load;
    var chiller = peakload * .6;
    var ice = peakload * .4;
    var iceMaking = peakload *.45;
    var iceMakingData = [{hour: 1, load: iceMaking}, {hour: 2, load: iceMaking}, {hour:3, load: iceMaking},{hour:4, load: iceMaking}, {hour:5, load: iceMaking},{hour:6, load: iceMaking}, {hour:7, load: 0}, {hour:8, load: 0}, {hour:9, load: 0}, {hour:10, load: 0},{hour:11, load: 0},{hour:12, load: 0},{hour:13, load: 0},{hour:14, load: 0},{hour:15, load: 0},{hour:16, load: 0},{hour:17, load: 0},{hour:18, load: 0},{hour:19, load: 0},{hour:20, load: 0},{hour:21, load: 0},{hour:22, load: 0},{hour:23, load: iceMaking}, {hour:24, load: iceMaking}];
    var chillerData = [{hour:1, load: 0},{hour:2, load: 0},{hour:3, load: 0},{hour:4, load: 0},{hour:5, load: 0},{hour:6, load: 0},{hour:7, load: 0},{hour:8, load: 0}, {hour:9, load: chiller}, {hour:10, load: chiller}, {hour:11, load: chiller}, {hour:12, load: chiller}, {hour:13, load: chiller}, {hour:14, load: chiller}, {hour:15, load: chiller}, {hour:16, load: chiller}, {hour:17, load: 0},{hour:18, load: 0},{hour:19, load: 0},{hour:20, load: 0},{hour:21, load: 0},{hour:22, load: 0},{hour:23, load: 0}, {hour: 24, load: 0}];
    var iceData = [{hour:1, load: 0},{hour:2, load: 0},{hour:3, load: 0},{hour:4, load: 0},{hour:5, load: 0},{hour:6, load: 0},{hour:7, load: 0},{hour:8, load: 0}, {hour:9, load: ice}, {hour:10, load: ice}, {hour:11, load: ice}, {hour:12, load: ice}, {hour:13, load: ice}, {hour:14, load: ice}, {hour:15, load: ice}, {hour:16, load: ice}, {hour:17, load: 0},{hour:18, load: 0},{hour:19, load: 0},{hour:20, load: 0},{hour:21, load: 0},{hour:22, load: 0},{hour:23, load: 0}, {hour:24, load: 0}];
    var num1 = appState.HE12, num2 = 200;
    // var iceChillerPlantCostString = commas(iceChillerPlantCost), rebateSavingsString = commas(rebateSavings),
    //       icebankPlantCostString = commas(icebankPlantCost), PFHXCostString = commas(PFHXCost),
    //       additionalCostString = commas(additionalCost),  iceTotalString = commas(iceTotal);
          
    const data = [
      {name: 'HE1', Icebuild: iceMakingData[0].load, Chiller: chillerData[0].load, Icemelt: iceData[0].load}, 
      {name: 'HE2', Icebuild: iceMakingData[1].load, Chiller: chillerData[1].load, Icemelt: iceData[1].load}, 
      {name: 'HE3', Icebuild: iceMakingData[2].load, Chiller: chillerData[2].load, Icemelt: iceData[2].load}, 
      {name: 'HE4', Icebuild: iceMakingData[3].load, Chiller: chillerData[3].load, Icemelt: iceData[3].load}, 
      {name: 'HE5', Icebuild: iceMakingData[4].load, Chiller: chillerData[4].load, Icemelt: iceData[4].load}, 
      {name: 'HE6', Icebuild: iceMakingData[5].load, Chiller: chillerData[5].load, Icemelt: iceData[5].load}, 
      {name: 'HE7', Icebuild: iceMakingData[6].load, Chiller: chillerData[6].load, Icemelt: iceData[6].load}, 
      {name: 'HE8', Icebuild: iceMakingData[7].load, Chiller: chillerData[7].load, Icemelt: iceData[7].load}, 
      {name: 'HE9', Icebuild: iceMakingData[8].load, Chiller: chillerData[8].load, Icemelt: iceData[8].load}, 
      {name: 'HE10', Icebuild: iceMakingData[9].load, Chiller: chillerData[9].load, Icemelt: iceData[9].load}, 
      {name: 'HE11', Icebuild: iceMakingData[10].load, Chiller: chillerData[10].load, Icemelt: iceData[10].load}, 
      {name: 'HE12', Icebuild: iceMakingData[11].load, Chiller: chillerData[11].load, Icemelt: iceData[11].load}, 
      {name: 'HE13', Icebuild: iceMakingData[12].load, Chiller: chillerData[12].load, Icemelt: iceData[12].load}, 
      {name: 'HE14', Icebuild: iceMakingData[13].load, Chiller: chillerData[13].load, Icemelt: iceData[13].load}, 
      {name: 'HE15', Icebuild: iceMakingData[14].load, Chiller: chillerData[14].load, Icemelt: iceData[14].load}, 
      {name: 'HE16', Icebuild: iceMakingData[15].load, Chiller: chillerData[15].load, Icemelt: iceData[15].load}, 
      {name: 'HE17', Icebuild: iceMakingData[16].load, Chiller: chillerData[16].load, Icemelt: iceData[16].load}, 
      {name: 'HE18', Icebuild: iceMakingData[17].load, Chiller: chillerData[17].load, Icemelt: iceData[17].load}, 
      {name: 'HE19', Icebuild: iceMakingData[18].load, Chiller: chillerData[18].load, Icemelt: iceData[18].load}, 
      {name: 'HE20', Icebuild: iceMakingData[19].load, Chiller: chillerData[19].load, Icemelt: iceData[19].load}, 
      {name: 'HE21', Icebuild: iceMakingData[20].load, Chiller: chillerData[20].load, Icemelt: iceData[20].load}, 
      {name: 'HE22', Icebuild: iceMakingData[21].load, Chiller: chillerData[21].load, Icemelt: iceData[21].load}, 
      {name: 'HE23', Icebuild: iceMakingData[22].load, Chiller: chillerData[22].load, Icemelt: iceData[22].load}, 
      {name: 'HE24', Icebuild: iceMakingData[23].load, Chiller: chillerData[23].load, Icemelt: iceData[23].load}
    ];
    return (
    <div className="versus">
     <div className="row">
       <div className="col-xs-2"></div>
       <div className="col-xs-4">
      <table  className="table">
        <tbody>
          <tr>
            <td><strong>Scenario 1: {appState.load}-ton chiller</strong></td>
          </tr>
          <tr>
            <td>Chiller</td>
            <td>${commas(standardChillerPlantCost)}</td>
          </tr>
          <tr><td>.</td></tr>
          <tr><td>.</td></tr>
          <tr><td>.</td></tr>
          <tr><td>.</td></tr>
          <tr><td>.</td></tr>
          <tr className="summation">
            <td>Total:</td>
            <td><strong>${commas(standardChillerPlantCost)}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="col-xs-4">
      <table className="table">
        <tbody>
          <tr>
            <td><strong>Scenario 2: {0.6 * appState.load}-ton chiller, {icebanks} IceBanks</strong></td>
          </tr>
          <tr>
            <td>Chiller</td>
            <td>${commas(iceChillerPlantCost)}</td>
          </tr>
          <tr>
            <td>IceBanks</td>
            <td>${commas(icebankPlantCost)}</td>
          </tr>
          <tr>
            <td>PFHX</td>
            <td>${commas(PFHXCost)}</td>
          </tr>
          <tr>
            <td>less Mechanical Deducts</td>
            <td>${0}</td>
          </tr>
          <tr>
            <td>less Rebate</td>
            <td className="red">${commas(rebateSavings)}</td>
          </tr>
          <tr>
            <td>Additional Costs</td>
            <td>${commas(additionalCost)}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td><strong>${commas(iceTotal)}</strong></td>
          </tr>
        </tbody>
        </table>
       </div>
       <div className="col-xs-2"></div>
      </div>
    <div className="row">
    <div className="col-xs-4"></div>
    <div className="col-xs-4">
      <table className="table">
        <tbody>
        <tr>
          <td><strong>Savings Analysis</strong></td>
      </tr>
        <tr>
          <td>Load Shifted:</td>
          <td>{kWReduced} kW</td>
        </tr>
        <tr>
          <td>Months of Cooling</td>
          <td>{months} mos.</td>
        </tr>
        <tr>
          <td>Demand Charge</td>
          <td>${(demandCharge).toFixed(2)} per kW</td>
        </tr>
        <tr>
          <td>Cost Differential</td>
          <td>${commas(costDifference)}</td>
        </tr>
        <tr>
          <td>Total Annual Savings</td>
          <td>${commas(totalSavings)}</td>
        </tr>
        <tr>
          <td>Payback</td>
          <td><strong>{(payback).toFixed(2)} years</strong></td>
        </tr>
      </tbody>
      </table>
    </div>
    <div className="col-xs-4"></div>
    </div>
  <div className="row">
    <div className="col-xs-3"></div>
    <div className="col-xs-6">
      <BarChart width={600} height={300} data={data}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="Icemelt" stackId="a" fill="aquamarine" />
       <Bar dataKey="Icebuild" stackId="a" fill="#8884d8" />
       <Bar dataKey="Chiller" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
    <div className="col-xs-3"></div>
  </div>
    </div>
    );
}
});

module.exports = observer(Versus);
