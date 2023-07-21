import React, { useState } from 'react';
import Element from "./element.jsx";
import Paragraf from "./paragraf.jsx";
import Alert from "./alert.jsx";

//create your first component
const TodoList = () => {
	const [newTodo, setNewTodo] = useState("");
	const [list, setList] = useState(["Make the bed", "Wash my hands"]);

//add into array -> concat
// Get the value of a input when press the key Enter
const handleKeyDown = event => {
	if (event.key === 'Enter') {
		setList(list.concat(newTodo)) 
		setNewTodo("");
	  }
	};

	//function for removing the element when the task is done
	const removeTodo = (currentIndex) => {
		setList((list.filter((element) => element !== currentIndex)));
	}

//adding a new todo with map method 
return (
	<div className="container">
		<Alert list = {list} />
		<h1>todos</h1>
		<div>
			<input type="text" onKeyDown={handleKeyDown} onChange={e => setNewTodo(e.target.value)} value={newTodo} id="add-todo" placeholder="What needs to be done?" />
		</div>
		<ul>
		{list.map(item => (
			<Element text={item} removeTodo= {removeTodo} />
		))}
		</ul>
			<Paragraf newText={list.length} />
	</div>
);
};

export default TodoList;
