import React from "react";
import images from "../Utils/ImageHelper";

export default function MobileMenu() {
    return (
        <div className="wi-100">
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
        </div>
    );
}