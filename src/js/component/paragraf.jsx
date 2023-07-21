import React from 'react';
import PropTypes from 'prop-types';

//create your first component
const Paragraf = (props) => {
// get the number of remaining tasks	
	return (
		<div>
			<p> {props.newText}  item left</p>
			<div className='firstBlock'></div>
			<div className='SecondBlock'></div>	
		</div>
	);
};

Paragraf.prototype = {
	newText: PropTypes.number
}

export default Paragraf;