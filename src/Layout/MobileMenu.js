import React from "react";
import images from "../Utils/ImageHelper";
import { NavLink } from "react-router-dom";
export default function MobileMenu(props) {
    return (
        <>
            <div className={`taxly-mobile-menu-fixed ${props.extraClass === '' ? '':  props.extraClass}`}>
                <div className="taxly-logo">
                    <a href="/">
                        <img className="taxly-logo__item taxly-logo__white" src={images.logowhite} alt="Taxly White Logo" />
                        <img className="taxly-logo__item taxly-logo__blue taxly-logo__item_mobile" src={images.sitelogonavy} alt="Taxly Blue Logo" />
                    </a>
                </div>
                <div className={`taxly-mobile-menu-button ${props.menuBtnClass === '' ? '':  props.menuBtnClass}`}></div>
            </div>
            <div className="taxly-mobile-menu-padding"></div>
            <div className={`taxly-mobile-menu ${props.menuBGColorClass === '' ? '' : props.menuBGColorClass}`}>
                <div className="taxly-mobile-menu-bg"></div>
                <ul className="top-menu">
                    <li>
                        <NavLink activeClassName="active" exact rel="noopener" to="/de-taxcalculator.html">Tax calculator</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" exact rel="noopener" to="/about-us/">About us</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" exact rel="noopener" to="/faq/">FAQs</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" exact rel="noopener" to="/how-it-works/">How it works</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" exact rel="noopener" to="/insights/">Insights</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" exact rel="noopener" to="/tax-extension/">Tax Extension</NavLink>
                    </li>
                </ul>
                <ul className="bottom-menu">
                    <li><a href="https://app.taxly.ch/Identity/Account/Login?culture=en" target="_blank" className="taxly-icon taxly-icon-login">Log in</a></li>
                </ul>
            </div>
        </>
    );
}