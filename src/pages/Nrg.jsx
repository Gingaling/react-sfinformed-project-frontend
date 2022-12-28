import React, { useState } from 'react';
import DataQ from './Nrg-dataQ';
// import { Dropdown, Option } from './Dropdown';
import './styles.js';
import './Nrg.css';

export default function Nrg() {
	// const [optionValue, setOptionValue] = useState('');
	// // const [userInput, setUserInput] = useState(0);

	// const handleSelect = (event) => {
	// 	console.log(event.target.value);
	// 	setOptionValue(event.target.value);
	// };

	// useEffect (() => {
	// const handleSubmit = e => {
	// 	setUserInput(e.target.value);
	// };
	return (
	<div>
		<h1>ENERGY & ENVIRONMENT</h1>
		<br />
		<h2>What services are you interested in learning about?</h2>
		<DataQ />
	</div>
	)
}
