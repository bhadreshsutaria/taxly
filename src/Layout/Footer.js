import React from "react";
import images from "../Utils/ImageHelper";
import { useHistory } from "react-router-dom";
export default function Footer() {
    let history = useHistory();

    const onRedirect = (url) => {
        history.push(url)
    }
    return (
        <div className="footer-wrap">
        <footer className="site-footer">
            <div className="l-container l-container--wide taxly-footer">
                <div className="l-footer-row">
                    <div className="l-footer-column taxly-footer-logo">
                        <a href="/"><img src={images.logowhite} alt="Footer Logo" /></a>
                    </div>
                    <div className="l-footer-column taxly-footer-2">
                        <div className="footer-menu">
                            <div className="footer-menu__heading">Features</div>
                            <ul className="footer-menu__list">
                                <li><a onClick={() => onRedirect('/api/')}>API</a></li>
                                <li><a onClick={() => onRedirect('/social-impact/')}>Charity</a></li>
                                <li><a onClick={() => onRedirect('/insights/')}>Insights</a></li>
                                <li><a onClick={() => onRedirect('/tax-accountants/')}>Tax Accountants</a></li>
                                <li><a onClick={() => onRedirect('/app/')}>App</a></li>
                                <li><a onClick={() => onRedirect('/de-taxcalculator/')} rel="noopener">2020 Calculator</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="l-footer-column taxly-footer-3">
                        <div className="footer-menu">
                            <div className="footer-menu__heading">Resources</div>
                            <ul className="footer-menu__list">
                                <li><a target="_blank" rel="noopener" href="https://medium.com/taxly">Blog</a></li>
                                <li><a onClick={() => onRedirect('/faq/')}>FAQ</a></li>
                                <li><a onClick={() => onRedirect('/community/')}>Community</a></li>
                                <li><a onClick={() => onRedirect('/tax-dictionary/')}>Tax Dictionary</a></li>
                                <li><a onClick={() => onRedirect('/how-it-works/')}>How it works</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="l-footer-column taxly-footer-4">
                        <div className="footer-menu">
                            <div className="footer-menu__heading">Company</div>
                            <ul className="footer-menu__list">
                                <li><a onClick={() => onRedirect('/careers/')}>Join the team</a></li>
                                <li><a onClick={() => onRedirect('/privacy/')}>Privacy Policy</a></li>
                                <li><a onClick={() => onRedirect('/terms-of-service/')}>Terms of Service</a></li>
                                <li><a onClick={() => onRedirect('/contact-us/')}>Contact Us</a></li>
                                <li><a onClick={() => onRedirect('/about-us/')}>About us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="l-footer-column taxly-footer-5">
                        <div className="footer-menu">
                            <div className="footer-menu__heading">Language</div>
                            <div className="language-switcher">
                                <ul className="wpm-language-switcher switcher-dropdown">
                                    <li className="item-language-main item-language-en"><span><span>English</span></span>
                                        <ul className="language-dropdown">
                                            <li className="item-language-de"><a href="https://taxly.ch/de/" data-lang="de"><span>Deutsch</span></a></li>
                                            <li className="item-language-fr"><a href="https://taxly.ch/fr/" data-lang="fr"><span>Français</span></a></li>
                                            <li className="item-language-it"><a href="https://taxly.ch/it/" data-lang="it"><span>Italiano</span></a></li>
                                            <li className="item-language-pt"><a href="https://taxly.ch/pt/" data-lang="pt"><span>Português</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-menu__heading">Follow Us</div>
                            <ul className="taxly-footer-social">
                                <li><a href="https://www.facebook.com/SimplifiedByTaxly" target="_blank"><img src={images.socfacebook} alt="Facebook" /></a></li>
                                <li><a href="https://twitter.com/Taxly_" target="_blank"><img src={images.soctwitter} alt="Twitter" /></a></li>
                                <li><a href="https://www.instagram.com/Taxly___/" target="_blank"><img src={images.socinstagram} alt="Instagram" /></a></li>
                                <li><a href="https://www.linkedin.com/company/taxlyag" target="_blank"><img src={images.soclinkedin} alt="Linkedin" /></a></li>
                                <li><a href="https://medium.com/taxly" target="_blank"><img src={images.socmedium} alt="Medium" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="b-footer-copyright">
                    <p className="copyright-location taxly-icon taxly-icon-heart">Made with love in Zürich</p>
                    <p className="copyright-date">Tax services provided by Taxly AG. Company registration Number CHE-253.409.943 <br />© 2021 Taxly AG</p>
                </div>
            </div>
        </footer>
    </div>
    );
}
