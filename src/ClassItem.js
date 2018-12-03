import React, { Component } from 'react';
import TodoList from './TodoList';
import Timer from './Timer';

export default class ClassItem extends Component {
	render() {
		return (
			<div className="classItem">
				<h2>Example Class</h2>
				<div className="classGrid">
				<Timer />
				<TodoList />
				</div>
			</div>
		);
	}
}

