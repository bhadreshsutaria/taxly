import React from "react";
import { useTranslation } from "react-i18next";
const PrivacyPolicy = () => {
    const { t } = useTranslation();
    let TwoHeadingH2Data =  t('privacy.TwoHeadingH2.data', { returnObjects: true });
    let PrivacyPolicy1 =  t('privacy.PrivacyPolicy1.data', { returnObjects: true });
    return(
        <div className="l-container l-container--content">
            <h1 className="page-heading">{t('privacy.SingleData.pageHeading')}</h1>
            <p className="page-lastupdated-date">{t('privacy.SingleData.lastupdatedDate')}</p>
            <div className="the_content">
                <h2><strong>{t('privacy.SingleData.OneHeadingH2')}</strong></h2>
                <p align="justify">{t('privacy.SingleData.OneHeadingH2POne')}</p>
                <p align="justify">{t('privacy.SingleData.OneHeadingH2PTwo')} <a href="https://www.admin.ch/opc/de/classified-compilation/19920153/index.html" target="_blank" rel="noopener noreferrer">https://www.admin.ch/opc/de/classified-compilation/19920153/index.html</a>)</p>
                <hr />
                <h2><strong>{t('privacy.TwoHeadingH2.pageHeading')}</strong></h2>
                {TwoHeadingH2Data.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <hr />
                <h3><strong>{t('privacy.PrivacyPolicy1.sectionHeading')}</strong></h3>
                {PrivacyPolicy1.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <hr />
            </div>
        </div>
    );
};

export { PrivacyPolicy };