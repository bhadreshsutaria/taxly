import React from "react";
import images from "../Utils/ImageHelper";

export default function Navbar() {
    return (
        <div id="mysticky-wrap">
            <div id="mysticky-nav" className="up">
                <div id="menu-container" className="">
                    <div className="main-nav">
                        <ul id="menu-main-nav" className="main-nav__list">
                            <li className="menu-item"><a target="_blank" rel="noopener" href="/faq/">FAQ</a></li>
                            <li className="menu-item"><a target="_blank" rel="noopener" href="/how-it-works/">How it works</a></li>
                            <li className="menu-item"><a target="_blank" rel="noopener" href="/insights/">Insights</a></li>
                            <li className="menu-item"><a target="_blank" rel="noopener" href="/app/">App</a></li>
                            </ul>
                        <ul className="main-nav__right">
                            <li className="menu-item"><a href="#" className="taxly-icon taxly-icon-language">EN</a></li>
                            <li className="menu-item"><a href="https://app.taxly.ch/Identity/Account/Login?culture=en" target="_blank" className="taxly-icon taxly-icon-login">Log in</a></li>
                        </ul>
                    </div>
                    <div className="taxly-logo">
                        <a href="/">
                            <img className="taxly-logo__icon taxly-logo__white" src={images.sitelogonavy} alt="Taxly" />
                            <img className="taxly-logo__icon taxly-logo__blue taxly-logo__icon_fixed" src={images.logowhite} alt="Taxly" />
                        </a>
                    </div>
                    <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn btn-large hero__cta">Get Started</a>
                </div>
            </div>
        </div>
    );
}