import React, { useState, useEffect } from 'react';

export default function DataQ() {

    const [optionValue, 
    setOptionValue] = useState('');
    // const [userInput, setUserInput] = useState(0);
    const [incidents, setIncidents]= useState(['']);
    
    const BASE_URL =
        'https://data.sfgov.org/resource/wg3w-h783.json?incident_category=';
        
        const REQUEST_URL = BASE_URL + optionValue + `&$limit=${10}`;
 
        useEffect(() => {
            setIncidents([]);
            fetch(REQUEST_URL)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setIncidents(data);
            }, []);
    
    const handleMenuOne = () => {
        setOptionValue('Lost Property');
	};
	
    const handleMenuTwo = () => {
        setOptionValue('Burglary');
	};
    const handleMenuThree = () => {
        setOptionValue('Missing Person');
    };
    const handleMenuFour = () => {
        setOptionValue('Larceny and Theft');
    };
    const handleMenuFive = () => {
        setOptionValue('Drug Offense');
    };
    
    
    return (
        <>
		<Dropdown className="dropdown"
			trigger={<button>Dropdown</button>}>
			menu={[
				<button onClick={handleMenuOne}>Lost Property</button>,
				<button onClick={handleMenuTwo}>Burglary</button>,
				<button onClick={handleMenuThree}>Missing Person</button>,
				<button onClick={handleMenuFour}>Larceny and Theft</button>,
				<button onClick={handleMenuFive}>Drug Offense</button>
			]}
		</Dropdown>

    const Dropdown = ({ trigger, menu }) => {
        const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

		<div className="dropdown">
			{React.cloneElement(trigger, {
				onClick: handleOpen
			})}
			{open
				? <ul className="menu">
						{menu.map((menuItem, index) =>
							<li key={index} className="menu-item">
								{React.cloneElement(menuItem, {
									onClick: () => {
										menuItem.props.onClick();
										setOpen(false);
									}
								})}
							</li>
						)}
					</ul>
				: null}
		</div>
    </>
    );
}
}
