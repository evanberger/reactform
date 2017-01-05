var React = require('react');
var Homepage = require('./homepage');
import { observer } from 'mobx-react';
import appState from '../appState';



var ProjectDetails = React.createClass({
  render: function() {
    const datum1 = [
      {hour: 1, load: appState.HE1},
      {hour: 2, load: appState.HE2},
      {hour: 3, load: appState.HE3},
      {hour: 4, load: appState.HE4},
      {hour: 5, load: appState.HE5},
      {hour: 6, load: appState.HE6},
      {hour: 7, load: appState.HE7},
      {hour: 8, load: appState.HE8},
      {hour: 9, load: appState.HE9},
      {hour: 10, load: appState.HE10},
      {hour: 11, load: appState.HE11},
      {hour: 12, load: appState.HE12},
      {hour: 13, load: appState.HE13},
      {hour: 14, load: appState.HE14},
      {hour: 15, load: appState.HE15},
      {hour: 16, load: appState.HE16},
      {hour: 17, load: appState.HE17},
      {hour: 18, load: appState.HE18},
      {hour: 19, load: appState.HE19},
      {hour: 20, load: appState.HE20},
      {hour: 21, load: appState.HE21},
      {hour: 22, load: appState.HE22},
      {hour: 23, load: appState.HE23},
      {hour: 24, load: appState.HE24}
    ];
    var maxLoad = Math.max.apply(Math,datum1.map(function(o){return o.load;}));
    console.log("Max load is:", maxLoad);
    var scale = [0, maxLoad *.2, maxLoad *.4, maxLoad *.6, maxLoad *.8, maxLoad *1];
    return (
      <div>
        <div className="row">
          <div className="col-xs-5">
          <div className="form-group row">
            <div className="col-xs-5 col-form-label">Project Name: </div>
            <div className="col-xs-6">{appState.name}</div>
          </div>
          <div className="form-group row">
            <div className="col-xs-5 col-form-label">Existing Rate: </div>
            <div className="col-xs-6">{appState.existingRate}</div>
          </div>
          <div className="form-group row">
            <div className="col-xs-5 col-form-label">Ice Storage Rate: </div>
            <div className="col-xs-6">{appState.iceStorageRate}</div>
          </div>
          <div className="form-group row">
            <div className="col-xs-5 col-form-label">Months of Cooling: </div>
            <div className="col-xs-6">{appState.coolingMonths}</div>
          </div>
          <div className="form-group row">
            <div className="col-xs-5 col-form-label">Air-Cooled / Water-Cooled</div>
            <div className="col-xs-6">{appState.chillerType}</div>
          </div>
          <div className="form-group row">
            <div className="col-xs-5 col-form-label">Chiller Tonnage</div>
            <div className="col-xs-6">{appState.chillerTonnage}</div>
          </div>
          <div className="form-group row">
            <div className="col-xs-5 col-form-label">Chiller Efficiency, standard chiller: </div>
            <div className="col-xs-6 input-group">{appState.standardChillerEfficiency} kW/ton</div>
          </div>
          <div className="form-group row">
            <div className="col-xs-5 col-form-label">Dual-Duty Chiller Efficiency</div>
            <div className="col-xs-6 input-group">{appState.ddChillerEfficiency} kW/ton</div>
          </div>
          <div className="form-group row">
            <div className="col-xs-5 col-form-label">Ice-Making Chiller Efficiency</div>
            <div className="input-group col-xs-6">{appState.iceMakingEfficiency} kW/ton</div>
          </div>
        </div>

      </div>
    </div>
  );
}
});
        {/*<div id="detailsChart">
           <Sparklines data={datum1}>
            <SparklinesBars style={{stroke: "white", fill: "#41c3f9"}} />
          </Sparklines>
           <Chart
           title={title}
           width={width}
           height={height}
           margins= {margins}
           >
           <BarChart
             margins= {margins}
             title={title}
             data={datum1}
             width={width}
             height={height}
             chartSeries={chartSeries}
             x={x}
           />
         </Chart>
        </div> */}




module.exports = observer(ProjectDetails);
