import React from 'react';
import '../css/home.css';
import BannerImage from '../images/mustang.jpg';

function Home() {
	return (
		<div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
			<div className="headerContainer">
				<h1>Home Page</h1>
			</div>
		</div>
	);
}

export default Home;
