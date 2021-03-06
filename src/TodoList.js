import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {



	render() {
		var textInput;

		//rename props for easier use
		const addTodo = this.props.addTodo;
		const classIndex = this.props.index;
		const todos = this.props.todos;

		return (
			<div className="todoList">
			<h3>Todo List</h3>
			<ul>
			<TodoItem 
			todos = {todos}
			classIndex = {classIndex}
			todoCheck = {this.props.todoCheck}
			deleteTodo = {this.props.deleteTodo}
			/>
			</ul>
			<div className="addTodoForm">
			<input type="text" ref={input => textInput=input}></input>
			<button onClick={e => parseTodo(e)} className="addTodo">add todo item</button>
			</div>
			</div>	
			);

		//create the new todo item from user input and send it back to add todo via props
		function parseTodo(e) {
			e.preventDefault();
			if (textInput.value.length !== 0) {
				const newTodo = {
					name: textInput.value,
					checked: false
				};
				textInput.value = '';
				addTodo(newTodo, classIndex);

			}
		}

	}
}