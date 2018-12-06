import React, { Component } from 'react';

export default class NewClassForm extends Component {



	render() {
		var textInput;
		var classInput;
		const onButtonClick = this.props.onButtonClick;
		const onClick = this.props.onClick


		function buttonCLick(e)
		{
			e.preventDefault();
			onButtonClick(textInput, classInput);
			onClick();
		}


		return(
			<div className="addClassForm">
			<h2>Add Class</h2>
			<form className="inputForm">
			<input type="text" placeholder="class name" ref={input => classInput=input}></input>
			<input type="datetime-local" ref={input => textInput=input}></input> 
			<button onClick={e => buttonCLick(e)} className="addClass">add</button>
			</form>
			</div>
		);
	}
}