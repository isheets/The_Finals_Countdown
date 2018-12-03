import React, { Component } from 'react';

export default class NewClassForm extends Component {
	render() {
		return(
			<div className="addClassForm">
			<h2>Add Class</h2>
			<form className="inputForm">

			<input type="text" placeholder="class name"></input>
			<input type="date"></input>
			<input type="time"></input>
			<button onClick={e => {e.preventDefault()}} className="addClass">add</button>
			</form>
			</div>
		);
	}
}