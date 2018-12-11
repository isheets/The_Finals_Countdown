import React, { Component } from 'react';

export default class NewClassForm extends Component {



	render() {
		var textInput;
		var classInput;
	 	function handleKeyPress(event) {
			if(event.key == 'Enter'){
				this.props.onButtonClick(event, textInput, classInput);
			}
		}
		return(
			<div className="addClassForm">
			<h2>Add Class</h2>
			<form className="inputForm">
			<input type="text" placeholder="class name" ref={input => classInput=input}></input>
			<input onKeyPress={this.handleKeyPress} type="datetime-local" ref={input => textInput=input}></input> 
			<button onClick={e => this.props.onButtonClick(e, textInput,classInput)} className="addClass">add</button>
			</form>
			</div>
			);
	}
}