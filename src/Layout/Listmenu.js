import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Listmenu = () => {
    const { t } = useTranslation();
    const [scrol, setScrol] = useState(0);
    useEffect(() => {
        try {
            window.scroll();
        } catch (error) {
            window.scroll(scrolling);
        }
    }, []);
    const scrolling = () => {
        setScrol(window.scroll({top: 0,left: 0,behavior: 'smooth'}))
    }
    return (
      <>
        <ul id="menu-main-nav" className="main-nav__list">
            <li className="menu-item">
                <NavLink activeClassName="active" onClick={scrolling} exact rel="noopener" to="/faq/">{t('header.data.navLinkFaq')}</NavLink>
            </li>
            <li className="menu-item">
                <NavLink activeClassName="active" onClick={scrolling} exact rel="noopener" to="/how-it-works/">{t('header.data.navLinkHowItWork')}</NavLink>
            </li>
            <li className="menu-item">
                <NavLink activeClassName="active" onClick={scrolling} exact rel="noopener" to="/insights/">{t('header.data.navLinkInsights')}</NavLink>
            </li>
            <li className="menu-item">
                <NavLink activeClassName="active" onClick={scrolling}  exact rel="noopener" to="/app/">{t('header.data.navLinkApp')}</NavLink>
            </li>
        </ul>
      </>
    );
};
export default Listmenu;