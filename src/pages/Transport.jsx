import React from 'react';

export default function Transport() {

    return (
 <div className="wrapper">
    <h1>TRANSPORTATION</h1>
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
                </form>
                </container>
                <br/>
                <h3>Incident Category</h3>
                <br/>
                <form>
                <button>Lost Property</button>
                <button>Burglary</button>
                <button>Missing Person</button>
                <button>Larceny Theft</button>
                <button>Drug Offense</button>
            </form>
       <div>
            <ul className="complaints-list"></ul>
        </div>
               <script src="sf-data/scripts/transport.script.js"></script>
        </div>
    );
}
