import React from "react";
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
                                <h3 className="site-section-line">{t('faq.SingalData.sslOneH31Heading')}</h3>
                                <p>{t('faq.SingalData.actiOneP2Text')}</p>
                                <p>{t('faq.SingalData.actiOneP3Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslOneH32Heading')}</h3>
                                <p>{t('faq.SingalData.actiOneP4Text')}</p>
                                <p>{t('faq.SingalData.actiOneP5Text')}</p>
                                <p>{t('faq.SingalData.actiOneP6Text')}</p>
                                <p>{t('faq.SingalData.actiOneP7Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslOneH33Heading')}</h3>
                                <p>{t('faq.SingalData.actiOneP8Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslOneH34Heading')}</h3>
                                <p>{t('faq.SingalData.actiOneP9Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslOneH35Heading')}</h3>
                                <p>{t('faq.SingalData.actiOneP10Text')}</p>
                                <p>{t('faq.SingalData.actiOneP11Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslOneH36Heading')}</h3>
                                <p>{t('faq.SingalData.actiOneP12Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslOneH37Heading')}</h3>
                                <p>{t('faq.SingalData.actiOneP13Text')}</p>
                            </div>
                            <div className="about-content-tab-item list-items-style">
                                <h2 className="page-heading">{t('faq.SingalData.headingTitleOne')}</h2>
                                <p>{t('faq.SingalData.actiTwoP1Text')}</p>
                                <p>{t('faq.SingalData.actiTwoP2Text')}</p>
                                <p>{t('faq.SingalData.actiTwoP3Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslTwoH31Heading')}</h3>
                                <p>{t('faq.SingalData.actiTwoP4Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslTwoH32Heading')}</h3>
                                <p>{t('faq.SingalData.actiTwoP5Text')}</p>
                            </div>
                            <div className="about-content-tab-item list-items-style">
                                <h2 className="page-heading">{t('faq.SingalData.headingTitleThree')}</h2>
                                <p>{t('faq.SingalData.actiThreeP1Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslThreeH31Heading')}</h3>
                                <p>{t('faq.SingalData.actiThreeP2Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslThreeH32Heading')}</h3>
                                <p>{t('faq.SingalData.actiThreeP3Text')}</p>
                            </div>
                            <div className="about-content-tab-item list-items-style">
                                <h2 className="page-heading">{t('faq.SingalData.headingTitleFour')}</h2>
                                <p>{t('faq.SingalData.actiFourP1Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslFourH31Heading')}</h3>
                                <p>{t('faq.SingalData.actiFourP2Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslFourH32Heading')}</h3>
                                <p>{t('faq.SingalData.actiFourP3Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslFourH33Heading')}</h3>
                                <p>{t('faq.SingalData.actiFourP4Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslFourH34Heading')}</h3>
                                <p>{t('faq.SingalData.actiFourP5Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslFourH35Heading')}</h3>
                                <p>{t('faq.SingalData.actiFourP6Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslFourH36Heading')}</h3>
                                <p>{t('faq.SingalData.actiFourP7Text')} {t('faq.SingalData.actiFourP7TextLink') === '' ? '' : <a href={t('faq.SingalData.actiFourP7TextLinkUrl')}>{t('faq.SingalData.actiFourP7TextLink')}</a>}{t('faq.SingalData.actiFourP7ExtraText')}</p>
                            </div>
                            <div className="about-content-tab-item list-items-style">
                                <h2 className="page-heading">{t('faq.SingalData.headingTitleFive')}</h2>
                                <p>{t('faq.SingalData.actiFiveP1Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslFiveH31Heading')}</h3>
                                <p>{t('faq.SingalData.actiFiveP2Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslFiveH32Heading')}</h3>
                                <p>{t('faq.SingalData.actiFiveP3Text')}</p>
                                <p>{t('faq.SingalData.actiFiveP4Text')} {t('faq.SingalData.actiFiveP4TextLink') === '' ? '' : <a href={t('faq.SingalData.actiFiveP4TextLinkUrl')}>{t('faq.SingalData.actiFiveP4TextLink')}</a>}{t('faq.SingalData.actiFiveP4ExtraText')}</p>
                            </div>
                            <div className="about-content-tab-item list-items-style">
                                <h2 className="page-heading">{t('faq.SingalData.headingTitleSix')}</h2>
                                <p>{t('faq.SingalData.actiSixP1Text')}</p>
                                <p>{t('faq.SingalData.actiSixP2Text')}</p>
                                <p>{t('faq.SingalData.actiSixP3Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslSixH32Heading')}</h3>
                                <p>{t('faq.SingalData.actiSixP4Text')}</p>
                                <p>{t('faq.SingalData.actiSixP5Text')}</p>
                                <p>{t('faq.SingalData.actiSixP6Text')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
export {FaqTab, FaqContent};