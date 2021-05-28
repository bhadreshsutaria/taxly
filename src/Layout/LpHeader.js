import React from "react";
import images from "../Utils/ImageHelper";
import { useTranslation } from "react-i18next";
import '../Assets/Css/style.css';
import '../Assets/Css/style_v2.css';

export default function LpHeader() {
    const { t } = useTranslation();
    return (
        <header className="partnership-header partnership-header_position-sticky">
            <div className="l-container">
                <a href="/" className="partnership-template__logo">
                    <img src={images.taxlyLpLogo} alt="Complicated is Outdated. Swiss Tax Returns Made Simple." />
                </a>
                <a href="#" className="taxly-icon taxly-icon-language taxly-lang-button taxly-lang-button_position-sticky">{t('partnersHelvetia.SingleData.language')}</a>
            </div>
        </header>
    );
}
