import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
	render() {
		return (
			<div className="todoList">
			<h3>Todo List</h3>
			<ul>
			<TodoItem />
			<TodoItem />
			<TodoItem />
			</ul>
			<button onClick={e => {e.preventDefault()}} className="addTodo">add todo item</button>
			</div>	
		);
	}
}