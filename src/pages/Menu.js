import React from 'react';
import BannerImage from '../images/mustang.jpg';
import '../css/menu.css';

function Menu() {
	return (
		<div className="menu" style={{ backgroundImage: `url(${BannerImage})` }}>
			<div className="menuLists">
				<div className="upload">
					Upload your CSV file for analysis
					<button type="button" className="menuButton" id="uploadButton">
						Upload
					</button>
				</div>
				<div className="warranty">
					Warranty Analysis
					<button type="button" className="menuButton" id="warrantyButton">
						Warranty
					</button>
				</div>
				<div className="advisor">
					Advisor Analysis
					<button type="button" className="menuButton" id="advisorButton">
						Advisor
					</button>
				</div>
				<div className="technician">
					Technician Analysis
					<button type="button" className="menuButton" id="technicianButton">
						Technician
					</button>
				</div>
			</div>
		</div>
	);
}

export default Menu;
