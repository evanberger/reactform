var React = require('react');
var Header = require('./header');
import { observer } from 'mobx-react';
import appState from '../appState';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

var LoadGraph = React.createClass({
  render: function() {
    
    var peakload = appState.load;
    console.log("Within the LoadGraph, Peak Load equals", peakload);
    console.log("HE1:", appState.HE1 + "HE12:", appState.HE12);
    var scale = [0, peakload *.2, peakload *.4, peakload *.6, peakload *.8, peakload *1];
    var icemakingTons = [], chillerTons = [], iceDispatchTons = [];
    var numArraystring = [appState.HE1, appState.HE2, appState.HE3, appState.HE4, appState.HE5, appState.HE6, appState.HE7, appState.HE8, appState.HE9, appState.HE10, appState.HE11, appState.HE12, appState.HE13, appState.HE14, appState.HE15, appState.HE16, appState.HE17, appState.HE18, appState.HE19, appState.HE20, appState.HE21, appState.HE22, appState.HE23, appState.HE24];
    var typeArray = [appState.type1, appState.type2, appState.type3, appState.type4, appState.type5, appState.type6, appState.type7, appState.type8, appState.type9, appState.type10, appState.type11, appState.type12, appState.type13, appState.type14, appState.type15, appState.type16, appState.type17, appState.type18, appState.type19, appState.type20, appState.type21, appState.type22, appState.type23, appState.type24];
    var partialTons = 0, partialHrs = 0, fullTons = 0, fullHrs = 0, iceTons = 0; iceHrs = 0;
    console.log("Hour 12 type:",appState.type12 + "; Hour 12 load:", appState.HE12);
    console.log(typeArray);
    var numArray = [];

    for (var i = 0; i <= 23; i++) {
      numArray[i] = parseInt(numArraystring[i],10);
    }

      for (var i = 0; i <= 23; i++) {
        if (typeArray[i] == "partial" && numArray[i] > 0) {
          partialTons += numArray[i];
          partialHrs++;
        } else if (typeArray[i] == "icemaking") {
          iceTons += numArray[i];
          iceHrs++;
        } else if (typeArray[i] == "full") {
          fullTons += numArray[i];
          fullHrs++;
        }
      }
      console.log("numArray check:", numArray[12]);
      console.log("numArray check:", parseInt(numArray[12],10));
      console.log("Number of Partial Storage hours: " + partialHrs);
      console.log("Total Partial Storage tons: " + partialTons);
      console.log("Number of Full Storage hours: " + fullHrs);
      console.log("Total Full Storage tons: " + fullTons);

    // Calculate Full Storage Contribution first
      var fullTonsPerHour = fullTons / iceHrs;
      var fullTonsContribution = fullTonsPerHour / 0.65;
      console.log("Full tons needed to make per hr: " + fullTonsPerHour);
      console.log("Full tons 'contribution' to daytime load: " + fullTonsContribution);

    // Calculate key Partial Storage values
      var maxPartialTons = 0, partialDiversity = 0, effectivePartialHrs = 0;

      for (i=0; i < 24; i++) {
        if (typeArray[i] == "partial" && numArray[i] > maxPartialTons) {
          maxPartialTons = numArray[i];
        }
      }

      partialDiversity = (partialTons/partialHrs) / maxPartialTons;
      effectivePartialHrs = iceHrs * partialDiversity;

      console.log("The highest Partial Storage hour is: " + maxPartialTons);
      console.log("The diversity factor for Partial is: "  + partialDiversity);
      console.log("The effective partial hours are: " + effectivePartialHrs);

    // Important "bottom of the spreadsheet" calculations
      var totalPartialTonHrsAfterFullChiller = partialTons - (fullTonsContribution * partialHrs);
      var partialTonsContribution = totalPartialTonHrsAfterFullChiller / (partialHrs + (0.65 * effectivePartialHrs));
      var chillerSize = Math.ceil((partialTonsContribution + fullTonsContribution) / 10) * 10;
      console.log("Chiller size is: " + chillerSize);

    // Number of IceBanks needed to satisy load
    // IBKey is the ton-hours per tank, based on the effective number of ice dispatch hours
      var IBkey = [0, 42.5, 70, 103, 123.5, 130, 142, 148, 152, 152.5, 152.5, 153, 153];
      var IBhours = Math.round(effectivePartialHrs);
      var tonHrsPerTank = IBkey[IBhours];
      var IBtonHrs = iceHrs * (chillerSize * 0.65);
      var IceBanks = Math.ceil(IBtonHrs / tonHrsPerTank);
      // appState.icebanks = IceBanks;
      console.log("Icebanks equal", IceBanks);

    // Define the hourly chiller operation and the ice making and dispatch
      for (var i=0; i < 24; i++) {
        if (typeArray[i] == "icemaking") {
          icemakingTons.push(chillerSize * 0.65);
        } else { icemakingTons.push(0);}
      }
      for (var i=0; i < 24; i++) {
        if (typeArray[i] == "full") {
          iceDispatchTons.push(numArray[i]);
        } else { iceDispatchTons.push(0);}
      }
      for (var i=0; i < 24; i++) {
        chillerTons[i] = 0;
        if (typeArray[i] == "partial") {
          chillerTons[i] = Math.min(chillerSize, numArray[i]);
          iceDispatchTons[i] = Math.max((numArray[i] - chillerSize), 0);
        }
      }

    // Create the Stacked Bar Chart Array
      var stackedBar = [];
      for (var i=0; i < 24; i++) {
        stackedBar[i] = ["HE" + (i+1), icemakingTons[i], chillerTons[i], iceDispatchTons[i]]
      }
      console.log(stackedBar);
      console.log("Ice-making schedule: " + icemakingTons);
      console.log("Chiller schedule: " + chillerTons);
      console.log("Ice Dispatch schedule: " + iceDispatchTons);
      console.log(icemakingTons[0]);

      const data = [
      {name: 'HE1', Icebuild: icemakingTons[0], Chiller: chillerTons[0], Icemelt: iceDispatchTons[0]}, 
      {name: 'HE2', Icebuild: icemakingTons[1], Chiller: chillerTons[1], Icemelt: iceDispatchTons[1]}, 
      {name: 'HE3', Icebuild: icemakingTons[2], Chiller: chillerTons[2], Icemelt: iceDispatchTons[2]}, 
      {name: 'HE4', Icebuild: icemakingTons[3], Chiller: chillerTons[3], Icemelt: iceDispatchTons[3]}, 
      {name: 'HE5', Icebuild: icemakingTons[4], Chiller: chillerTons[4], Icemelt: iceDispatchTons[4]}, 
      {name: 'HE6', Icebuild: icemakingTons[5], Chiller: chillerTons[5], Icemelt: iceDispatchTons[5]}, 
      {name: 'HE7', Icebuild: icemakingTons[6], Chiller: chillerTons[6], Icemelt: iceDispatchTons[6]}, 
      {name: 'HE8', Icebuild: icemakingTons[7], Chiller: chillerTons[7], Icemelt: iceDispatchTons[7]}, 
      {name: 'HE9', Icebuild: icemakingTons[8], Chiller: chillerTons[8], Icemelt: iceDispatchTons[8]}, 
      {name: 'HE10', Icebuild: icemakingTons[9], Chiller: chillerTons[9], Icemelt: iceDispatchTons[9]}, 
      {name: 'HE11', Icebuild: icemakingTons[10], Chiller: chillerTons[10], Icemelt: iceDispatchTons[10]}, 
      {name: 'HE12', Icebuild: icemakingTons[11], Chiller: chillerTons[11], Icemelt: iceDispatchTons[11]}, 
      {name: 'HE13', Icebuild: icemakingTons[12], Chiller: chillerTons[12], Icemelt: iceDispatchTons[12]}, 
      {name: 'HE14', Icebuild: icemakingTons[13], Chiller: chillerTons[13], Icemelt: iceDispatchTons[13]}, 
      {name: 'HE15', Icebuild: icemakingTons[14], Chiller: chillerTons[14], Icemelt: iceDispatchTons[14]}, 
      {name: 'HE16', Icebuild: icemakingTons[15], Chiller: chillerTons[15], Icemelt: iceDispatchTons[15]}, 
      {name: 'HE17', Icebuild: icemakingTons[16], Chiller: chillerTons[16], Icemelt: iceDispatchTons[16]}, 
      {name: 'HE18', Icebuild: icemakingTons[17], Chiller: chillerTons[17], Icemelt: iceDispatchTons[17]}, 
      {name: 'HE19', Icebuild: icemakingTons[18], Chiller: chillerTons[18], Icemelt: iceDispatchTons[18]}, 
      {name: 'HE20', Icebuild: icemakingTons[19], Chiller: chillerTons[19], Icemelt: iceDispatchTons[19]}, 
      {name: 'HE21', Icebuild: icemakingTons[20], Chiller: chillerTons[20], Icemelt: iceDispatchTons[20]}, 
      {name: 'HE22', Icebuild: icemakingTons[21], Chiller: chillerTons[21], Icemelt: iceDispatchTons[21]}, 
      {name: 'HE23', Icebuild: icemakingTons[22], Chiller: chillerTons[22], Icemelt: iceDispatchTons[22]}, 
      {name: 'HE24', Icebuild: icemakingTons[23], Chiller: chillerTons[23], Icemelt: iceDispatchTons[23]}
    ];

      return (
      <div>
          <div className="row">
            <div className="col-xs-3"></div>
            <div className="col-xs-6">
              <h3 className="centered">Peak Day Cooling Load Profile (in tons)</h3>
              <BarChart width={600} height={300} data={data}
                          margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                     <XAxis dataKey="name"/>
                     <YAxis/>
                     <CartesianGrid strokeDasharray="3 3"/>
                     <Tooltip/>
                     <Legend />
                     <Bar dataKey="Icemelt" stackId="a" fill="aquamarine" />
                     <Bar dataKey="Icebuild" stackId="a" fill="steelblue" />
                     <Bar dataKey="Chiller" stackId="a" fill="#82ca9d" />
              </BarChart> 
            </div>
            <div className="col-xs-3"></div>
          </div>
    </div>
    );
  }
});


