import React from "react";
import images from "../Utils/ImageHelper";
import MobileMenu from "../Layout/MobileMenu";
import '../Assets/Css/style.css';
import '../Assets/Css/style_v2.css';
import { useHistory } from "react-router-dom";

export default function Faqheader() {
    let history = useHistory();
    const onRedirect = (url) => {
        history.push(url)
    }

    return (
    <div className="header-wrap">
        <MobileMenu/>
        <div className="taxly-white">
            <div className="taxly-hero">
                <div id="mysticky-wrap">
                    <div id="mysticky-nav" className="up">
                        <div id="menu-container" className="">
                            <div className="main-nav">
                                <ul id="menu-main-nav" className="main-nav__list">
                                    <li className="menu-item current-menu-item"><a rel="noopener" onClick={() => onRedirect('/faq/')}>FAQ</a></li>
                                    <li className="menu-item"><a rel="noopener" onClick={() => onRedirect('/how-it-works/')}>How it works</a></li>
                                    <li className="menu-item"><a rel="noopener" onClick={() => onRedirect('/insights/')}>Insights</a></li>
                                    <li className="menu-item"><a rel="noopener" honClick={() => onRedirect('/app/')}>App</a></li>
                                    </ul>
                                <ul className="main-nav__right">
                                    <li className="menu-item"><a href="#" className="taxly-icon taxly-icon-language">EN</a></li>
                                    <li className="menu-item"><a href="https://app.taxly.ch/Identity/Account/Login?culture=en" target="_blank" className="taxly-icon taxly-icon-login">Log in</a></li>
                                </ul>
                            </div>
                            <div className="taxly-logo">
                                <a href="https://taxly.ch">
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
