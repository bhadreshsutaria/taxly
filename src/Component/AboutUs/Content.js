import React , {useState} from "react";
import images from "../../Utils/ImageHelper";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
import { useTranslation } from "react-i18next";

const AboutUsHeroSection = () => {
    const { t } = useTranslation();
    return(
        <div className="header-wrap hero__inner__white">
            <MobileMenu/>
            <div className="taxly-hero taxly-hero_bg" style={{ backgroundImage: `url(${images.TaxlyAboutUsBg})` }}>
                <Navbar/>
                <div className="hero site-section padding-bottom-none l-container in-viewport">
                    <div className="hero__wrapper">
                        <div className="l-container l-container--content">
                            <h1 className="page-heading">{t('aboutUs.SingleData.pageHeading')}</h1>
                            <p>{t('aboutUs.SingleData.pageSubHeading')}</p>
                            <a href="https://app.taxly.ch/GettingStarted" target="_blank" class="btn btn-large hero__cta">{t('aboutUs.SingleData.pageBtnText')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

const AboutUsOurMission = () => {
    const { t } = useTranslation();
    let AboutUsOurMissionData =  t('aboutUs.AboutUsOurMissionData.data', { returnObjects: true });
    return(
        <section className="site-section taxly-grey-bg">
            <div className="l-container">
                <h2 className="site-section__heading">{t('aboutUs.SingleData.AboutUsOMHeading')}</h2>
                <div className="site-section__subheading">
                    <p>{t('aboutUs.SingleData.AboutUsOMSubHeading')}</p>
                </div>
                <div className="site-section__module icons-module">
                    <div className="columns-4">
                        {AboutUsOurMissionData.map((val,ind) =>
                            <div key={ind} className="columns-4-item">
                                <img src={val.image} alt={val.imgAlt} />
                                <p>{val.text}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutUsManagementTeam = () => {
    const { t } = useTranslation();
    return(
        <section className="site-section">
            <div className="l-container">
                <h2 className="site-section__heading">Management Team</h2>
                <div className="site-section__subheading">
                    <p>Meet the forward-thinkers and disrupters driving the business forward.</p>
                </div>
                <div className="site-section__module management_team people-module">
                    <div className="columns-3 taxly-boxes taxly-boxes-square">
                        <div className="columns-3-item taxly-box taxly-box-white">
                            <div className="box-top-left box-image"></div>
                            <div className="box-top-right box-image"></div>
                            <div className="box-bottom-left box-image"></div>
                            <div className="box-bottom-right box-image"></div>
                            <div className="box-content">
                                <a href="https://www.linkedin.com/in/dshkershaw/" className="icon-linkedin" target="_blank"></a>
                                <img src="https://taxly.ch/wp-content/uploads/2019/12/about-1.jpg" alt="" />
                                <div className="person-item">
                                    <h3>Daniel S. H. Kershaw</h3>
                                    <p>Founder &amp; CEO</p>
                                </div>
                            </div>
                        </div>
                        <div className="columns-3-item taxly-box taxly-box-white">
                            <div className="box-top-left box-image"></div>
                            <div className="box-top-right box-image"></div>
                            <div className="box-bottom-left box-image"></div>
                            <div className="box-bottom-right box-image"></div>
                            <div className="box-content">
                                <a href="https://www.linkedin.com/company/taxlyag" className="icon-linkedin" target="_blank"></a>
                                <img src="https://taxly.ch/wp-content/uploads/2020/01/about-6.jpg" alt="" />
                                <div className="person-item">
                                    <h3>Roger</h3>
                                    <p>The Tax Boss</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutUsInvestorsAndAdvisors = () => {
    const { t } = useTranslation();
    return(
        <section className="site-section taxly-grey-bg">
            <div className="l-container">
                <h2 className="site-section__heading">Investors &amp; Advisors</h2>
                <div className="site-section__subheading">
                    <p>We are lucky enough to be supported by some truly amazing people.</p>
                </div>
                <div className="people-module investors-module">
                    <div className="columns-3 taxly-boxes taxly-boxes-square">
                        <div className="columns-3-item taxly-box taxly-box-white">
                            <div className="box-top-left box-image"></div>
                            <div className="box-top-right box-image"></div>
                            <div className="box-bottom-left box-image"></div>
                            <div className="box-bottom-right box-image"></div>
                            <div className="box-content">
                                <a href="https://www.linkedin.com/in/sakebosch/" className="icon-linkedin" target="_blank"></a>
                                <h3>Sake Bosch</h3>
                                <p>Prime Ventures</p>
                            </div>
                        </div>
                        <div className="columns-3-item taxly-box taxly-box-white">
                            <div className="box-top-left box-image"></div>
                            <div className="box-top-right box-image"></div>
                            <div className="box-bottom-left box-image"></div>
                            <div className="box-bottom-right box-image"></div>
                            <div className="box-content">
                                <a href="https://www.linkedin.com/in/joao-monteiro-cv/" className="icon-linkedin" target="_blank"></a>
                                <h3>Joao Monteiro</h3>
                                <p>Pinto Ventures</p>
                            </div>
                        </div>
                        <div className="columns-3-item taxly-box taxly-box-white">
                            <div className="box-top-left box-image"></div>
                            <div className="box-top-right box-image"></div>
                            <div className="box-bottom-left box-image"></div>
                            <div className="box-bottom-right box-image"></div>
                            <div className="box-content">
                                <a href="https://www.linkedin.com/in/noel-hayden-2621475/" className="icon-linkedin" target="_blank"></a>
                                <h3>Noel Hayden</h3>
                                <p>Gamesys Ltd</p>
                            </div>
                        </div>
                        <div className="columns-3-item taxly-box taxly-box-white">
                            <div className="box-top-left box-image"></div>
                            <div className="box-top-right box-image"></div>
                            <div className="box-bottom-left box-image"></div>
                            <div className="box-bottom-right box-image"></div>
                            <div className="box-content">
                                <a href="https://www.helvetia.com" className="icon-linkedin" target="_blank"></a>
                                <h3>Helvetia Investment Fund</h3>
                                <p>Helvetia Insurance</p>
                            </div>
                        </div>
                        <div className="columns-3-item taxly-box taxly-box-white">
                            <div className="box-top-left box-image"></div>
                            <div className="box-top-right box-image"></div>
                            <div className="box-bottom-left box-image"></div>
                            <div className="box-bottom-right box-image"></div>
                            <div className="box-content">
                                <a href="https://www.linkedin.com/in/georgsobczak/" className="icon-linkedin" target="_blank"></a>
                                <h3>Georg Sobczak</h3>
                                <p>Advisor</p>
                            </div>
                        </div>
                        <div className="columns-3-item taxly-box taxly-box-white">
                            <div className="box-top-left box-image"></div>
                            <div className="box-top-right box-image"></div>
                            <div className="box-bottom-left box-image"></div>
                            <div className="box-bottom-right box-image"></div>
                            <div className="box-content">
                                <a href="https://www.linkedin.com/in/dr-stefan-a-heitmann-73883955/" className="icon-linkedin" target="_blank"></a>
                                <h3>Dr. Stefan A. Heitmann</h3>
                                <p>MoneyPark</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export{AboutUsHeroSection, AboutUsOurMission, AboutUsManagementTeam, AboutUsInvestorsAndAdvisors};