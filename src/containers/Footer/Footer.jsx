import { Link } from "react-router-dom";
import i18next from "i18next";

import Camera from "../../assets/icons/camera-solid.svg";
import Search from "../../assets/icons/search-solid.svg";
import Home from "../../assets/icons/home-solid.svg";
import Bell from "../../assets/icons/bell.svg";
import Refresh from "../../assets/icons/refresh-ccw.svg";

import "./footer.css";

const Footer = () => {
    const changeLanguage = () => i18next.changeLanguage(i18next?.language === "fr" ? "en" : "fr");

    return (
        <div className="footer-container">
            <div className="footer-icons">
                <Link to="/"><img className="footer-icon" src={Home} alt="" /></Link>
                <img className="footer-icon" src={Search} alt="" />

                <div className="footer-main-icon">
                    <img className="footer-icon" src={Camera} alt="" />
                    <span className="footer-circle"></span>
                    <span className="footer-dot"></span>
                </div>

                <img className="footer-icon" src={Bell} alt="" />
                <img
					className="footer-icon"
					src={Refresh}
					alt=""
					onClick={changeLanguage}
				/>
            </div>
        </div>
    );
};

export default Footer;
