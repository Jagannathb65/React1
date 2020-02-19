import React from 'react';
import './Person.css';

const person = (props) => {
	return (
		<div className="Person">
			<p onClick={props.click}>This is {props.name} component and age of {props.age} years old!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.change} value={props.name}/>
		</div>
	)
};

export default person;