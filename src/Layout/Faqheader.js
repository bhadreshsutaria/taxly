import React from "react";
import images from "../Utils/ImageHelper";
import '../Assets/Css/style.css';
import '../Assets/Css/style_v2.css';

export default function Faqheader() {
    return (
    <div className="header-wrap">
        <div className="taxly-mobile-menu-fixed">
            <div className="taxly-logo">
                <a href="/">
                    <img className="taxly-logo__item" src={images.logowhite} alt="" />
                    <img className="taxly-logo__item taxly-logo__item_mobile" src={images.sitelogonavy} alt="" />
                </a>
            </div>
            <div className="taxly-mobile-menu-button"></div>
        </div>
        <div className="taxly-mobile-menu-padding"></div>
        <div className="taxly-mobile-menu">
            <div className="taxly-mobile-menu-bg"></div>
            <ul className="top-menu">
                <li><a target="_blank" rel="noopener" href="/de-taxcalculator.html">Tax calculator</a></li>
                <li><a target="_blank" rel="noopener" href="/about-us/">About us</a></li>
                <li><a target="_blank" rel="noopener" href="/faq/">FAQs</a></li>
                <li><a target="_blank" rel="noopener" href="/how-it-works/">How it works</a></li>
                <li><a target="_blank" rel="noopener" href="/insights/">Insights</a></li>
                <li><a target="_blank" rel="noopener" href="/tax-extension/">Tax Extension</a></li>
            </ul>
            <ul className="bottom-menu">
                <li><a href="https://app.taxly.ch/Identity/Account/Login?culture=en" target="_blank" className="taxly-icon taxly-icon-login">Log in</a></li>
            </ul>
        </div>
        <div className="taxly-white">
            <div className="taxly-hero">
                <div id="mysticky-wrap">
                    <div id="mysticky-nav" className="up">
                        <div id="menu-container" className="">
                            <div className="main-nav">
                                <ul id="menu-main-nav" className="main-nav__list">
                                    <li className="menu-item current-menu-item"><a target="_blank" rel="noopener" href="/faq/">FAQ</a></li>
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
