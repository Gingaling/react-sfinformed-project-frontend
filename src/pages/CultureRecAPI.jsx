import React from 'react';

export default function CultureRecAPI() {

// GLOBALS
const BASE_URL = 'https://data.sfgov.org/resource/r7bn-7v9c.json?zip_code=';

// CACHED DOM ELEMENTS
 const form = document.querySelector('.form');
// const artsList = document.getElementsByClassName('arts-list');
// // Verify DOM elements are correctly selected
// console.log(artsList);

// FUNCTIONS
const updateResults = data => {
    var  mainContainer = document.getElementById("myData");
    mainContainer.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = `${i+1}.   Artist: ` + data[i].artist + `   ***   Title: ` + data[i].display_title + `   ***   Current Status: ` + data[i].current_location + `   ***   Location: ` + data[i].street_address_or_intersection;
        mainContainer.appendChild(li);
    }
};

const handleSubmit = async event => {
	event.preventDefault();
	const zipcode = document.querySelector('#zipcode').value;
	// get the number of results
	const userInput = document.querySelector('#zipcode-search').value;
	const REQUEST_URL = BASE_URL + zipcode + `&$limit=${userInput || 10}`;

	return (
		<>
		<form className="form">
                <label for="zipcode-search">Number of Art Pieces to View:</label>
                <input
                    id="zipcode-search"
                    name="zipcode-search"
                    type="number"
                    className="zipcode-search"
                    placeholder="number"
                />
                 <label for="zipcode">zipcode: </label>
                <input
                    id="zipcode"
                    name="zipcode"
                    type="number"
                    className="zipcode"
                    placeholder="enter zipcode"
                />
            <button type="submit">Submit</button>
            </form>
            <div className="proxy" id="myData"></div>
 
		const response = await fetch(REQUEST_URL);
		const data = await response.json();
		updateResults(data);
	} catch (err) {
        console.error};

    {/* </container> */}
            <ul className="arts-list">
            </ul>
	</>
	);
    }
};

// EVENT LISTENERS
form.addEventListener('click', handleSubmit);
