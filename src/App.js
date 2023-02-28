import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/navigation';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Register from './pages/Register';
import Footer from './components/footer';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" exact component={Login} />
					<Route path="/menu" exact component={Menu} />
					<Route path="/register" exact component={Register} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
