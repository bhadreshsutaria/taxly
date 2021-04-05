import React from "react";
import images from "../Utils/ImageHelper";
import MobileMenu from "../Layout/MobileMenu";
import '../Assets/Css/style.css';
import '../Assets/Css/style_v2.css';
import Listmenu from "../Layout/Listmenu";
export default function Faqheader() {
    return (
    <div className="header-wrap">
        <MobileMenu 
            extraClass="taxly-mobile-menu-fixed_white" 
            menuBtnClass="taxly-mobile-menu-button_white"
            menuBGColorClass="taxly-mobile-menu_white"
        />
        <div className="taxly-white">
            <div className="taxly-hero">
                <div id="mysticky-wrap">
                    <div id="mysticky-nav" className="up">
                        <div id="menu-container" className="">
                            <div className="main-nav">
                                <Listmenu />
                                <ul className="main-nav__right">
                                    <li className="menu-item"><a href="#" className="taxly-icon taxly-icon-language">EN</a></li>
                                    <li className="menu-item"><a href="https://app.taxly.ch/Identity/Account/Login?culture=en" target="_blank" className="taxly-icon taxly-icon-login">Log in</a></li>
                                </ul>
                            </div>
                            <div className="taxly-logo">
                                <a href="/">
                                    <img className="taxly-logo__icon" src={images.sitelogonavy} alt="Taxly" />
                                </a>
                            </div>
                            <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn btn-large hero__cta">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
