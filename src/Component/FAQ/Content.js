import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import { Tab, Nav } from 'react-bootstrap';
const FaqTab = () =>{
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const handleClick = (ind) => {
        setIndex(ind);
    }
    let FaqTabData =  t('faq.FaqTabData.data', { returnObjects: true });
    const FaqTab = FaqTabData.map((val, ind) =>{
        return(
            <div key={ind} onClick={() => handleClick(ind)} className={`taxly-box ${ind === index ? 'selected' : ''}`}>
                <div className="box-top-left box-image"></div>
                <div className="box-top-right box-image"></div>
                <div className="box-bottom-left box-image"></div>
                <div className="box-bottom-right box-image"></div>
                <div className="box-content">
                    <Nav.Link eventKey={val.tabId} className="page-navigation__item">
                        <div className="page-navigation__item-text">{val.tabName}</div>
                    </Nav.Link>
                </div>
            </div>
        );
    })
    return (
        <>
        {FaqTab}
        </>
    );
};

const FaqContent = () =>{
    const { t } = useTranslation();
    return(
        <>
        <main className="page-content page-content--about hero-none taxly-white taxly-default faq">
        <Tab.Container defaultActiveKey="about_us" >
            <section className="main-wrapper">
                <div className="l-container l-container--content">
                    <aside className="page-navigation">
                        <FaqTab/>
                    </aside>
                    <div className="about-content">
                        <div className="about-content__wrapper">
                            <Tab.Content>
                            <Tab.Pane eventKey="about_us">
                                <div className="about-content-tab-item list-items-style">
                                <h2 className="page-heading">{t('faq.SingalData.headingTitleOne')}</h2>
                                <p>{t('faq.SingalData.actiOneP1Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslOneH31Heading')}</h3>
                                <p>{t('faq.SingalData.actiOneP2Text')}</p>
                                <p>{t('faq.SingalData.actiOneP3Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslOneH32Heading')}</h3>
                                {t('faq.SingalData.actiOneP4Text') === '' ? '' : <p>{t('faq.SingalData.actiOneP4Text')}</p>}
                                {t('faq.SingalData.actiOneP5Text') === '' ? '' : <p>{t('faq.SingalData.actiOneP5Text')}</p>}
                                {t('faq.SingalData.actiOneP6Text') === '' ? '' : <p>{t('faq.SingalData.actiOneP6Text')}</p>}
                                {t('faq.SingalData.actiOneP7Text') === '' ? '' : <p>{t('faq.SingalData.actiOneP7Text')}</p>}
                                <h3 className="site-section-line">{t('faq.SingalData.sslOneH33Heading')}</h3>
                                <p>{t('faq.SingalData.actiOneP8Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslOneH34Heading')}</h3>
                                <p>{t('faq.SingalData.actiOneP9Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslOneH35Heading')}</h3>
                                {t('faq.SingalData.actiOneP10Text') === '' ? '' : <p>{t('faq.SingalData.actiOneP10Text')}</p>}
                                {t('faq.SingalData.actiOneP11Text') === '' ? '' : <p>{t('faq.SingalData.actiOneP11Text')}</p>}
                                <h3 className="site-section-line">{t('faq.SingalData.sslOneH36Heading')}</h3>
                                {t('faq.SingalData.actiOneP12Text') === '' ? '' : <p>{t('faq.SingalData.actiOneP12Text')}</p>}
                                {t('faq.SingalData.actiOneP14Text') === '' ? '' : <p>{t('faq.SingalData.actiOneP14Text')}</p>}
                                <h3 className="site-section-line">{t('faq.SingalData.sslOneH37Heading')}</h3>
                                <p>{t('faq.SingalData.actiOneP13Text')}</p>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="how_it_works">
                            <div className="about-content-tab-item list-items-style">
                                <h2 className="page-heading">{t('faq.SingalData.headingTitleTwo')}</h2>
                                {t('faq.SingalData.actiTwoP1Text') === '' ? '' : <p>{t('faq.SingalData.actiTwoP1Text')}</p>}
                                {t('faq.SingalData.actiTwoP2Text') === '' ? '' : <p>{t('faq.SingalData.actiTwoP2Text')}</p>}
                                {t('faq.SingalData.actiTwoP3Text') === '' ? '' : <p>{t('faq.SingalData.actiTwoP3Text')}</p>}
                                <h3 className="site-section-line">{t('faq.SingalData.sslTwoH31Heading')}</h3>
                                <p>{t('faq.SingalData.actiTwoP4Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslTwoH32Heading')}</h3>
                                {t('faq.SingalData.actiTwoP5Text') === '' ? '' : <p>{t('faq.SingalData.actiTwoP5Text')}</p>}
                                {t('faq.SingalData.actiTwoP6Text') === '' ? '' : <p>{t('faq.SingalData.actiTwoP6Text')}</p>}
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="tax_stuff">
                            <div className="about-content-tab-item list-items-style">
                                <h2 className="page-heading">{t('faq.SingalData.headingTitleThree')}</h2>
                                <p>{t('faq.SingalData.actiThreeP1Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslThreeH31Heading')}</h3>
                                <p>{t('faq.SingalData.actiThreeP2Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslThreeH32Heading')}</h3>
                                <p>{t('faq.SingalData.actiThreeP3Text')}</p>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="documents">
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
                            </Tab.Pane>
                            <Tab.Pane eventKey="data_protection">
                            <div className="about-content-tab-item list-items-style">
                                <h2 className="page-heading">{t('faq.SingalData.headingTitleFive')}</h2>
                                <p>{t('faq.SingalData.actiFiveP1Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslFiveH31Heading')}</h3>
                                <p>{t('faq.SingalData.actiFiveP2Text')}</p>
                                <h3 className="site-section-line">{t('faq.SingalData.sslFiveH32Heading')}</h3>
                                {t('faq.SingalData.actiFiveP3Text') === '' ? '' : <p>{t('faq.SingalData.actiFiveP3Text')}</p>}
                                {t('faq.SingalData.actiFiveP4Text') === '' ? '' : <p>{t('faq.SingalData.actiFiveP4Text')} {t('faq.SingalData.actiFiveP4TextLink') === '' ? '' : <a href={t('faq.SingalData.actiFiveP4TextLinkUrl')}>{t('faq.SingalData.actiFiveP4TextLink')}</a>}{t('faq.SingalData.actiFiveP4ExtraText')}</p>}
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="charity_social_impact">
                            <div className="about-content-tab-item list-items-style">
                                <h2 className="page-heading">{t('faq.SingalData.headingTitleSix')}</h2>
                                <p>{t('faq.SingalData.actiSixP1Text')}</p>
                                {t('faq.SingalData.actiSixP2Text') === '' ? '' : <p>{t('faq.SingalData.actiSixP2Text')}</p>}
                                {t('faq.SingalData.actiSixP3Text') === '' ? '' : <p>{t('faq.SingalData.actiSixP3Text')}</p>}
                                {t('faq.SingalData.actiSixP44Text') === '' ? '' : <p>{t('faq.SingalData.actiSixP44Text')}</p>}
                                <h3 className="site-section-line">{t('faq.SingalData.sslSixH32Heading')}</h3>
                                {t('faq.SingalData.actiSixP4Text') === '' ? '' : <p>{t('faq.SingalData.actiSixP4Text')}</p>}
                                {t('faq.SingalData.actiSixP5Text') === '' ? '' : <p>{t('faq.SingalData.actiSixP5Text')}</p>}
                                {t('faq.SingalData.actiSixP6Text') === '' ? '' : <p>{t('faq.SingalData.actiSixP6Text')}</p>}
                                {t('faq.SingalData.actiSixP7Text') === '' ? '' : <p>{t('faq.SingalData.actiSixP7Text')}</p>}
                            </div>
                            </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </div>
                </div>
            </section>
        </Tab.Container>
        </main>
        </>
    );
};
export {FaqTab,FaqContent};