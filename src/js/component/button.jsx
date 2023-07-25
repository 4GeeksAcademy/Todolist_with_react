import React from 'react';
import PropTypes from 'prop-types';

//create your first component
const Button = (props) => {

	return (
		<button type="button" class="btn btn-dark mt-3" onClick={() => {props.cleanAllTasks(props.list)}} >Clean all tasks</button>
    )
};

Button.prototype = {
	list: PropTypes.number,
    cleanAllTasks: PropTypes.func
}


export default Button;