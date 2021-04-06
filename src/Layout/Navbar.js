import React from "react";
import images from "../Utils/ImageHelper";
import Listmenu from "../Layout/Listmenu";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { t } = useTranslation();
    return (
        <div id="mysticky-wrap">
            <div id="mysticky-nav" className="up">
                <div id="menu-container" className="">
                    <div className="main-nav">
                        <Listmenu />
                        <ul className="main-nav__right">
                            <li className="menu-item"><a href="#" className="taxly-icon taxly-icon-language">{t("language")}</a></li>
                            <li className="menu-item"><a href="https://app.taxly.ch/Identity/Account/Login?culture=en" target="_blank" className="taxly-icon taxly-icon-login">Log in</a></li>
                        </ul>
                    </div>
                    <div className="taxly-logo">
                        <a href="/">
                            <img className="taxly-logo__icon taxly-logo__blue" src={images.sitelogonavy} alt="Taxly" />
                            <img className="taxly-logo__icon taxly-logo__white taxly-logo__icon_fixed" src={images.logowhite} alt="Taxly" />
                        </a>
                    </div>
                    <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn btn-large hero__cta">Get Started</a>
                </div>
            </div>
        </div>
    );
}