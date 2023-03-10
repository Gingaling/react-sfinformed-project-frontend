import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from '../components/NavBar/NavBar';
// import './NavBar.css';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';
import "./Home.css"
 
export default function Home() {
 const { logOutUser } = useContext(UserContext);
 
 // This function is called when the user clicks the "Logout" button.
 const logOut = async () => {
   try {
     // Calling the logOutUser function from the user context.
     const loggedOut = await logOutUser();

     // Now we will refresh the page, and the user will be logged out and
     // redirected to the login page because of the <PrivateRoute /> component.
     if (loggedOut) {
       window.location.reload(true);
     }
   } catch (error) {
     alert(error)
   }
 }
 
 return (
   <>
     <Button id='logout' variant="contained" onClick={logOut}>Logout</Button>
      <NavBar />
           {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
        </>
	);
}