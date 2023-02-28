import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Logo from '../images/logo.jpg';
import '../css/navigation.css';

function Navbar() {
	return (
		<div className="navbar">
			<div className="leftSide">
				<img src={Logo} alt="LOGO" />
			</div>
			<div className="rightSide">
				<Link to="/"> Home </Link>
				<Link to="/menu"> Menu </Link>
				<Link to="/login"> Login </Link>
				<Link to="/register"> Register</Link>
			</div>
		</div>
	);
}

export default Navbar;
