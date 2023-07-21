import React, { useState, useEffect } from 'react';

//create your first component
const Alert = () => {
const [list, setList] = useState(["Make the bed", "Wash my hands"]);

    setList(list);
	//if index of tasks are 0
    if (list.length === 0) {
        // get the remaining tasks	
	return (
		<div class="alert alert-danger" role="alert">
            No Tasks, add a task
        </div>
	);
    }
};


export default Alert;