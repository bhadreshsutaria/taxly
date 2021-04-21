import React from "react";
import images from "../Utils/ImageHelper";
import {NavLink } from "react-router-dom";
import LanguageSelect from "../Component/languageSelect";
import { useTranslation } from "react-i18next";
import AppendScripts from '../Utils/AppendScripts';


export default function Footer() {
    const { t } = useTranslation();
    AppendScripts('https://code.jquery.com/jquery-3.5.1.min.js');
    AppendScripts('/js/detectmobilebrowser.js');
    AppendScripts('/js/scripts.js');
    return (
        <>
        <footer className="site-footer">
            <div className="l-container l-container--wide taxly-footer">
                <div className="l-footer-row">
                    <div className="l-footer-column taxly-footer-logo">
                        <a href="/"><img src={images.logowhite} alt="Footer Logo" /></a>
                    </div>
                    <div className="l-footer-column taxly-footer-2">
                        <div className="footer-menu">
                            <div className="footer-menu__heading">{t('footer.features.headingFeatures')}</div>
                            <ul className="footer-menu__list">
                                <li>
                                    <NavLink exact to="/api/">{t('footer.features.navLinkApi')}</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/social-impact/">{t('footer.features.navLinkCharity')}</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/insights/">{t('header.data.navLinkInsights')}</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/tax-accountants/">{t('footer.features.navLinkTaxAccountants')}</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/app/">{t('header.data.navLinkApp')}</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/de-taxcalculator/" rel="noopener">{t('footer.features.navLink2020Calculator')}</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="l-footer-column taxly-footer-3">
                        <div className="footer-menu">
                            <div className="footer-menu__heading">{t('footer.resources.headingResources')}</div>
                            <ul className="footer-menu__list">
                                <li>
                                    <NavLink exact target="_blank" rel="noopener" to="https://medium.com/taxly">{t('footer.resources.navLinkBlog')}</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/faq/">{t('header.data.navLinkFaq')}</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/community/">{t('footer.resources.navLinkCommunity')}</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/tax-dictionary/">{t('footer.resources.navLinkTaxDictionary')}</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/insights/">{t('footer.resources.navLinkHowItWork')}</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="l-footer-column taxly-footer-4">
                        <div className="footer-menu">
                            <div className="footer-menu__heading">{t('footer.company.headingCompany')}</div>
                            <ul className="footer-menu__list">
                                <li>
                                    <NavLink exact to="/careers/">{t('footer.company.navLinkJoinTheTeam')}</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/privacy/">{t('footer.company.navLinkPrivacyPolicy')}</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/terms-of-service/">{t('footer.company.navLinkTermsOfService')}</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/contact-us/">{t('footer.company.navLinkContactUs')}</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/about-us/">{t('footer.company.navLinkAboutUs')}</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="l-footer-column taxly-footer-5">
                        <div className="footer-menu">
                            <div className="footer-menu__heading">{t('footer.language.headingLanguage')}</div>
                            <div className="language-switcher">
                                <LanguageSelect />
                            </div>
                            <div className="footer-menu__heading">{t('footer.followUs.headingfollowUs')}</div>
                            <ul className="taxly-footer-social">
                                <li><a href="https://www.facebook.com/SimplifiedByTaxly" target="_blank" rel="noreferrer"><img src={images.socfacebook} alt="Facebook" /></a></li>
                                <li><a href="https://twitter.com/Taxly_" target="_blank" rel="noreferrer"><img src={images.soctwitter} alt="Twitter" /></a></li>
                                <li><a href="https://www.instagram.com/Taxly___/" target="_blank" rel="noreferrer"><img src={images.socinstagram} alt="Instagram" /></a></li>
                                <li><a href="https://www.linkedin.com/company/taxlyag" target="_blank" rel="noreferrer"><img src={images.soclinkedin} alt="Linkedin" /></a></li>
                                <li><a href="https://medium.com/taxly" target="_blank" rel="noreferrer"><img src={images.socmedium} alt="Medium" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="b-footer-copyright">
                    <p className="copyright-location taxly-icon taxly-icon-heart">{t('footer.footerBottom.madeWith')}</p>
                    <p className="copyright-date">{t('footer.footerBottom.provideBy')} <br />{t('footer.footerBottom.copyRight')}</p>
                </div>
            </div>
        </footer>
        </>
    );
}
