import React from 'react';

export default function CityInfra() {
    return (
    <>
        <div className="wrapper">
    <h1>CITY INFRASTRUCTURE</h1>
            <h1>WHAT HAS BEEN HAPPENING IN SF?</h1>
            <container>
            <form className="form">
                <label for="number-of-complaints">Number of Incidents to View: </label>
                <input
                    id="number-of-complaints"
                    name="number-of-complaints"
                    type="number"
                    className="number-of-complaints"
                    placeholder="# OF INCIDENTS"
                />
                <br/>
                <h3>Incident Category</h3>
                <br/>
                <button>Lost Property</button>
                <button>Burglary</button>
                <button>Missing Person</button>
                <button>Larceny Theft</button>
                <button>Drug Offense</button>
            </form>
            </container>
            <ul className="complaints-list"></ul>
        <script src="sf-data/scripts/city-infra.script.js"></script>
        </div>
    </>
    );
}
