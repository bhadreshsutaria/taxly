import React from "react";
import { useTranslation } from "react-i18next";
const TermsOfService = () => {
    const { t } = useTranslation();
    let TwoHeadingH2Data =  t('TermsOfService.TwoHeadingH2.data', { returnObjects: true });
    let Terms1 =  t('TermsOfService.Terms1.data', { returnObjects: true });
    let Terms2 =  t('TermsOfService.Terms2.data', { returnObjects: true });
    let Terms2_1 =  t('TermsOfService.Terms2_1.data', { returnObjects: true });
    let Terms2_2 =  t('TermsOfService.Terms2_2.data', { returnObjects: true });
    let Terms2_3 =  t('TermsOfService.Terms2_3.data', { returnObjects: true });
    let Terms2_4 =  t('TermsOfService.Terms2_4.data', { returnObjects: true });
    let Terms2_5 =  t('TermsOfService.Terms2_5.data', { returnObjects: true });
    let Terms2_6 =  t('TermsOfService.Terms2_6.data', { returnObjects: true });
    let Terms2_7 =  t('TermsOfService.Terms2_7.data', { returnObjects: true });
    let Terms3 =  t('TermsOfService.Terms3.data', { returnObjects: true });
    return(
        <div className="l-container l-container--content">
            <h1 className="page-heading">{t('TermsOfService.SingleData.pageHeading')}</h1>
            <p className="page-lastupdated-date">{t('TermsOfService.SingleData.lastupdatedDate')}</p>
            <div className="the_content">
                <h2><strong>{t('TermsOfService.SingleData.OneHeadingH2')}</strong></h2>
                <p align="justify">{t('TermsOfService.SingleData.OneHeadingH2POne')}</p>
                <p align="justify">{t('TermsOfService.SingleData.OneHeadingH2PTwo')} </p>
                <hr />
                <h2><strong>{t('TermsOfService.TwoHeadingH2.pageHeading')}</strong></h2>
                {TwoHeadingH2Data.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <hr />
                <h3><strong>{t('TermsOfService.Terms1.sectionHeading')}</strong></h3>
                {Terms1.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <hr />
                <h3><strong>{t('TermsOfService.Terms2.sectionHeading')}</strong></h3>
                {Terms2.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <h4><strong>{t('TermsOfService.Terms2_1.sectionHeading')}</strong></h4>
                {Terms2_1.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <h4><strong>{t('TermsOfService.Terms2_2.sectionHeading')}</strong></h4>
                {Terms2_2.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <h4><strong>{t('TermsOfService.Terms2_3.sectionHeading')}</strong></h4>
                {Terms2_3.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <h4><strong>{t('TermsOfService.Terms2_4.sectionHeading')}</strong></h4>
                {Terms2_4.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <h4><strong>{t('TermsOfService.Terms2_5.sectionHeading')}</strong></h4>
                {Terms2_5.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <h4><strong>{t('TermsOfService.Terms2_6.sectionHeading')}</strong></h4>
                {Terms2_6.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <h4><strong>{t('TermsOfService.Terms2_7.sectionHeading')}</strong></h4>
                {Terms2_7.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <p><a href={`mailto:${t('TermsOfService.Terms2_7.link')}`} target="_blank" rel="noopener noreferrer">{t('TermsOfService.Terms2_7.link')}</a></p>
                <hr />
                <h3><strong>{t('TermsOfService.Terms3.sectionHeading')}</strong></h3>
                {Terms3.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
            </div>
        </div>
    );
};

export { TermsOfService };