import React from 'react';
import images from "../../../Utils/ImageHelper";
import { useForm } from 'react-hook-form';
import { useTranslation } from "react-i18next";

const PartnersHelvetiaLogo = () => {
    const { t } = useTranslation();
    return(
        <section className="press-section press-section_style-bg partnership-press-section">
            <div className="l-container">
                <p className="press-section__title">{t("partnersHelvetia.SingleData.phLogoTitle")}</p>
                <ul className="press-section__list">
                    <li className="press-section__list-item">
                        <img style={{maxHeight: "20px"}} src={images.techCrunchLogo} alt="01_TechCrunch" />
                    </li>
                    <li className="press-section__list-item">
                        <img style={{maxHeight: "50px"}} src={images.twentyMinutenLogo} alt="02_20Minuten" />
                    </li>
                    <li className="press-section__list-item">
                        <img style={{maxHeight: "25px"}} src={images.nzzLogo} alt="03_NZZ" />
                    </li>
                    <li className="press-section__list-item">
                        <img style={{maxHeight: "25px"}} src={images.tagesanzeigerLogo} alt="04_Tagesanzeiger" />
                    </li>
                    <li className="press-section__list-item">
                        <img style={{maxHeight: "50px"}} src={images.cmsLogo} alt="cnn-money-switzerland" />
                    </li>
                </ul>
            </div>
        </section>
    );
}

const PartnersHelvetiaMainSection = () => {
    const { t } = useTranslation();
    let List =  t('partnersHelvetia.list.data', { returnObjects: true });
    let ResidenceStatus =  t('partnersHelvetia.ResidenceStatusSelect.data', { returnObjects: true });
    let hdyhauSelectData =  t('partnersHelvetia.hdyhauSelect.data', { returnObjects: true });
    let cantonSelectData =  t('partnersHelvetia.cantonSelect.data', { returnObjects: true });
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return(
        <main className="partnership-template">
            <div style={{ backgroundImage: `url(${images.helveticaHeaderBg})` }} className="partnership-hero partnership-template__hero">
                <div className="l-container">
                    <h1 className="partnership-hero__title partnership-hero__title_light">{t('partnersHelvetia.SingleData.pageHeading')}</h1>
                </div>
            </div>
            <div className="partnership-template__grid">
                <div className="l-container">
                    <div className="partnership-template__content">
                        <div className="partnership-template__text">
                            <p><b>{t('partnersHelvetia.SingleData.contentTitleOne')}</b></p>
                            <p>{t('partnersHelvetia.SingleData.contentParagraphOne')}</p>
                            <p>{t('partnersHelvetia.SingleData.contentParagraphTwo')}<br/><br/><b>{t('partnersHelvetia.SingleData.contentTitleTwo')}</b></p>
                            <p>{t('partnersHelvetia.SingleData.contentParagraphThree')}<br/><br/><b>{t('partnersHelvetia.SingleData.contentTitleThree')}</b></p>
                            {List.map((val,ind) =>
                                <p key={ind}>{val}</p>
                            )}
                        </div>
                        <div className="partnership-template__form">
                            <div className="partnership-template__form-note">
                                <span>{t('partnersHelvetia.SingleData.inPartnershipWith')}</span>
                                <img src="https://taxly.ch/wp-content/uploads/2021/03/helvetica.svg" alt="Complicated is Outdated. Swiss Tax Returns Made Simple." />
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form__group">
                                    <label htmlFor="first-name">{t('partnersHelvetia.SingleData.firstName')}</label>
                                    <input id="first-name" className="form__control" type="text" {...register("First name", {required: true, maxLength: 80})} />
                                </div>
                                <div className="form__group">
                                    <label htmlFor="last-name">{t('partnersHelvetia.SingleData.lastName')}</label>
                                    <input id="last-name" className="form__control" type="text" {...register("Last name", {required: true, maxLength: 100})} />
                                </div>
                                <div className="form__group">
                                    <label htmlFor="email">{t('partnersHelvetia.SingleData.email')}</label>
                                    <input id="email" className="form__control form-control-email" type="text" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                                </div>
                                <div className="form__group">
                                    <label htmlFor="residence-status">{t('partnersHelvetia.SingleData.residenceStatus')}</label>
                                    <select id="residence-status" className="form__control" {...register("Residence Status", { required: true })}>
                                        <option value="">---</option>
                                        {ResidenceStatus.map((val,ind) =>
                                            <option key={ind} value={val}>{val}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="form__group">
                                    <label htmlFor="residence-status">{t('partnersHelvetia.SingleData.hdyhau')}</label>
                                    <select id="residence-status" className="form__control" {...register("About Us", { required: true })}>
                                        <option value="">---</option>
                                        {hdyhauSelectData.map((val,ind) =>
                                            <option key={ind} value={val}>{val}</option>
                                        )}
                                    </select>
                                </div>
                                {/* <div className="form__group" style={{display: "none"}} id="helvetiaConsultant">
                                    <label htmlFor="consultant">{t('partnersHelvetia.SingleData.helvetiaConsultant')}</label>
                                    <input id="consultant" className="form__control" type="text" {...register("consultant", {required: true, maxLength: 100})} />
                                </div> */}
                                <div className="form__group">
                                    <label htmlFor="cantone">{t('partnersHelvetia.SingleData.canton')}</label>
                                    <select id="cantone" className="form__control" {...register("Canton", { required: true })}>
                                        <option value="">---</option>
                                        {cantonSelectData.map((val,ind) =>
                                            <option key={ind} value={val}>{val}</option>
                                        )}
                                    </select>
                                </div>
                                <p><input type="submit" value={t('partnersHelvetia.SingleData.phFormBtn')} className="form__submit" /></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <PartnersHelvetiaLogo/> 
        </main>
    );
}
export {PartnersHelvetiaMainSection, PartnersHelvetiaLogo};