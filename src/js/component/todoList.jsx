import React, { useState, useEffect } from 'react';
import Element from "./element.jsx";
import Paragraf from "./paragraf.jsx";
import Alert from "./alert.jsx";
import Button from "./button.jsx";

//create your first component
const TodoList = () => {
	const [newTodo, setNewTodo] = useState("");
	const [list, setList] = useState(["Make the bed", "Wash my hands"]);

//load all todos on the first time I loading the page
useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
		.then(response => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			
			return response.json();
		})
		.then(responseAsJson => {
			setList(responseAsJson.map(l => l.title));
		})
		.catch(error => {
			console.log('Looks like there was a problem: \n', error);
		});
	}, [])


//add into array -> concat
// Get the value of a input when press the key Enter
const handleKeyDown = event => {
	if (event.key === 'Enter') {
		setList(list.concat(newTodo)) 
		setNewTodo("");

	  fetch('https://jsonplaceholder.typicode.com/todos', {
			method: 'POST',
			body: JSON.stringify(newTodo),
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then(res => {
			if (!res.ok) throw Error(res.statusText);
			return res.json();
		})
		.then(response => console.log('Success:', response))
		.catch(error => console.error(error));
	};
}

	//function for removing the element when the task is done
	const removeTodo = (currentIndex) => {
		setList((list.filter((element) => element !== currentIndex)));

		fetch(`https://jsonplaceholder.typicode.com/todos/${currentIndex}`, {
			method: 'DELETE',
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then(res => {
			if (!res.ok) throw Error(res.statusText);
			return res.json();
		})
		.then(response => console.log('Success:', response))
		.catch(error => console.error(error));
	}

	//function to delete all tasks 
	const cleanAllTasks = () => {
		setList([])
	
		  fetch('https://jsonplaceholder.typicode.com/todos', {
			method: "PUT",
			body: JSON.stringify([]),
			headers: {
			  "Content-Type": "application/json"
			}
		  })
		  .then(resp => {
			console.log(resp.ok); // will be true if the response is successfull
			console.log(resp.status); // the status code = 200 or code = 400 etc.
			console.log(resp.text()); // will try return the exact result as string
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			//here is where your code should start after the fetch finishes
			console.log(data); //this will print on the console the exact object received from the server
		})
		.catch(error => {
			//error handling
			console.log(error);
		});
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
				<Element text={item} removeTodo = {removeTodo} />
			))}
			</ul>
				<Paragraf newText = {list.length} />
		<Button cleanAllTasks = {cleanAllTasks} />
	</div>
);
};

export default TodoList;
