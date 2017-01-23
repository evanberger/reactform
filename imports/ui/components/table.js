var React = require('react');
import { observer } from 'mobx-react';
import appState from '../../../client/appState';

var Table = React.createClass({
  getDefaultProps: function() {
    var load, HE1, HE2, HE3, HE4, HE5, HE6, HE7, HE8, HE9, HE10,
        HE11, HE12, HE13, HE14, HE15, HE16, HE17, HE18, HE19, HE20,
        HE21, HE22, HE23, HE24 = 0;
    var profile = "...";
  },
  getInitialState(){
    return {
      allTypesSelected: false,
      HE1: 0, HE2: 0, HE3: 0, HE4: 0, HE5: 0, HE6: 0, HE7: 0, HE8: 0,
      HE9: 0, HE10: 0, HE11: 0, HE12: 0, HE13: 0, HE14: 0, HE15: 0, HE16: 0,
      HE17: 0, HE18: 0, HE19: 0, HE20: 0, HE21: 0, HE22: 0, HE23: 0, HE24: 0,
      type1: 0, type2: 0, type3: 0, type4: 0, type5: 0, type6: 0, type7: 0,
      type8: 0, type9: 0, type10: 0, type11: 0, type12: 0, type13: 0, type14: 0,
      type15: 0, type16: 0, type17: 0, type18: 0, type19: 0, type20: 0, type21: 0,
      type22: 0, type23: 0, type24: 0,
      load: 0,
      profile: "..."
    }
  },


onFormSubmit: function(e) {
  e.preventDefault();
  var load = appState.load;
  var profile = appState.profile;
  this.setState({
    // load: load, profile: profile,
      type1: this.refs.type1.value,
      type2: this.refs.type2.value,
      type3: this.refs.type3.value,
      type4: this.refs.type4.value,
      type5: this.refs.type5.value,
      type6: this.refs.type6.value,
      type7: this.refs.type7.value,
      type8: this.refs.type8.value,
      type9: this.refs.type9.value,
      type10: this.refs.type10.value,
      type11: this.refs.type11.value,
      type12: this.refs.type12.value,
      type13: this.refs.type13.value,
      type14: this.refs.type14.value,
      type15: this.refs.type15.value,
      type16: this.refs.type16.value,
      type17: this.refs.type17.value,
      type18: this.refs.type18.value,
      type19: this.refs.type19.value,
      type20: this.refs.type20.value,
      type21: this.refs.type21.value,
      type22: this.refs.type22.value,
      type23: this.refs.type23.value,
      type24: this.refs.type24.value
    });

    appState.type1 = this.refs.type1.value;
    appState.type2 = this.refs.type2.value;
    appState.type3 = this.refs.type3.value;
    appState.type4 = this.refs.type4.value;
    appState.type5 = this.refs.type5.value;
    appState.type6 = this.refs.type6.value;
    appState.type7 = this.refs.type7.value;
    appState.type8 = this.refs.type8.value;
    appState.type9 = this.refs.type9.value;
    appState.type10 = this.refs.type10.value;
    appState.type11 = this.refs.type11.value;
    appState.type12 = this.refs.type12.value;
    appState.type13 = this.refs.type13.value;
    appState.type14 = this.refs.type14.value;
    appState.type15 = this.refs.type15.value;
    appState.type16 = this.refs.type16.value;
    appState.type17 = this.refs.type17.value;
    appState.type18 = this.refs.type18.value;
    appState.type19 = this.refs.type19.value;
    appState.type20 = this.refs.type20.value;
    appState.type21 = this.refs.type21.value;
    appState.type22 = this.refs.type22.value;
    appState.type23 = this.refs.type23.value;
    appState.type24 = this.refs.type24.value;


  if (profile == "Office Building") {
    this.setState({
      HE1: load * 0.1,
      HE2: load * 0.1,
      HE3: load * 0.1,
      HE4: load * 0.1,
      HE5: load * 0.1,
      HE6: load * 0.1,
      HE7: load * 0.3,
      HE8: load * .35,
      HE9: load * .75,
      HE10: load * .9,
      HE11: load,
      HE12: load * .9,
      HE13: load,
      HE14: load,
      HE15: load,
      HE16: load,
      HE17: load * .9,
      HE18: load * .7,
      HE19: load * .6,
      HE20: load * .4,
      HE21: load * .4,
      HE22: load * .2,
      HE23: load * .2,
      HE24: load * .1
  });

  } else if (profile=="High School") {
    this.setState({
      HE1: 0,
      HE2: 0,
      HE3: 0,
      HE4: 0,
      HE5: 0,
      HE6: load * 0.25,
      HE7: load * 0.3,
      HE8: load * .45,
      HE9: load * .75,
      HE10: load * .9,
      HE11: load,
      HE12: load,
      HE13: load,
      HE14: load,
      HE15: load,
      HE16: load * .8,
      HE17: load * .8,
      HE18: load * .7,
      HE19: load * .5,
      HE20: load * .5,
      HE21: load * .3,
      HE22: load * .2,
      HE23: load * .1,
      HE24: load * .0
    });
  } else if (profile=="Middle School") {
    // var newHours = this.state.hours.map(function (val, index) {
    // if (index < 6 || index > 18) {
    //   val.load = 0;
    //   return val;
    // }
    // switch(index) {
    //   case 6:
    //     val.load = load * 0.25;
    //   case 7:
    //   ....




    // }
    // return val;
    // }) 
    this.setState(
      
      {
      HE1: 0,
      HE2: 0,
      HE3: 0,
      HE4: 0,
      HE5: 0,
      HE6: 0,
      HE7: load * 0.25,
      HE8: load * .45,
      HE9: load * .75,
      HE10: load * .9,
      HE11: load,
      HE12: load,
      HE13: load,
      HE14: load,
      HE15: load * .8,
      HE16: load * .5,
      HE17: load * .2,
      HE18: load * .2,
      HE19: 0,
      HE20: 0,
      HE21: 0,
      HE22: 0,
      HE23: 0,
      HE24: 0
    });
  } else if (profile=="College") {
    this.setState({
      HE1: load * .2,
      HE2: load * .2,
      HE3: load * .2,
      HE4: load * .2,
      HE5: load * .2,
      HE6: load * .3,
      HE7: load * .4,
      HE8: load * .5,
      HE9: load * .7,
      HE10: load * .9,
      HE11: load,
      HE12: load,
      HE13: load,
      HE14: load,
      HE15: load,
      HE16: load,
      HE17: load * .8,
      HE18: load * .7,
      HE19: load * .5,
      HE20: load * .5,
      HE21: load * .5,
      HE22: load * .5,
      HE23: load * .2,
      HE24: load * .2
});
}
    appState.HE1 = this.refs.HE1.value;
    appState.HE2 = this.refs.HE2.value;
    appState.HE3 = this.refs.HE3.value;
    appState.HE4 = this.refs.HE4.value;
    appState.HE5 = this.refs.HE5.value;
    appState.HE6 = this.refs.HE6.value;
    appState.HE7 = this.refs.HE7.value;
    appState.HE8 = this.refs.HE8.value;
    appState.HE9 = this.refs.HE9.value;
    appState.HE10 = this.refs.HE10.value;
    appState.HE11 = this.refs.HE11.value;
    appState.HE12 = this.refs.HE12.value;
    appState.HE13 = this.refs.HE13.value;
    appState.HE14 = this.refs.HE14.value;
    appState.HE15 = this.refs.HE15.value;
    appState.HE16 = this.refs.HE16.value;
    appState.HE17 = this.refs.HE17.value;
    appState.HE18 = this.refs.HE18.value;
    appState.HE19 = this.refs.HE19.value;
    appState.HE20 = this.refs.HE20.value;
    appState.HE21 = this.refs.HE21.value;
    appState.HE22 = this.refs.HE22.value;
    appState.HE23 = this.refs.HE23.value;
    appState.HE24 = this.refs.HE24.value;
},
  onHE1Change: function(e) {

    this.setState({HE1:e.target.value});
    appState.HE1 = e.target.value;
  },
  onHE2Change: function(e) {
    this.setState({HE2:e.target.value});
    appState.HE2 = e.target.value;
  },
  onHE3Change: function(e) {
    this.setState({HE3:e.target.value});
    appState.HE3 = e.target.value;
  },
  onHE4Change: function(e) {
    this.setState({HE4:e.target.value});
    appState.HE4 = e.target.value;
  },
  onHE5Change: function(e) {
    this.setState({HE5:e.target.value});
    appState.HE5 = e.target.value;
  },
  onHE6Change: function(e) {
    this.setState({HE6:e.target.value});
    appState.HE6 = e.target.value;
  },
  onHE7Change: function(e) {
    this.setState({HE7:e.target.value});
    appState.HE7 = e.target.value;
  },
  onHE8Change: function(e) {
    this.setState({HE8:e.target.value});
    appState.HE8 = e.target.value;
  },
  onHE9Change: function(e) {
    this.setState({HE9:e.target.value});
    appState.HE9 = e.target.value;
  },
  onHE10Change: function(e) {
    this.setState({HE10:e.target.value});
    appState.HE10 = e.target.value;
  },
  onHE11Change: function(e) {
    this.setState({HE11:e.target.value});
    appState.HE11 = e.target.value;
  },
  onHE12Change: function(e) {
    this.setState({HE12:e.target.value});
    appState.HE12 = e.target.value;
  },
  onHE13Change: function(e) {
    this.setState({HE13:e.target.value});
    appState.HE13 = e.target.value;
  },
  onHE14Change: function(e) {
    this.setState({HE14:e.target.value});
    appState.HE14 = e.target.value;
  },
  onHE15Change: function(e) {
    this.setState({HE15:e.target.value});
    appState.HE15 = e.target.value;
  },
  onHE16Change: function(e) {
    this.setState({HE16:e.target.value});
    appState.HE16 = e.target.value;
  },
  onHE17Change: function(e) {
    this.setState({HE17:e.target.value});
    appState.HE17 = e.target.value;
  },
  onHE18Change: function(e) {
    this.setState({HE18:e.target.value});
    appState.HE18 = e.target.value;
  },
  onHE19Change: function(e) {
    this.setState({HE19:e.target.value});
    appState.HE19 = e.target.value;
  },
  onHE20Change: function(e) {
    this.setState({HE20:e.target.value});
    appState.HE20 = e.target.value;
  },
  onHE21Change: function(e) {
    this.setState({HE21:e.target.value});
    appState.HE21 = e.target.value;
  },
  onHE22Change: function(e) {
    this.setState({HE22:e.target.value});
    appState.HE22 = e.target.value;
  },
  onHE23Change: function(e) {
    this.setState({HE23:e.target.value});
    appState.HE23 = e.target.value;
  },
  onHE24Change: function(e) {
    this.setState({HE24:e.target.value});
    appState.HE24 = e.target.value;
  },
  ontype1Change: function(e) {
    this.setState({type1:e.target.value});
  },
  ontype2Change: function(e) {
    this.setState({type2:e.target.value});
  },
  ontype3Change: function(e) {
    this.setState({type3:e.target.value});
  },
  ontype3Change: function(e) {
    this.setState({type3:e.target.value});
  },
  ontype4Change: function(e) {
    this.setState({type4:e.target.value});
  },
  ontype5Change: function(e) {
    this.setState({type5:e.target.value});
  },
  ontype6Change: function(e) {
    this.setState({type6:e.target.value});
  },
  ontype7Change: function(e) {
    this.setState({type7:e.target.value});
  },
  ontype8Change: function(e) {
    this.setState({type8:e.target.value});
  },
  ontype9Change: function(e) {
    this.setState({type9:e.target.value});
  },
  ontype10Change: function(e) {
    this.setState({type10:e.target.value});
  },
  ontype11Change: function(e) {
    this.setState({type11:e.target.value});
  },
  ontype12Change: function(e) {
    this.setState({type12:e.target.value});
  },
  ontype13Change: function(e) {
    this.setState({type13:e.target.value});
  },
  ontype14Change: function(e) {
    this.setState({type14:e.target.value});
  },
  ontype15Change: function(e) {
    this.setState({type15:e.target.value});
  },
  ontype16Change: function(e) {
    this.setState({type16:e.target.value});
  },
  ontype17Change: function(e) {
    this.setState({type17:e.target.value});
  },
  ontype18Change: function(e) {
    this.setState({type18:e.target.value});
  },
  ontype19Change: function(e) {
    this.setState({type19:e.target.value});
  },
  ontype20Change: function(e) {
    this.setState({type20:e.target.value});
  },
  ontype21Change: function(e) {
    this.setState({type21:e.target.value});
  },
  ontype22Change: function(e) {
    this.setState({type22:e.target.value});
  },
  ontype23Change: function(e) {
    this.setState({type23:e.target.value});
  },
  ontype24Change: function(e) {
    this.setState({type24:e.target.value});
  },
  render: function() {
        return(
            <div>
              <table>
                <thead id="headeroverride" className="panel-heading">
                  <tr>
                    <th>Profile is: {appState.profile}</th>
                  </tr>
                  <tr>
                    <th>Peak Load is: {appState.load}</th>
                  </tr>
                </thead>
              </table>
              <form onSubmit={this.onFormSubmit}>
               <table id="hrstable">
                <thead className="tableheader">
                  <th className="leftmost"><strong>Hour Ending</strong></th>
                  <th className="hourType"><strong>Type</strong></th>
                  <th className="rightmost"><strong>Cooling Load</strong></th>
                </thead>
                <tbody>
                  <tr>
                    <td className="leftmost">HE1</td>
                    <td className="hourType">
                      <select ref="type1"
                        onChange={this.ontype1Change} 
                        defaultValue={"icemaking"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE1" id="HE1"
                        value={appState.HE1}
                        onChange={this.onHE1Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE2</td>
                    <td className="hourType">
                      <select ref="type2"
                        onChange={this.ontype2Change} defaultValue={"icemaking"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE2" id="HE2"
                        value={appState.HE2}
                        onChange={this.onHE2Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE3</td>
                    <td className="hourType">
                      <select ref="type3"
                        onChange={this.ontype3Change} defaultValue={"icemaking"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE3" id="HE3"
                        value={appState.HE3}
                        onChange={this.onHE3Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE4</td>
                    <td className="hourType">
                      <select ref="type4"
                        onChange={this.ontype4Change} defaultValue={"icemaking"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE4" id="HE4"
                        value={appState.HE4}
                        onChange={this.onHE4Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE5</td>
                    <td className="hourType">
                      <select ref="type5"
                        onChange={this.ontype5Change} defaultValue={"icemaking"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE5" id="HE5"
                        value={appState.HE5}
                        onChange={this.onHE5Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE6</td>
                    <td className="hourType">
                      <select ref="type6"
                        onChange={this.ontype6Change} defaultValue={"icemaking"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE6" id="HE6"
                        value={appState.HE6}
                        onChange={this.onHE6Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE7</td>
                    <td className="hourType">
                      <select ref="type7"
                        onChange={this.ontype7Change} defaultValue={"na"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE7" id="HE7"
                        value={appState.HE7}
                        onChange={this.onHE7Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE8</td>
                    <td className="hourType">
                      <select ref="type8"
                        onChange={this.ontype8Change} defaultValue={"na"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE8" id="HE8"
                        value={appState.HE8}
                        onChange={this.onHE8Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE9</td>
                    <td className="hourType">
                      <select ref="type9"
                        onChange={this.ontype9Change} defaultValue={"partial"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE9" id="HE9"
                        value={appState.HE9}
                        onChange={this.onHE9Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE10</td>
                    <td className="hourType">
                      <select ref="type10"
                        onChange={this.ontype10Change} defaultValue={"partial"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE10" id="HE10"
                        value={appState.HE10}
                        onChange={this.onHE10Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE11</td>
                    <td className="hourType">
                      <select ref="type11"
                        onChange={this.ontype11Change} defaultValue={"partial"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE11" id="HE11"
                        value={appState.HE11}
                        onChange={this.onHE11Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE12</td>
                    <td className="hourType">
                      <select ref="type12"
                        onChange={this.ontype12Change} defaultValue={"partial"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE12" id="HE12"
                        value={appState.HE12}
                        onChange={this.onHE12Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE13</td>
                    <td className="hourType">
                      <select ref="type13"
                        onChange={this.ontype13Change} defaultValue={"partial"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE13" id="HE13"
                        value={appState.HE13}
                        onChange={this.onHE13Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE14</td>
                    <td className="hourType">
                      <select ref="type14"
                        onChange={this.ontype14Change} defaultValue={"partial"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE14" id="HE14"
                        value={appState.HE14}
                        onChange={this.onHE14Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE15</td>
                    <td className="hourType">
                      <select ref="type15"
                        onChange={this.ontype15Change} defaultValue={"partial"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE15" id="HE15"
                        value={appState.HE15}
                        onChange={this.onHE15Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE16</td>
                    <td className="hourType">
                      <select ref="type16"
                        onChange={this.ontype16Change} defaultValue={"partial"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE16" id="HE16"
                        value={appState.HE16}
                        onChange={this.onHE16Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE17</td>
                    <td className="hourType">
                      <select ref="type17"
                        onChange={this.ontype17Change} defaultValue={"partial"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE17" id="HE17"
                        value={appState.HE17}
                        onChange={this.onHE17Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE18</td>
                    <td className="hourType">
                      <select ref="type18"
                        onChange={this.ontype18Change} defaultValue={"partial"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE18" id="HE18"
                        value={appState.HE18}
                        onChange={this.onHE18Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE19</td>
                    <td className="hourType">
                      <select ref="type19"
                        onChange={this.ontype19Change} defaultValue={"partial"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE19" id="HE19"
                        value={appState.HE19}
                        onChange={this.onHE19Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE20</td>
                    <td className="hourType">
                      <select ref="type20"
                        onChange={this.ontype20Change} defaultValue={"na"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE20" id="HE20"
                        value={appState.HE20}
                        onChange={this.onHE20Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE21</td>
                    <td className="hourType">
                      <select ref="type21"
                        onChange={this.ontype21Change}  defaultValue={"na"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE21" id="HE21"
                        value={appState.HE21}
                        onChange={this.onHE21Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE22</td>
                    <td className="hourType">
                      <select ref="type22"
                        onChange={this.ontype22Change}  defaultValue={"icemaking"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE22" id="HE22"
                        value={appState.HE22}
                        onChange={this.onHE22Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE23</td>
                    <td className="hourType">
                      <select ref="type23"
                        onChange={this.ontype23Change} defaultValue={"icemaking"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE23" id="HE23"
                        value={appState.HE23}
                        onChange={this.onHE23Change} />
                    </td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE24</td>
                    <td className="hourType">
                      <select ref="type24"
                        onChange={this.ontype24Change} defaultValue={"icemaking"}>
                        <option value="none">-- Select Hour Type --</option>
                        <option value="partial">Partial Storage</option>
                        <option value="full">Full Storage</option>
                        <option value="icemaking">Ice-Making</option>
                        <option value="na">No Action</option>
                      </select>
                    </td>
                    <td className="rightmost">
                      <input type="number" ref="HE24" id="HE24"
                        value={appState.HE24}
                        onChange={this.onHE24Change} />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="btn btn-block btn-primary homebutton">Submit</button>
            </form>

      </div>
    );

}
});

module.exports = observer(Table);


