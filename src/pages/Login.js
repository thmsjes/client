import React from 'react';
import BannerImage from '../images/mustang.jpg';
import '../css/login.css';

function Login() {
	return (
		<div className="login" style={{ backgroundImage: `url(${BannerImage})` }}>
			<form className="loginForm">
				<div className="emailLabel">
					<label id="emailLabel">
						Enter your email address below, and a link to sign in will be
						emailed to you.
					</label>
				</div>
				<div className="emailInput">
					<input type="email" placeholder="name@domain.com" />
				</div>
				<button type="submit" className="submitButton">
					Submit
				</button>
			</form>
		</div>
	);
}

export default Login;
