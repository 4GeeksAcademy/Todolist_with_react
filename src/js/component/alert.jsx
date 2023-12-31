import React from 'react';
import PropTypes from 'prop-types';

//create your first component
const Alert = (props) => {

	//if index of tasks are 0
    if (props.list.length === 0) {
        // get the remaining tasks	
	return (
		<div class="alert alert-danger" role="alert">
            No Tasks, add a task
        </div>
	);
    } else {
        return null
    }
};

Alert.prototype = {
	list: PropTypes.number
}

export default Alert;