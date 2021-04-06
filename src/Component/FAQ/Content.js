import React from "react";
import {FaqTabData, SingalData} from "../FAQ/Data";
import { useTranslation } from "react-i18next";
const FaqTab = (props) =>{
    return(
        <div className={`taxly-box ${props.extraClass === '' ? '':  props.extraClass}`}>
            <div className="box-top-left box-image"></div>
            <div className="box-top-right box-image"></div>
            <div className="box-bottom-left box-image"></div>
            <div className="box-bottom-right box-image"></div>
            <div className="box-content">
                <a href="#" className="page-navigation__item js-about-us-tab">
                    <div className="page-navigation__item-text">{props.tabName}</div>
                </a>
            </div>
        </div>
    );
};

const FaqContent = () =>{
    const { t } = useTranslation();
    let FaqTabData =  t('faq.FaqTabData.data', { returnObjects: true });
    return(
        <main className="page-content page-content--about hero-none taxly-white taxly-default faq">
            <section className="main-wrapper">
                <div className="l-container l-container--content">
                    <aside className="page-navigation">
                        {FaqTabData.map((val, ind) =>{
                            return <FaqTab 
                                    key={ind}
                                    extraClass={val.extraClass}
                                    tabName={val.tabName}
                                />;
                        })}
                    </aside>
                    <div className="about-content">
                        <div className="about-content__wrapper">
                            <div className="about-content-tab-item list-items-style">
                                <h2 className="page-heading">{t('faq.SingalData.headingTitleOne')}</h2>
                                <p>{t('faq.SingalData.actiOneP1Text')}</p>
                                <h3 className="site-section-line">{SingalData.sslOneH31Heading}</h3>
                                <p>{SingalData.actiOneP2Text}</p>
                                <p>{SingalData.actiOneP3Text}</p>
                                <h3 className="site-section-line">{SingalData.sslOneH32Heading}</h3>
                                <p>{SingalData.actiOneP4Text}</p>
                                <p>{SingalData.actiOneP5Text}</p>
                                <p>{SingalData.actiOneP6Text}</p>
                                <p>{SingalData.actiOneP7Text}</p>
                                <h3 className="site-section-line">{SingalData.sslOneH33Heading}</h3>
                                <p>{SingalData.actiOneP8Text}</p>
                                <h3 className="site-section-line">{SingalData.sslOneH34Heading}</h3>
                                <p>{SingalData.actiOneP9Text}</p>
                                <h3 className="site-section-line">{SingalData.sslOneH35Heading}</h3>
                                <p>{SingalData.actiOneP10Text}</p>
                                <p>{SingalData.actiOneP11Text}</p>
                                <h3 className="site-section-line">{SingalData.sslOneH36Heading}</h3>
                                <p>{SingalData.actiOneP12Text}</p>
                                <h3 className="site-section-line">{SingalData.sslOneH37Heading}</h3>
                                <p>{SingalData.actiOneP13Text}</p>
                            </div>
                            <div className="about-content-tab-item list-items-style">
                                <h2 className="page-heading">{SingalData.headingTitleOne}</h2>
                                <p>{SingalData.actiTwoP1Text}</p>
                                <p>{SingalData.actiTwoP2Text}</p>
                                <p>{SingalData.actiTwoP3Text}</p>
                                <h3 className="site-section-line">{SingalData.sslTwoH31Heading}</h3>
                                <p>{SingalData.actiTwoP4Text}</p>
                                <h3 className="site-section-line">{SingalData.sslTwoH32Heading}</h3>
                                <p>{SingalData.actiTwoP5Text}</p>
                            </div>
                            <div className="about-content-tab-item list-items-style">
                                <h2 className="page-heading">{SingalData.headingTitleThree}</h2>
                                <p>{SingalData.actiThreeP1Text}</p>
                                <h3 className="site-section-line">{SingalData.sslThreeH31Heading}</h3>
                                <p>{SingalData.actiThreeP2Text}</p>
                                <h3 className="site-section-line">{SingalData.sslThreeH32Heading}</h3>
                                <p>{SingalData.actiThreeP3Text}</p>
                            </div>
                            <div className="about-content-tab-item list-items-style">
                                <h2 className="page-heading">{SingalData.headingTitleFour}</h2>
                                <p>{SingalData.actiFourP1Text}</p>
                                <h3 className="site-section-line">{SingalData.sslFourH31Heading}</h3>
                                <p>{SingalData.actiFourP2Text}</p>
                                <h3 className="site-section-line">{SingalData.sslFourH32Heading}</h3>
                                <p>{SingalData.actiFourP3Text}</p>
                                <h3 className="site-section-line">{SingalData.sslFourH33Heading}</h3>
                                <p>{SingalData.actiFourP4Text}</p>
                                <h3 className="site-section-line">{SingalData.sslFourH34Heading}</h3>
                                <p>{SingalData.actiFourP5Text}</p>
                                <h3 className="site-section-line">{SingalData.sslFourH35Heading}</h3>
                                <p>{SingalData.actiFourP6Text}</p>
                                <h3 className="site-section-line">{SingalData.sslFourH36Heading}</h3>
                                <p>{SingalData.actiFourP7Text}</p>
                            </div>
                            <div className="about-content-tab-item list-items-style">
                                <h2 className="page-heading">{SingalData.headingTitleFive}</h2>
                                <p>{SingalData.actiFiveP1Text}</p>
                                <h3 className="site-section-line">{SingalData.sslFiveH31Heading}</h3>
                                <p>{SingalData.actiFiveP2Text}</p>
                                <h3 className="site-section-line">{SingalData.sslFiveH32Heading}</h3>
                                <p>{SingalData.actiFiveP3Text}</p>
                                <p>{SingalData.actiFiveP4Text}</p>
                            </div>
                            <div className="about-content-tab-item list-items-style">
                                <h2 className="page-heading">{SingalData.headingTitleSix}</h2>
                                <p>{SingalData.actiSixP1Text}</p>
                                <p>{SingalData.actiSixP2Text}</p>
                                <p>{SingalData.actiSixP3Text}</p>
                                <h3 className="site-section-line">{SingalData.sslSixH32Heading}</h3>
                                <p>{SingalData.actiSixP4Text}</p>
                                <p>{SingalData.actiSixP5Text}</p>
                                <p>{SingalData.actiSixP6Text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
export {FaqTab, FaqContent};