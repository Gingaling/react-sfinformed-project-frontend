import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import Home from './pages/Home.page';
import Login from './pages/Login.page';
import PrivateRoute from './pages/PrivateRoute.page';
import Signup from './pages/Signup.page';
// import Root from './routes/Root';
import ErrorPage from './error-page';
import CityInfra from './pages/CityInfra';
// import CultureRec from './pages/CultureRec';
import Econ from './pages/Econ';
import Geog from './pages/Geog';
import Hsg from './pages/Hsg';
import Hss from './pages/Hss';
import Edu from './pages/Edu';
import CityMgmt from './pages/CityMgmt';
import News from './pages/News';
import Nrg from './pages/Nrg';
import Politics from './pages/Politics';
// import { UserContext } from './components/contexts/user.context';
// import PublicSafety from './pages/PublicSafety/PublicSafety';
import Transport from './pages/Transport';
import WhereLive from './pages/WhereLive';
import './index.css';

export default function App() {

	return <BrowserRouter>
			<UserProvider>
				<Routes>
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/signup" element={<Signup />} />
					<Route exact path="/resest" element={<reset />} />
					<Route element={<PrivateRoute />}>
						<Route exact path="/" element={<Home />} errorElement={<ErrorPage />}>
						<Route path="home" element={<Home />} />
						<Route path="news" element={<News />} />
						<Route path="cityinfra" element={<CityInfra />} />
						<Route path="citymgmt" element={<CityMgmt />} />
							{/* <Route path="culturerec" element={<CultureRec />} /> */}
						<Route path="econ" element={<Econ />} />
						<Route path="edu" element={<Edu />} />
						<Route path="Geog" element={<Geog />} />
						<Route path="hsg" element={<Hsg />} />
						<Route path="hss" element={<Hss />} />
						<Route path="nrg" element={<Nrg />} />
						<Route path="politics" element={<Politics />} />
							{/* <Route path="publicsafety" element={<PublicSafety />} />					 */}
						<Route path="transport" element={<Transport />} />
						<Route path="wherelive" element={<WhereLive />} />
						</Route>
					</Route>
				</Routes>
			</UserProvider>
		</BrowserRouter>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
