import React, { Component } from 'react';

export default class NewClassForm extends Component {



	render() {
		var textInput;
		var classInput;
<<<<<<< HEAD
	 	function handleKeyPress(event) {
			if(event.key == 'Enter'){
				this.props.onButtonClick(event, textInput, classInput);
			}
		}
=======
		const onButtonClick = this.props.onButtonClick;
		const onClick = this.props.onClick


		function buttonCLick(e)
		{
			e.preventDefault();
			onButtonClick(textInput, classInput);
			onClick();
		}


>>>>>>> 55dd96d7b85db781f5d48583f0724c0e99fe9cad
		return(
			<div className="addClassForm">
			<h2>Add Class</h2>
			<form className="inputForm">
			<input type="text" placeholder="class name" ref={input => classInput=input}></input>
<<<<<<< HEAD
			<input onKeyPress={this.handleKeyPress} type="datetime-local" ref={input => textInput=input}></input> 
			<button onClick={e => this.props.onButtonClick(e, textInput,classInput)} className="addClass">add</button>
=======
			<input type="datetime-local" ref={input => textInput=input}></input> 
			<button onClick={e => buttonCLick(e)} className="addClass">add</button>
>>>>>>> 55dd96d7b85db781f5d48583f0724c0e99fe9cad
			</form>
			</div>
			);
	}
}