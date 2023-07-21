import React, { useState } from 'react';
import PropTypes from 'prop-types';

//create your first component
const Element = (props) => {
	const [list, setList] = useState(["Make the bed", "Wash my hands"]);

	//function for removing the element when the task is done
	const removeTodo = (currentIndex) => {
		setList((list.filter((element) => element !== currentIndex)));
	}
	
	return (
		<div>
			<ul>
			{list.map(item => (
				<li> {props.text} <i className="far fa-times-circle" onClick={() => removeTodo(item)}></i></li>
				))}
			</ul>
		</div>
	);
};

Element.prototype = {
	text: PropTypes.string
}

export default Element;