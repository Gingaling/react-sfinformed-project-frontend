import React from 'react';
import ReactDOM from 'react-dom';
import { Outlet } from "react-router-dom";
import NavBar from '../components/NavBar/NavBar';
// import './NavBar.css';

function Root() {
	return (
		<>
        <NavBar />
         {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
       <div class="wrapper">
      <h1></h1>
      <h2>
        
      </h2>
    </div>
        </>
	);
}

export default Root;
