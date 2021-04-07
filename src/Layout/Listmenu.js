import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Listmenu = () => {
    let history = useHistory();

    const onRedirect = (url) => {
        history.push(url)
    }
    const { t } = useTranslation();
    return (
      <>
        <ul id="menu-main-nav" className="main-nav__list">
            <li className="menu-item">
                <NavLink activeClassName="active" exact rel="noopener" to="/faq/">{t('header.data.navLinkFaq')}</NavLink>
            </li>
            <li className="menu-item">
                <NavLink activeClassName="active" exact rel="noopener" to="/how-it-works/">{t('header.data.navLinkHowItWork')}</NavLink>
            </li>
            <li className="menu-item">
                <NavLink activeClassName="active" exact rel="noopener" to="/insights/">{t('header.data.navLinkInsights')}</NavLink>
            </li>
            <li className="menu-item">
                <NavLink activeClassName="active" exact rel="noopener" to="/app/">{t('header.data.navLinkApp')}</NavLink>
            </li>
            {/* <li className="menu-item"><a rel="noopener" onClick={() => onRedirect('/faq/')}>FAQ</a></li>
            <li className="menu-item"><a rel="noopener" onClick={() => onRedirect('/how-it-works/')}>How it works</a></li>
            <li className="menu-item"><a rel="noopener" onClick={() => onRedirect('/insights/')}>Insights</a></li>
            <li className="menu-item"><a rel="noopener" onClick={() => onRedirect('/app/')}>App</a></li> */}
        </ul>
      </>
    );
};
export default Listmenu;