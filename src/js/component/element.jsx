import React from 'react';
import PropTypes from 'prop-types';

//create your first component
const Element = (props) => {
	
	return (
		<div>
				<li> {props.text} <i className="far fa-times-circle" onClick={() => {props.removeTodo(props.text)}}></i></li>
		</div>
	);
};

Element.prototype = {
	text: PropTypes.string
}

export default Element;