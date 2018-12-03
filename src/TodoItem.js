import React, { Component } from 'react';

export default class TodoItem extends Component {
	render() {
		return (
			<li className="todoItem">
			<input type="checkbox" className="todoCheck"></input>
			<p className="todoTitle">example todo</p>
			<button onClick={e => {e.preventDefault()}} className="todoButt">remove item</button>
			</li>
		);
	}
}