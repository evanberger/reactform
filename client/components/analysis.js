import React from 'react';
import Form from './form';
import Table from './table';
import BuildingForm from './bldg_form';
import { observer } from 'mobx-react';
import appState from '../appState';

var utility = 'Consumers Energy', 
	rate = 'GPD',
	demand = 0; 

var Analysis = React.createClass({
	render: function() {
		return (
			<div>
				{appState.HE1}
			</div>
		);
	}
});

module.exports = Analysis;