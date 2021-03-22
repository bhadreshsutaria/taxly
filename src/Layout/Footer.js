import React from "react";
import images from "../Utils/ImageHelper";

export default function Footer() {

    return (
        <footer class="site-footer">
        <div class="l-container l-container--wide taxly-footer">
            <div class="l-footer-row">
                <div class="l-footer-column taxly-footer-logo">
                    <a href="/"><img src={images.logowhite} alt=""/></a>
                </div>
                <div class="l-footer-column taxly-footer-2">
                    <div class="footer-menu">
                        <div class="footer-menu__heading">Features</div>
                        <ul  class="footer-menu__list">
                            <li class="menu-item"><a href="/api/">API</a></li>
                            <li class="menu-item"><a href="/social-impact/">Charity</a></li>
                            <li class="menu-item"><a href="/insights/">Insights</a></li>
                            <li class="menu-item"><a href="/tax-accountants/">Tax Accountants</a></li>
                            <li class="menu-item"><a href="/app/">App</a></li>
                            <li class="menu-item"><a target="_blank" rel="noopener" href="/de-taxcalculator.html">2020 Calculator</a></li>
                        </ul>               
                    </div>
                </div>
                <div class="l-footer-column taxly-footer-3">
                    <div class="footer-menu">
                        <div class="footer-menu__heading">Resources</div>
                        <ul class="footer-menu__list">
                            <li id="menu-item-1195" class="menu-item"><a target="_blank" rel="noopener" href="https://medium.com/taxly">Blog</a></li>
                            <li class="menu-item"><a href="/faq/">FAQ</a></li>
                            <li class="menu-item"><a href="/community/">Community</a></li>
                            <li class="menu-item"><a href="/tax-dictionary/">Tax Dictionary</a></li>
                            <li class="menu-item"><a href="/how-it-works/">How it works</a></li>
                        </ul>                
                    </div>
                </div>
                <div class="l-footer-column taxly-footer-4">
                    <div class="footer-menu">
                        <div class="footer-menu__heading">Company</div>
                        <ul class="footer-menu__list">
                            <li class="menu-item"><a href="/careers/">Join the team</a></li>
                            <li class="menu-item"><a href="/privacy/">Privacy Policy</a></li>
                            <li class="menu-item"><a href="/terms-of-service/">Terms of Service</a></li>
                            <li class="menu-item"><a href="/contact-us/">Contact Us</a></li>
                            <li class="menu-item"><a href="/about-us/">About us</a></li>
                        </ul> 
                    </div>
                </div>
                <div class="l-footer-column taxly-footer-5">
                    <div class="footer-menu">
                        <div class="footer-menu__heading">Language</div>
                        <div class="language-switcher">
                            <ul class="wpm-language-switcher switcher-dropdown"><li class="item-language-main item-language-en"><span><span>English</span></span><ul class="language-dropdown"><li class="item-language-de"><a href="https://taxly.ch/de/" data-lang="de"><span>Deutsch</span></a></li><li class="item-language-fr"><a href="https://taxly.ch/fr/" data-lang="fr"><span>Français</span></a></li><li class="item-language-it"><a href="https://taxly.ch/it/" data-lang="it"><span>Italiano</span></a></li><li class="item-language-pt"><a href="https://taxly.ch/pt/" data-lang="pt"><span>Português</span></a></li></ul></li></ul>
                        </div>                    
                        <div class="footer-menu__heading">Follow Us</div>
                        <ul class="taxly-footer-social">
                            <li><a href="https://www.facebook.com/SimplifiedByTaxly" target="_blank"><img src={images.socfacebook} class="attachment-full size-full" alt="" loading="lazy"/></a></li>
                            <li><a href="https://twitter.com/Taxly_" target="_blank"><img src={images.soctwitter} class="attachment-full size-full" alt="" loading="lazy"/></a></li>
                            <li><a href="https://www.instagram.com/Taxly___/" target="_blank"><img src={images.socinstagram} class="attachment-full size-full" alt="" loading="lazy"/></a></li>
                            <li><a href="https://www.linkedin.com/company/taxlyag" target="_blank"><img src={images.soclinkedin} class="attachment-full size-full" alt="" loading="lazy"/></a></li>
                            <li><a href="https://medium.com/taxly" target="_blank"><img src={images.socmedium} class="attachment-full size-full" alt="" loading="lazy"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="b-footer-copyright">
                <p class="copyright-location taxly-icon taxly-icon-heart">Made with love in Zürich</p>
                <p class="copyright-date">Tax services provided by Taxly AG. Company registration Number CHE-253.409.943 <br/>© 2021 Taxly AG</p>
            </div>
        </div>
    </footer>

    );
}
