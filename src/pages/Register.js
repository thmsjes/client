import React from 'react';
import BannerImage from '../images/mustang.jpg';
import '../css/register.css';

function Reg() {
	return (
		<div
			className="regisration"
			style={{ backgroundImage: `url(${BannerImage})` }}>
			<form className="registrationForm">
				<div className="loginHeader">
					<label>Enter your information below</label>
				</div>
				<div className="userName">
					<label> User Name: </label>
					<input type="text" placeholder="Jane Doe" />
					<label> Email Address: </label>
					<input type="email" placeholder="name@domain.com" />
					<label>Dealer Name: </label>
					<input type="text" placeholder="Herr Import Cars" />
					<label>Dealer Id: </label>
					<input type="text" placeholder="D12345" />
					<label>Phone Number: </label>
					<input type="phone" placeholder="(518) 935-8545" />
				</div>
				<div className="button">
					<button type="submit" className="submitButton">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
export default Reg;
