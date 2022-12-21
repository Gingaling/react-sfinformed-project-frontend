import React, { Component } from 'react';
import PublicSafetyCrimeAPI from './PublicSafetyCrimeAPI';

export default function PublicSafety() {

    const form = document.querySelector('.form');

    return <div className="wrapper">
				<h1>PUBLIC SAFETY</h1>
				<h1>WHAT HAS BEEN HAPPENING IN SF?</h1>
				<div id="container">
					<form className="form">
						<label for="number-of-complaints">
							Number of Incidents to View:{' '}
						</label>
						<input id="number-of-complaints" name="number-of-complaints" type="number" className="number-of-complaints" placeholder="# OF INCIDENTS" />
					</form>
				</div>
				const userInput = document.querySelector('#number-of-complaints').value;
				<br />
				<h3 className="label">Incident Category</h3>
				<br />
				<form>
					<button>Lost Property</button>
					<button>Burglary</button>
					<button>Missing Person</button>
					<button>Larceny Theft</button>
					<button>Drug Offense</button>
				</form>

        event.target.tagName === 'BUTTON';
        
        incident_category = event.target.innerText;

				<div>
					<ul className="complaints-list" />
				</div>
			<PublicSafetyCrimeAPI
            incidents={userInput} crimeType={incident_category} />
			</div>;
}