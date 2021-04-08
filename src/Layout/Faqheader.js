import React from "react";
import images from "../Utils/ImageHelper";
import MobileMenu from "../Layout/MobileMenu";
import '../Assets/Css/style.css';
import '../Assets/Css/style_v2.css';
import Listmenu from "../Layout/Listmenu";
import { useTranslation } from "react-i18next";
export default function Faqheader() {
    const { t } = useTranslation();
    return (
    <div className="header-wrap">
        <MobileMenu/>
        <div className="taxly-white">
            <div className="taxly-hero">
                <div id="mysticky-wrap">
                    <div id="mysticky-nav" className="up">
                        <div id="menu-container" className="">
                            <div className="main-nav">
                                <Listmenu />
                                <ul className="main-nav__right">
                                    <li className="menu-item"><a href="#" className="taxly-icon taxly-icon-language">{t("language")}</a></li>
                                    <li className="menu-item"><a href="https://app.taxly.ch/Identity/Account/Login?culture=en" target="_blank" className="taxly-icon taxly-icon-login">{t('header.data.navLogIn')}</a></li>
                                </ul>
                            </div>
                            <div className="taxly-logo">
                                <a href="/">
                                    <img className="taxly-logo__icon" src={images.sitelogonavy} alt="Taxly" />
                                </a>
                            </div>
                            <a href="https://app.taxly.ch/GettingStarted" target="_blank" className={`btn btn-large hero__cta btn-${t("language")}`}>{t('header.data.navGetStartedBtn')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