module.exports = observer(LoadGraph);




      // debugger
      // appState.HE1: 0, appState.HE2: 0, appState.HE3: 0, appState.HE4: 0, appState.HE5: 0, appState.HE6: 0, appState.HE7: 0, appState.HE8: 0, appState.HE9: 0, appState.HE10: 0,
      // appState.HE11: 0, appState.HE12: 0, appState.HE13: 0, appState.HE14: 0, appState.HE15: 0, appState.HE16: 0, appState.HE17: 0, appState.HE18: 0, appState.HE19: 0, appState.HE20: 0,
      // appState.HE21: 0, appState.HE22: 0, appState.HE23: 0, appState.HE24: 0, type1: '', type2: '', type3: '', type4: '', type5: '', type6: '', type7: '', type8: '', type9: '', type10: '',
      // type11: '', type12: '', type13: '', type14: '', type15: '', type16: '', type17: '', type18: '', type19: '', type20: '',
      // type21: '', type22: '', type23: '', type24: '',
      // appState.icemakingTons1 = icemakingTons[0];
      // appState.icemakingTons2 = icemakingTons[1];
      // appState.icemakingTons3 = icemakingTons[2];
      // appState.icemakingTons4 = icemakingTons[3];
      // appState.icemakingTons5 = icemakingTons[4];
      // appState.icemakingTons6 = icemakingTons[5];
      // appState.icemakingTons7 = icemakingTons[6];
      // appState.icemakingTons8 = icemakingTons[7];
      // appState.icemakingTons9 = icemakingTons[8];
      // appState.icemakingTons10 = icemakingTons[9];
      // appState.icemakingTons11 = icemakingTons[10];
      // appState.icemakingTons12 = icemakingTons[11];
      // appState.icemakingTons13 = icemakingTons[12];
      // appState.icemakingTons14 = icemakingTons[13];
      // appState.icemakingTons15 = icemakingTons[14];
      // appState.icemakingTons16 = icemakingTons[15];
      // appState.icemakingTons17 = icemakingTons[16];
      // appState.icemakingTons18 = icemakingTons[17];
      // appState.icemakingTons19 = icemakingTons[18];
      // appState.icemakingTons20 = icemakingTons[19];
      // appState.icemakingTons21 = icemakingTons[20];
      // appState.icemakingTons22 = icemakingTons[21];
      // appState.icemakingTons23 = icemakingTons[22];
      // appState.icemakingTons24 = icemakingTons[23];
      // appState.chillerTons1 = chillerTons[0];
      // appState.chillerTons2 = chillerTons[1];
      // appState.chillerTons3 = chillerTons[2];
      // appState.chillerTons4 = chillerTons[3];
      // appState.chillerTons5 = chillerTons[4];
      // appState.chillerTons6 = chillerTons[5];
      // appState.chillerTons7 = chillerTons[6];
      // appState.chillerTons8 = chillerTons[7];
      // appState.chillerTons9 = chillerTons[8];
      // appState.chillerTons10 = chillerTons[9];
      // appState.chillerTons11 = chillerTons[10];
      // appState.chillerTons12 = chillerTons[11];
      // appState.chillerTons13 = chillerTons[12];
      // appState.chillerTons14 = chillerTons[13];
      // appState.chillerTons15 = chillerTons[14];
      // appState.chillerTons16 = chillerTons[15];
      // appState.chillerTons17 = chillerTons[16];
      // appState.chillerTons18 = chillerTons[17];
      // appState.chillerTons19 = chillerTons[18];
      // appState.chillerTons20 = chillerTons[19];
      // appState.chillerTons21 = chillerTons[20];
      // appState.chillerTons22 = chillerTons[21];
      // appState.chillerTons23 = chillerTons[22];
      // appState.chillerTons24 = chillerTons[23];
      // appState.iceDispatchTons1 = iceDispatchTons[0];
      // appState.iceDispatchTons2 = iceDispatchTons[1];
      // appState.iceDispatchTons3 = iceDispatchTons[2];
      // appState.iceDispatchTons4 = iceDispatchTons[3];
      // appState.iceDispatchTons5 = iceDispatchTons[4];
      // appState.iceDispatchTons6 = iceDispatchTons[5];
      // appState.iceDispatchTons7 = iceDispatchTons[6];
      // appState.iceDispatchTons8 = iceDispatchTons[7];
      // appState.iceDispatchTons9 = iceDispatchTons[8];
      // appState.iceDispatchTons10 = iceDispatchTons[9];
      // appState.iceDispatchTons11 = iceDispatchTons[10];
      // appState.iceDispatchTons12 = iceDispatchTons[11];
      // appState.iceDispatchTons13 = iceDispatchTons[12];
      // appState.iceDispatchTons14 = iceDispatchTons[13];
      // appState.iceDispatchTons15 = iceDispatchTons[14];
      // appState.iceDispatchTons16 = iceDispatchTons[15];
      // appState.iceDispatchTons17 = iceDispatchTons[16];
      // appState.iceDispatchTons18 = iceDispatchTons[17];
      // appState.iceDispatchTons19 = iceDispatchTons[18];
      // appState.iceDispatchTons20 = iceDispatchTons[19];
      // appState.iceDispatchTons21 = iceDispatchTons[20];
      // appState.iceDispatchTons22 = iceDispatchTons[21];
      // appState.iceDispatchTons23 = iceDispatchTons[22];
      // appState.iceDispatchTons24 = iceDispatchTons[23];


    
    
    // var data = icemakingTons.map(function(ton,index){
    //       return  {
    //         name : 'HE'+index,
    //         IceMake : ton ,
    //         IceDispatch :iceDispatchTons[index] ,
    //         Chiller : chillerTons[index],
    //       };
      // });
    //  const data = [
    //   {name: 'HE1', IceMake: {appState.icemakingTons1}, IceDispatch: {appstate.iceDispatchTons1}, Chiller: {appstate.chillerTons1}},
    //   {name: 'HE2', IceMake: {appState.icemakingTons2}, IceDispatch: {appstate.iceDispatchTons2}, Chiller: {appstate.chillerTons2}},
    //   {name: 'HE3', IceMake: {appState.icemakingTons3}, IceDispatch: {appstate.iceDispatchTons3}, Chiller: {appstate.chillerTons3}},
    //   {name: 'HE4', IceMake: {appState.icemakingTons4}, IceDispatch: {appstate.iceDispatchTons4}, Chiller: {appstate.chillerTons4}},
    //   {name: 'HE5', IceMake: {appState.icemakingTons5}, IceDispatch: {appstate.iceDispatchTons5}, Chiller: {appstate.chillerTons5}},
    //   {name: 'HE6', IceMake: {appState.icemakingTons6}, IceDispatch: {appstate.iceDispatchTons6}, Chiller: {appstate.chillerTons6}},
    //   {name: 'HE7', IceMake: {appState.icemakingTons7}, IceDispatch: {appstate.iceDispatchTons7}, Chiller: {appstate.chillerTons7}},
    //   {name: 'HE8', IceMake: {appState.icemakingTons8}, IceDispatch: {appstate.iceDispatchTons8}, Chiller: {appstate.chillerTons8}},
    //   {name: 'HE9', IceMake: {appState.icemakingTons9}, IceDispatch: {appstate.iceDispatchTons9}, Chiller: {appstate.chillerTons9}},
    //   {name: 'HE10', IceMake: {appState.icemakingTons10}, IceDispatch: {appstate.iceDispatchTons10}, Chiller: {appstate.chillerTons10}},
    //   {name: 'HE11', IceMake: {appState.icemakingTons11}, IceDispatch: {appstate.iceDispatchTons11}, Chiller: {appstate.chillerTons11}},
    //   {name: 'HE12', IceMake: {appState.icemakingTons12}, IceDispatch: {appstate.iceDispatchTons12}, Chiller: {appstate.chillerTons12}},
    //   {name: 'HE13', IceMake: {appState.icemakingTons13}, IceDispatch: {appstate.iceDispatchTons13}, Chiller: {appstate.chillerTons13}},
    //   {name: 'HE14', IceMake: {appState.icemakingTons14}, IceDispatch: {appstate.iceDispatchTons14}, Chiller: {appstate.chillerTons14}},
    //   {name: 'HE15', IceMake: {appState.icemakingTons15}, IceDispatch: {appstate.iceDispatchTons15}, Chiller: {appstate.chillerTons15}},
    //   {name: 'HE16', IceMake: {appState.icemakingTons16}, IceDispatch: {appstate.iceDispatchTons16}, Chiller: {appstate.chillerTons16}},
    //   {name: 'HE17', IceMake: {appState.icemakingTons17}, IceDispatch: {appstate.iceDispatchTons17}, Chiller: {appstate.chillerTons17}},
    //   {name: 'HE18', IceMake: {appState.icemakingTons18}, IceDispatch: {appstate.iceDispatchTons18}, Chiller: {appstate.chillerTons18}},
    //   {name: 'HE19', IceMake: {appState.icemakingTons19}, IceDispatch: {appstate.iceDispatchTons19}, Chiller: {appstate.chillerTons19}},
    //   {name: 'HE20', IceMake: {appState.icemakingTons20}, IceDispatch: {appstate.iceDispatchTons20}, Chiller: {appstate.chillerTons20}},
    //   {name: 'HE21', IceMake: {appState.icemakingTons21}, IceDispatch: {appstate.iceDispatchTons21}, Chiller: {appstate.chillerTons21}},
    //   {name: 'HE22', IceMake: {appState.icemakingTons22}, IceDispatch: {appstate.iceDispatchTons22}, Chiller: {appstate.chillerTons22}},
    //   {name: 'HE23', IceMake: {appState.icemakingTons23}, IceDispatch: {appstate.iceDispatchTons1}, Chiller: {appstate.chillerTons23}},
    //   {name: 'HE24', IceMake: {appState.icemakingTons24}, IceDispatch: {appstate.iceDispatchTons1}, Chiller: {appstate.chillerTons24}},

    // ];

      // var icemakingTonsObject = [
      //   {hour: 1, {appState.icemakingTons1}, {hour: 2, appState.icemakingTons2},
      //   {hour: 3, appState.icemakingTons3},{hour: 4, appState.icemakingTons4},{hour: 5, appState.icemakingTons5},
      //   {hour: 6, appState.icemakingTons6},{hour: 7, appState.icemakingTons7},{hour: 8, appState.icemakingTons8},{hour: 9, appState.icemakingTons9},{hour: 10, appState.icemakingTons10},{hour: 11, appState.icemakingTons11},
      //   {hour: 12, appState.icemakingTons12},
      //   {hour: 13, appState.icemakingTons13},{hour: 14, appState.icemakingTons13},{hour: 15, appState.icemakingTons14},
      //   {hour: 16, appState.icemakingTons16},{hour: 17, appState.icemakingTons17},{hour: 18, appState.icemakingTons18},{hour: 19, appState.icemakingTons19},{hour: 20, appState.icemakingTons20},{hour: 21, appState.icemakingTons20},
      //   {hour: 22, appState.icemakingTons22}, {hour: 23, appState.icemakingTons23}, {hour: 24, appState.icemakingTons24}];
      // var chillerTonsObject = [
      //   {hour: 1, appState.chillerTons1}, {hour: 2, appState.chillerTons2},
      //   {hour: 3, appState.chillerTons3},{hour: 4, appState.chillerTons4},{hour: 5, appState.chillerTons5},
      //   {hour: 6, appState.chillerTons6},{hour: 7, appState.chillerTons7},{hour: 8, appState.chillerTons8},{hour: 9, appState.chillerTons9},{hour: 10, appState.chillerTons10},{hour: 11, appState.chillerTons11},
      //   {hour: 12, appState.chillerTons12},
      //   {hour: 13, appState.chillerTons13},{hour: 14, appState.chillerTons14},{hour: 15, appState.chillerTons15},
      //   {hour: 16, appState.chillerTons16},{hour: 17, appState.chillerTons17},{hour: 18, appState.chillerTons18},{hour: 19, appState.chillerTons19},{hour: 20, appState.chillerTons20},{hour: 21, appState.chillerTons21},
      //   {hour: 22, appState.chillerTons22}, {hour: 23, appState.chillerTons23}, {hour: 24, appState.chillerTons24}];
      // var iceDispatchTonsObject = [
      //   {hour: 1, appState.iceDispatchTons0}, {hour: 2, appState.iceDispatchTons1},
      //   {hour: 3, appState.iceDispatchTons2},{hour: 4, appState.iceDispatchTons3},{hour: 5, appState.iceDispatchTons4},
      //   {hour: 6, appState.iceDispatchTons5},{hour: 7, appState.iceDispatchTons6},{hour: 8, appState.iceDispatchTons7},{hour: 9, appState.iceDispatchTons8},{hour: 10, appState.iceDispatchTons9},{hour: 11, appState.iceDispatchTons10},
      //   {hour: 11, appState.iceDispatchTons10}, {hour: 12, appState.iceDispatchTons11},
      //   {hour: 13, appState.iceDispatchTons12},{hour: 14, appState.iceDispatchTons13},{hour: 15, appState.iceDispatchTons14},
      //   {hour: 16, appState.iceDispatchTons15},{hour: 17, appState.iceDispatchTons16},{hour: 18, appState.iceDispatchTons17},{hour: 19, appState.iceDispatchTons18},{hour: 20, appState.iceDispatchTons19},{hour: 21, appState.iceDispatchTons20},
      //   {hour: 22, appState.iceDispatchTons21}, {hour: 23, appState.iceDispatchTons22}, {hour: 24, appState.iceDispatchTons23}];
