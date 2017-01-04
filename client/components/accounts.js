import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
	componentDidMount() {
	  // Render the Blaze accounts form, and place it in the div
	  this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
	}

	componentWillUnmount() {
	  // Go find the forms we created and destroy them - we need to clean them up ourselves
	  Blaze.remove(this.view);
	}

	render() {
	  return (
	  	<div ref="container"></div>
	  );
	}
}

export default Accounts;