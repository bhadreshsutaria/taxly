import React from "react";
import images from "../Utils/ImageHelper";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function MobileMenu(props) {
    const { t } = useTranslation();
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
                        <NavLink activeClassName="active" exact rel="noopener" to="/de-taxcalculator.html">{t('header.data.navLinkTaxcalculator')}</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" exact rel="noopener" to="/about-us/">{t('header.data.navLinkAboutus')}</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" exact rel="noopener" to="/faq/">{t('header.data.navLinkFaqs')}</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" exact rel="noopener" to="/how-it-works/">{t('header.data.navLinkHowItWork')}</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" exact rel="noopener" to="/insights/">{t('header.data.navLinkInsights')}</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" exact rel="noopener" to="/tax-extension/">{t('header.data.navLinkTaxExtension')}</NavLink>
                    </li>
                </ul>
                <ul className="bottom-menu">
                    <li><a href="https://app.taxly.ch/Identity/Account/Login?culture=en" target="_blank" rel="noreferrer" className="taxly-icon taxly-icon-login">{t('header.data.navLogIn')}</a></li>
                </ul>
            </div>
        </>
    );
}