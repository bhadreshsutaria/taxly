import React from "react";
import Faqheader from "../../Layout/Faqheader";
import Footer from "../../Layout/Footer";
import { useTranslation } from "react-i18next";
export default function ContactUs() {
    const { t } = useTranslation();
    let contactBoxData =  t('contactus.contactBoxData.data', { returnObjects: true });
    return (
        <div className="App">
            <Faqheader/>
            <main className="page-content">
                <section className="site-section">
                    <div className="l-container">
                        <h2 className="site-section__heading">{t('contactus.SingleData.pageHeading')}</h2>
                        <div className="site-section__subheading">{t('contactus.SingleData.pageSubHeading')}</div>
                        <div className="site-section__module contact-us contact-us-module">
                            <div className="columns-3 taxly-boxes taxly-boxes-square">
                                {contactBoxData.map((val,ind) =>
                                    <div key={ind} className="columns-3-item taxly-box taxly-box-white">
                                        <div className="box-top-left box-image"></div>
                                        <div className="box-top-right box-image"></div>
                                        <div className="box-bottom-left box-image"></div>
                                        <div className="box-bottom-right box-image"></div>
                                        <div className="box-content">
                                            <div className="contact_us-item">
                                                <h3>{val.title}</h3>
                                                <div>
                                                    <a target={val.linkTarget === '' ? '' : val.linkTarget} href={val.linkHref}>{val.link}</a>
                                                    <div className="subtitle">{val.subTitle}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}