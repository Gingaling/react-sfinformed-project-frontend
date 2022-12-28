// import React, { useState, useEffect } from 'react';

// export default function Generateincidents() {

// 	const [incidents, setIncidents] = useState(['']);
//     const [userInput, setUserInput] = useState(0);
//     const [incident_category, setIncident_Category] = useState('');

// 	const BASE_URL = 'https://data.sfgov.org/resource/wg3w-h783.json?incident_category=';
//     const REQUEST_URL = BASE_URL + incident_category + `&$limit=${userInput || 10}`;
    
//     const handleIncidentChange = (event) => {
//         setIncident_Category(event.target.value);
//     }

//     const handleUserInputChange = (event) => {
//         setUserInput(event.target.value);
//     }

    
// 	// useEffect(() => {
//     //     const fetchIncidents = async () => {
//     //         const response = await fetch(REQUEST_URL)
//     //             const data = await response.json()
//     //             setIncidents(data)
//     //             .catch(err => console.log(err))
//     //     }, [])
//     //     );

// 	return (
//         <>
//         <div className="app">
//         <form>
//             <label htmlFor="number-of-complaints">Number of Complaints</label>
//             <input
//                 type="number"
//                 id="number-of-complaints"
//                 name="number-of-complaints"
//                 min="1"
//                 max="100"
//                 value={userInput}
//                 onChange= {event => setUserInput(userInput)}
//             ></input>
//             {/* <button type="submit">Submit</button> */}
//     </form>
//         <label>
//             <h3 className="label">Incident Category</h3>
// 			<br/>
//             <select onChange={handleIncidentChange}>
//                 <option value="Lost Property">Lost Property</option>
//                 <option value="Burglary">Burglary</option>
//                 <option value="Larceny Theft">Larceny Theft</option>
//                 <option value="Missing Person">Missing Person</option>
//                 <option value="Drug Offense">Drug Offense</option>
//             </select>
//             </label>
//                 setIncident_Category({value})
//                 {/* fetchIncidents()
//                 incidents.map((incident) => (
//                     <div className="incident">
//                         <h3>{incident.incident_category}</h3>
//                         <p>{incident.incident_description}</p>
//                         <p>{incident.incident_datetime}</p>
//                 } */}

//         </div> 
//     </>
// 	);
// }
