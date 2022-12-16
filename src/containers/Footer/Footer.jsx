import { Link } from "react-router-dom";

import Camera from "../../assets/icons/camera-solid.svg";
import Search from "../../assets/icons/search-solid.svg";
import Home from "../../assets/icons/home-solid.svg";
import Virtual from "../../assets/icons/virtual.svg";
import Refresh from "../../assets/icons/refresh-ccw.svg";

import "./footer.css";

const Footer = () => (
	<div className="footer-container">
		<div className="footer-icons">
			<Link to="/"><img className="footer-icon" src={Home} alt="" /></Link>
			<img className="footer-icon" src={Search} alt="" />

			<div className="footer-main-icon">
				<img className="footer-icon" src={Camera} alt="" />
				<span className="footer-circle"></span>
				<span className="footer-dot"></span>
			</div>

			<Link to="/virtual-reality"><img className="footer-icon" src={Virtual} alt="" /></Link>
			<Link to="/settings"><img className="footer-icon" src={Refresh} alt="" /></Link>
		</div>
	</div>
);

export default Footer;
