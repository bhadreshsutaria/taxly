import React from "react";
import { useHistory, NavLink } from "react-router-dom";
const Listmenu = (props) => {
    let history = useHistory();

    const onRedirect = (url) => {
        history.push(url)
    }
    return (
      <>
        <ul id="menu-main-nav" className="main-nav__list">
            <li className="menu-item">
                <NavLink activeClassName="active" exact rel="noopener" to="/faq/">FAQ</NavLink>
            </li>
            <li className="menu-item">
                <NavLink activeClassName="active" exact rel="noopener" to="/how-it-works/">How it works</NavLink>
            </li>
            <li className="menu-item">
                <NavLink activeClassName="active" exact rel="noopener" to="/insights/">Insights</NavLink>
            </li>
            <li className="menu-item">
                <NavLink activeClassName="active" exact rel="noopener" to="/app/">App</NavLink>
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