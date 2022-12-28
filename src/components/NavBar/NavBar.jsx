import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
	return <div className="App">
			<header className="App-header">
				<img id="logo" src="https://i.imgur.com/9KPZcPS.png" alt="logo" />
			</header>
			<div className="navbar">
				<nav>
					<Link to="" onClick="route()">
						Home
					</Link>
					<Link to="/news" onClick="route()">
						News
					</Link>
				</nav>
				<div className="dropdown">
					<button className="dropbtn">
						Inform Me About...
						<img className="dropbtn-icon" src="https://i.imgur.com/m2YEN0kl.png" alt="caret-down icon" />
					</button>

					<div className="dropdown-content">
						<nav>
							<Link to="wherelive" onClick="route()">
								Where I Live...
							</Link>
							<Link to="cityinfra" onClick="route()">
								City Infrastructure
							</Link>

							<Link to="citymgmt" onClick="route()">
								City Management & Ethics
							</Link>

							{/* <Link to="culturerec" onClick="route()">
								Culture & Recreation
							</Link> */}

							<Link to="econ" onClick="route()">
								Economy & Community
							</Link>
							<Link to="edu" onClick="route()">
								Education & Learning
							</Link>
							<Link to="nrg" onClick="route()">
								Energy & Environment
							</Link>

							<Link to="geog" onClick="route()">
								Geographic Locations & Boundaries
							</Link>

							<Link to="hss" onClick="route()">
								Health & Social Services
							</Link>

							<Link to="hsg" onClick="route()">
								Neighborhoods, Real Estate and Development
							</Link>

							<Link to="politics" onClick="route()">
								Politics & Elections
							</Link>

							{/* <Link to="publicsafety" onClick="route()">
								Public Safety
							</Link> */}

							<Link to="transport" onClick="route()">
								Transportation
							</Link>
						</nav>
					</div>
				</div>
				<div id="searchtool">
					{/* Begin siteLevel HTML Searchbox Code */}
					<form className="split" method="get" action="https://www.sitelevel.com/query" accept-charset="utf-8">
						<div className="sl_search_box">
							<input type="text" name="query" placeholder="enter search terms" />
							<input type="submit" name="crid" value="search" />
						</div>
					</form>
					<Link to="about.js" className="split" id="aboutsf" onClick="route()">
						About SF/informed
					</Link>
					{/* End siteLevel HTML Searchbox Code */}
				</div>
			</div>
		</div>;
}

export default NavBar;
