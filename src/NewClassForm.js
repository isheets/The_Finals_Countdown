import React, { Component } from 'react';
import deleteIcon from './delete.svg'


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

		function deleteclick(e){
			e.preventDefault();
		}


		return(
			<div className="addClassForm">
			<img 
				src={deleteIcon} 
				alt="Delete Class" 
				className="ExitAddClass"></img>
			<h2>Add Class</h2>
			<form className="inputForm">
			<input id="classNameEnter"type="text" placeholder="class name" ref={input => classInput=input}></input>
			<input id="timeDate"type="datetime-local" ref={input => textInput=input}></input> 
			<button onClick={e => buttonCLick(e)} className="addClass">add</button>
		
			</form>
			</div>
		);
	}
}