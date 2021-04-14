import React, {useEffect} from "react";
import images from "../Utils/ImageHelper";
import Listmenu from "../Layout/Listmenu";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { t } = useTranslation();
    const [scrolled, setScrolled]=React.useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 98){
        setScrolled(true);
        let x=[''];
        if(scrolled){
            x.push('down wrapfixed');
        }
        let y=[''];
        if(scrolled){
            y.push('myfixed');
        }
        }
        else{
        setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })
    let x=[''];
    if(scrolled){
        x.push('down wrapfixed');
    }
    let y=[''];
    if(scrolled){
        y.push('myfixed');
    }
    return (
        <div id="mysticky-wrap">
            <div id="mysticky-nav" style={{top: 0}} className={`up ${x.join("")}`}>
                <div id="menu-container" className={y.join("")}>
                    <div className="main-nav">
                        <Listmenu />
                        <ul className="main-nav__right">
                            <li className="menu-item"><a href="#" className="taxly-icon taxly-icon-language">{t("language")}</a></li>
                            <li className="menu-item"><a href="https://app.taxly.ch/Identity/Account/Login?culture=en" target="_blank" rel="noreferrer" className="taxly-icon taxly-icon-login">{t('header.data.navLogIn')}</a></li>
                        </ul>
                    </div>
                    <div className="taxly-logo">
                        <a href="/">
                            <img className="taxly-logo__icon taxly-logo__blue" src={images.sitelogonavy} alt="Taxly" />
                            <img className="taxly-logo__icon taxly-logo__white taxly-logo__icon_fixed" src={images.logowhite} alt="Taxly" />
                        </a>
                    </div>
                    <a href="https://app.taxly.ch/GettingStarted" target="_blank" rel="noreferrer" className={`btn btn-large hero__cta btn-${t("language")}`}>{t('header.data.navGetStartedBtn')}</a>
                </div>
            </div>
        </div>
    );
}