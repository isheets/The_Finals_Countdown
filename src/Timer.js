import React, { Component } from 'react';

export default class Timer extends Component {




	render() {
		const countdown = this.props.countDownString;



		return (
			<div className="timer">
			<h3>Time Until Test:</h3>
			<h4>{countdown}</h4>
			</div>
			);


	}
}