var React = require('react');
import { observer } from 'mobx-react';
import appState from '../appState';
import * as V from 'victory';
import { VictoryBar, VictoryAxis, VictoryChart, VictoryTheme } from 'victory';
var Homepage = require('./homepage');

var hourValues = [appState.HE1, appState.HE2, appState.HE3, appState.HE4, appState.HE5, appState.HE6, appState.HE7, appState.HE8, appState.HE9, appState.HE10,
                appState.HE11, appState.HE12, appState.HE13, appState.HE14, appState.HE15, appState.HE16, appState.HE17, appState.HE18, appState.HE19, appState.HE20,
                appState.HE21, appState.HE22, appState.HE23, appState.HE24];

var data1 = appState.HE1, data2 = appState.HE2, data3 = appState.HE3, data4 = appState.HE4;
console.log("Hour values are, " + hourValues);


const data = [
  {hour: 1, load: hourValues[0]},
  {hour: 2, load: 60},
  {hour: 3, load: 100},
  {hour: 4, load: 60}
];

var Bar24 = React.createClass({
    render: function() {
        return (
          <div>
            <VictoryChart domainPadding={20} >
              <VictoryBar
                data={data}
                x="hour"
                y="load"
               />
               {/* <VictoryAxis tickValues={["HE1", "HE2", "HE3", "HE4"]} /> */}
            </VictoryChart>
          </div>
          );
    }
});

module.exports = observer(Bar24);
