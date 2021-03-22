import React from "react";
import images from "../Utils/ImageHelper";
import '../Assets/Css/style.css';
import '../Assets/Css/style_v2.css';

export default function Header() {
    return (
    <div className="taxly-hero">
        <a target="_blank" rel="noopener noreferrer" href="https://www.helvetia.com/corporate/web/en/home/media-and-topics/overview/media-releases/2021/20210209.html" className="partnership-icon taxly-hero__partnership">
            <span className="partnership-icon__title">In partnership with</span>
            <img src={images.taxlypartnership} alt="http://Taxly"/>
        </a>
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
                        <a href="https://taxly.ch">
                            <img className="taxly-logo__icon" src={images.sitelogonavy} alt="Taxly" />
                            <img className="taxly-logo__icon taxly-logo__icon_fixed" src={images.logowhite} alt="Taxly" />
                        </a>
                    </div>
                    <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn btn-large hero__cta">Get Started</a>
                </div>
            </div>
        </div>
        <div className="hero site-section padding-bottom-none l-container in-viewport">
            <div className="hero__wrapper">
                <div className="l-container l-container--content">
                    <h1 className="page-heading">Complicated is Outdated. Swiss Tax Returns Made Simple.</h1>
                    <p>Create your Swiss tax return in less than 10 minutes</p>
                    <a href="https://app.taxly.ch/GettingStarted?culture=en" target="_blank" className="btn btn-large hero__cta">Get Started</a>
                    <div className="video-link clear-inline-block"><a href="#" className="taxly-icon taxly-icon-play js-show-video-modal">Watch the video</a></div>
                </div>
            </div>
        </div>
    </div>
);
}
