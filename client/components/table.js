var React = require('react');

// If Manual: create a new table of inputs, and onSubmit, have all of those
// inputs be set to an HE1 var (using this.refs?)

var Table = React.createClass({
  getDefaultProps: function() {
    var HE1, HE2, HE3, HE4, HE5, HE6, HE7, HE8, HE9, HE10,
        HE11, HE12, HE13, HE14, HE15, HE16, HE17, HE18, HE19, HE20,
        HE21, HE22, HE23, HE24 = 0;
    var profile = "Not Yet Chosen";
  },
  render: function() {
	var load = this.props.load;
  var profile = this.props.profile;
  if (profile == "Office Building") {
    var HE1 = load * 0.1;
    var HE2 = load * 0.1;
    var HE3 = load * 0.1;
    var HE4 = load * 0.1;
    var HE5 = load * 0.1;
    var HE6 = load * 0.1;
    var HE7 = load * 0.3;
    var HE8 = load * .35;
    var HE9 = load * .75;
    var HE10 = load * .9;
    var HE11 = load;
    var HE12 = load * .9;
    var HE13 = load;
    var HE14 = load;
    var HE15 = load;
    var HE16 = load;
    var HE17 = load * .9;
    var HE18 = load * .7;
    var HE19 = load * .6;
    var HE20 = load * .4;
    var HE21 = load * .4;
    var HE22 = load * .2;
    var HE23 = load * .2;
    var HE24 = load * .1;
  } else if (profile=="High School") {
    var HE1 = 0;
    var HE2 = 0;
    var HE3 = 0;
    var HE4 = 0;
    var HE5 = 0;
    var HE6 = load * 0.25;
    var HE7 = load * 0.3;
    var HE8 = load * .45;
    var HE9 = load * .75;
    var HE10 = load * .9;
    var HE11 = load;
    var HE12 = load;
    var HE13 = load;
    var HE14 = load;
    var HE15 = load;
    var HE16 = load * .8;
    var HE17 = load * .8;
    var HE18 = load * .7;
    var HE19 = load * .5;
    var HE20 = load * .5;
    var HE21 = load * .3;
    var HE22 = load * .2;
    var HE23 = load * .1;
    var HE24 = load * .0;
  } else if (profile=="Middle School") {
    var HE1 = 0;
    var HE2 = 0;
    var HE3 = 0;
    var HE4 = 0;
    var HE5 = 0;
    var HE6 = 0;
    var HE7 = load * 0.25;
    var HE8 = load * .45;
    var HE9 = load * .75;
    var HE10 = load * .9;
    var HE11 = load;
    var HE12 = load;
    var HE13 = load;
    var HE14 = load;
    var HE15 = load * .8;
    var HE16 = load * .5;
    var HE17 = load * .2;
    var HE18 = load * .2;
    var HE19 = 0;
    var HE20 = 0;
    var HE21 = 0;
    var HE22 = 0;
    var HE23 = 0;
    var HE24 = 0;
  } else if (profile=="College") {
    var HE1 = load * .2;
    var HE2 = load * .2;
    var HE3 = load * .2;
    var HE4 = load * .2;
    var HE5 = load * .2;
    var HE6 = load * .3;
    var HE7 = load * .4;
    var HE8 = load * .5;
    var HE9 = load * .7;
    var HE10 = load * .9;
    var HE11 = load;
    var HE12 = load;
    var HE13 = load;
    var HE14 = load;
    var HE15 = load;
    var HE16 = load;
    var HE17 = load * .8;
    var HE18 = load * .7;
    var HE19 = load * .5;
    var HE20 = load * .5;
    var HE21 = load * .5;
    var HE22 = load * .5;
    var HE23 = load * .2;
    var HE24 = load * .2;
  }
      if (profile!="Manual") {
        return(
            <div>
              <table>
                <thead id="headeroverride" className="panel-heading">
                  <tr>
                    <td>Profile is: {profile}</td>
                  </tr>
                  <tr>
                   <td>Peak Load is: {load}</td>
                  </tr>
                </thead>
              </table>
                <table>
                <tbody>
                  <tr>
                    <td className="leftmost">HE1</td>
                    <td className="rightmost"d>{HE1}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE2</td>
                    <td className="rightmost"d>{HE2}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE3</td>
                    <td className="rightmost"d>{HE3}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE4</td>
                    <td className="rightmost"d>{HE4}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE5</td>
                    <td className="rightmost"d>{HE5}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE6</td>
                    <td className="rightmost"d>{HE6}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE7</td>
                    <td className="rightmost"d>{HE7}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE8</td>
                    <td className="rightmost"d>{HE8}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE9</td>
                    <td className="rightmost"d>{HE9}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE10</td>
                    <td className="rightmost">{HE10}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE11</td>
                    <td className="rightmost">{HE11}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE12</td>
                    <td className="rightmost">{HE12}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE13</td>
                    <td className="rightmost">{HE13}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE14</td>
                    <td className="rightmost">{HE14}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE15</td>
                    <td className="rightmost">{HE15}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE16</td>
                    <td className="rightmost">{HE16}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE17</td>
                    <td className="rightmost">{HE17}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE18</td>
                    <td className="rightmost">{HE18}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE19</td>
                    <td className="rightmost">{HE19}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE20</td>
                    <td className="rightmost">{HE20}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE21</td>
                    <td className="rightmost">{HE21}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE22</td>
                    <td className="rightmost">{HE22}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE23</td>
                    <td className="rightmost">{HE23}</td>
                  </tr>
                  <tr>
                    <td className="leftmost">HE24</td>
                    <td className="rightmost">{HE24}</td>
                  </tr>
                </tbody>
              </table>
      </div>
    );
    } else {
      return(
    <div>
      <form>
        <table className="table">
          <thead>
            <div className="panel-heading">
              <tr>
                <td>Profile is: {profile}</td>
              </tr>
              <tr>
               <td>Peak load is set by you</td>
              </tr>
            </div>
          </thead>
          <tbody>
            <div className="panel-body">
              <tr>
                <td className="leftmost">HE1</td>
                <td className="rightmost"><input type="number" value={HE1} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE2</td>
                <td className="rightmost"><input type="number" value={HE2} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE3</td>
                <td className="rightmost"><input type="number" value={HE3} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE4</td>
                <td className="rightmost"><input type="number" value={HE4} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE5</td>
                <td className="rightmost"><input type="number" value={HE5} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE6</td>
                <td className="rightmost"><input type="number" value={HE6} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE7</td>
                <td className="rightmost"><input type="number" value={HE7} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE8</td>
                <td className="rightmost"><input type="number" value={HE8} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE9</td>
                <td className="rightmost"><input type="number" value={HE9} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE10</td>
                <td className="rightmost"><input type="number" value={HE10} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE11</td>
                <td className="rightmost"><input type="number" value={HE11} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE12</td>
                <td className="rightmost"><input type="number" value={HE12} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE13</td>
                <td className="rightmost"><input type="number" value={HE13} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE14</td>
                <td className="rightmost"><input type="number" value={HE14} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE15</td>
                <td className="rightmost"><input type="number" value={HE15} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE16</td>
                <td className="rightmost"><input type="number" value={HE16} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE17</td>
                <td className="rightmost"><input type="number" value={HE17} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE18</td>
                <td className="rightmost"><input type="number" value={HE18} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE19</td>
                <td className="rightmost"><input type="number" value={HE19} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE20</td>
                <td className="rightmost"><input type="number" value={HE20} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE21</td>
                <td className="rightmost"><input type="number" value={HE21} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE22</td>
                <td className="rightmost"><input type="number" value={HE22} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE23</td>
                <td className="rightmost"><input type="number" value={HE23} /></td>
              </tr>
              <tr>
                <td className="leftmost">HE24</td>
                <td className="rightmost"><input type="number" value={HE24} /></td>
              </tr>
            </div>
          </tbody>
          </table>
          <button className="btn btn-block btn-primary">Submit</button>
        </form>
      </div>
    );
    }
    // );
  }
});

module.exports = Table;
