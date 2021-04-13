import React from "react";
import { useTranslation } from "react-i18next";
const PrivacyPolicy = () => {
    const { t } = useTranslation();
    
    let TwoHeadingH2Data =  t('privacy.TwoHeadingH2.data', { returnObjects: true });
    let PrivacyPolicy1 =  t('privacy.PrivacyPolicy1.data', { returnObjects: true });
    let PrivacyPolicy2 =  t('privacy.PrivacyPolicy2.data', { returnObjects: true });
    let PrivacyPolicy2_1 =  t('privacy.PrivacyPolicy2_1.data', { returnObjects: true });
    let PrivacyPolicy2_2 =  t('privacy.PrivacyPolicy2_2.data', { returnObjects: true });
    let PrivacyPolicy2_3_data =  t('privacy.PrivacyPolicy2_3.data', { returnObjects: true });
    let PrivacyPolicy2_3_list =  t('privacy.PrivacyPolicy2_3.data1', { returnObjects: true });
    let PrivacyPolicy2_3_data2 =  t('privacy.PrivacyPolicy2_3.data2', { returnObjects: true });
    let PrivacyPolicy2_4 =  t('privacy.PrivacyPolicy2_4.data', { returnObjects: true });
    let PrivacyPolicy2_5_data =  t('privacy.PrivacyPolicy2_5.data', { returnObjects: true });
    let PrivacyPolicy2_5_list =  t('privacy.PrivacyPolicy2_5.data1', { returnObjects: true });
    // let PrivacyPolicy2_5_data2 =  t('privacy.PrivacyPolicy2_5.data2', { returnObjects: true });
    // let PrivacyPolicy2_5_data3 =  t('privacy.PrivacyPolicy2_5.data3', { returnObjects: true });
    // let PrivacyPolicy2_5_data4 =  t('privacy.PrivacyPolicy2_5.data4', { returnObjects: true });
    let PrivacyPolicy2_5_List2 =  t('privacy.PrivacyPolicy2_5.PrivacyPolicy2_5List.data', { returnObjects: true });
    let PrivacyPolicy3_data =  t('privacy.PrivacyPolicy3.data', { returnObjects: true });
    let PrivacyPolicy3_link_data =  t('privacy.PrivacyPolicy3.link_data.data', { returnObjects: true });
    let PrivacyPolicy3_data1 =  t('privacy.PrivacyPolicy3.data1', { returnObjects: true });
    let PrivacyPolicy4_1 =  t('privacy.PrivacyPolicy4_1.link_data.data', { returnObjects: true });
    let PrivacyPolicy4_2 =  t('privacy.PrivacyPolicy4_2.link_data.data', { returnObjects: true });
    let PrivacyPolicy4_10_list =  t('privacy.PrivacyPolicy4_10.list_data.data', { returnObjects: true });
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
                <h3><strong>{t('privacy.PrivacyPolicy2.sectionHeading')}</strong></h3>
                {PrivacyPolicy2.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <h4><strong>{t('privacy.PrivacyPolicy2_1.sectionHeading')}</strong></h4>
                {PrivacyPolicy2_1.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <h4><strong>{t('privacy.PrivacyPolicy2_2.sectionHeading')}</strong></h4>
                {PrivacyPolicy2_2.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <h4><strong>{t('privacy.PrivacyPolicy2_3.sectionHeading')}</strong></h4>
                {PrivacyPolicy2_3_data.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <ul>
                        {PrivacyPolicy2_3_list.map((val,ind) =>
                            <li key={ind}>{val}</li>
                        )}   
                </ul>
                {PrivacyPolicy2_3_data2.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <h4><strong>{t('privacy.PrivacyPolicy2_4.sectionHeading')}</strong></h4>
                {PrivacyPolicy2_4.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <h4><strong>{t('privacy.PrivacyPolicy2_5.sectionHeading')}</strong></h4>
                {PrivacyPolicy2_5_data.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <ul>
                    {PrivacyPolicy2_5_list.map((val,ind) =>
                        <li key={ind}>{val}</li>
                    )}   
                </ul>
                <p align="justify">{t('privacy.PrivacyPolicy2_5.data2')}</p>
                <p align="justify">{t('privacy.PrivacyPolicy2_5.data3')} {t('privacy.PrivacyPolicy2_5.data3Link') === '' ? '' : <a href={t('privacy.PrivacyPolicy2_5.data3Link')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy2_5.data3Link')}</a>}).</p>
                <p align="justify">{t('privacy.PrivacyPolicy2_5.data4')}</p>
                <ul>
                    {PrivacyPolicy2_5_List2.map((val,ind) =>
                        <li key={ind}>{val.text} (<a href={val.link} target="_blank" rel="noopener noreferrer">{val.link}</a>)</li>
                    )}   
                </ul>
                <hr />
                <h3><strong>{t('privacy.PrivacyPolicy3.sectionHeading')}</strong></h3>
                {PrivacyPolicy3_data.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                {PrivacyPolicy3_link_data.map((val,ind) =>
                    <p key={ind} align="justify">{val.text}
                        <br/><a href={`mailto:${val.link}`} target="_blank" rel="noopener noreferrer">{val.link}</a>
                    </p>
                )}
                {PrivacyPolicy3_data1.map((val,ind) =>
                    <p key={ind} align="justify">{val}</p>
                )}
                <hr />
                <h3><strong>{t('privacy.SingleData.PrivacyPolicy4')}</strong></h3>
                <h4><strong>{t('privacy.PrivacyPolicy4_1.sectionHeading')}</strong></h4>
                {PrivacyPolicy4_1.map((val,ind) =>
                    <p key={ind} align="justify">{val.text} <a href={val.link} target="_blank" rel="noopener noreferrer">{val.link}</a>.</p>
                )}
                <h4><strong>{t('privacy.PrivacyPolicy4_2.sectionHeading')}</strong></h4>
                {PrivacyPolicy4_2.map((val,ind) =>
                    <p key={ind} align="justify">{val.text} <a href={val.link} target="_blank" rel="noopener noreferrer">{val.link}</a>.</p>
                )}
                <h4><strong>{t('privacy.PrivacyPolicy4_3.sectionHeading')}</strong></h4>
                <p align="justify">{t('privacy.PrivacyPolicy4_3.link_data.text1')} (<a href={t('privacy.PrivacyPolicy4_3.link_data.link1')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_3.link_data.link1')}</a>).</p>
                <p align="justify">{t('privacy.PrivacyPolicy4_3.link_data.text2')} (<a href={t('privacy.PrivacyPolicy4_3.link_data.link2')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_3.link_data.link2')}</a>),{t('privacy.PrivacyPolicy4_3.link_data.text3')}</p>
                <h4><strong>{t('privacy.PrivacyPolicy4_4.sectionHeading')}</strong></h4>
                <p align="justify">{t('privacy.PrivacyPolicy4_4.link_data.text1')} <a href={t('privacy.PrivacyPolicy4_4.link_data.link1')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_4.link_data.link1')}</a>.</p>
                <p align="justify">{t('privacy.PrivacyPolicy4_4.link_data.text2')} <a href={t('privacy.PrivacyPolicy4_4.link_data.link2')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_4.link_data.link2')}</a>{t('privacy.PrivacyPolicy4_4.link_data.text3')}</p>
                <h4><strong>{t('privacy.PrivacyPolicy4_5.sectionHeading')}</strong></h4>
                <p align="justify">{t('privacy.PrivacyPolicy4_5.link_data.text1')} <br/>{t('privacy.PrivacyPolicy4_5.link_data.text11')}</p>
                <p align="justify">{t('privacy.PrivacyPolicy4_5.link_data.text2')} <a href={t('privacy.PrivacyPolicy4_5.link_data.link1')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_5.link_data.link1')}</a>.</p>
                <p align="justify">{t('privacy.PrivacyPolicy4_5.link_data.text3')} 
                    (<a href={t('privacy.PrivacyPolicy4_5.link_data.link2')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_5.link_data.link2')}</a>), {t('privacy.PrivacyPolicy4_5.link_data.text4')}
                    (<a href={t('privacy.PrivacyPolicy4_5.link_data.link3')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_5.link_data.link3')}</a>){t('privacy.PrivacyPolicy4_5.link_data.text5')}
                    (<a href={t('privacy.PrivacyPolicy4_5.link_data.link4')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_5.link_data.link4')}</a>).
                </p>
                <p align="justify">{t('privacy.PrivacyPolicy4_5.link_data.text6')} (<a href={t('privacy.PrivacyPolicy4_5.link_data.link5')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_5.link_data.link5')}</a>){t('privacy.PrivacyPolicy4_5.link_data.text7')}</p>
                <h4><strong>{t('privacy.PrivacyPolicy4_6.sectionHeading')}</strong></h4>
                <p align="justify">{t('privacy.PrivacyPolicy4_6.link_data.text1')} <a href={t('privacy.PrivacyPolicy4_6.link_data.link1')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_6.link_data.link1')}</a>.</p>
                <p align="justify">{t('privacy.PrivacyPolicy4_6.link_data.text2')} (<a href={t('privacy.PrivacyPolicy4_6.link_data.link2')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_6.link_data.link2')}</a>),{t('privacy.PrivacyPolicy4_6.link_data.text3')}</p>
                <h4><strong>{t('privacy.PrivacyPolicy4_7.sectionHeading')}</strong></h4>
                <p align="justify">{t('privacy.PrivacyPolicy4_7.link_data.text1')} <a href={t('privacy.PrivacyPolicy4_7.link_data.link1')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_7.link_data.link1')}</a>.</p>
                <p align="justify">{t('privacy.PrivacyPolicy4_7.link_data.text2')} (<a href={t('privacy.PrivacyPolicy4_7.link_data.link2')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_7.link_data.link2')}</a>),{t('privacy.PrivacyPolicy4_7.link_data.text3')}</p>
                <h4><strong>{t('privacy.PrivacyPolicy4_8.sectionHeading')}</strong></h4>
                <p align="justify">{t('privacy.PrivacyPolicy4_8.link_data.text1')}</p>
                <p align="justify">{t('privacy.PrivacyPolicy4_8.link_data.text2')} 
                    <a href={t('privacy.PrivacyPolicy4_8.link_data.link1')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_8.link_data.link1')}</a>{t('privacy.PrivacyPolicy4_8.link_data.text3')}
                    (<a href={t('privacy.PrivacyPolicy4_8.link_data.link2')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_8.link_data.link2')}</a>),{t('privacy.PrivacyPolicy4_8.link_data.text4')}
                </p>
                <h4><strong>{t('privacy.PrivacyPolicy4_9.sectionHeading')}</strong></h4>
                <p align="justify">{t('privacy.PrivacyPolicy4_9.link_data.text1')}</p>
                <p align="justify">{t('privacy.PrivacyPolicy4_9.link_data.text2')}
                    {t('privacy.PrivacyPolicy4_9.link_data.link0') === '' ? '' : <a href={t('privacy.PrivacyPolicy4_9.link_data.link0')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_9.link_data.link0')}</a>}. {t('privacy.PrivacyPolicy4_9.link_data.text0')}
                    <a href={t('privacy.PrivacyPolicy4_9.link_data.link1')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_9.link_data.link1')}</a> {t('privacy.PrivacyPolicy4_9.link_data.text3')}
                </p>
                <p align="justify">{t('privacy.PrivacyPolicy4_9.link_data.text4')} 
                    (<a href={t('privacy.PrivacyPolicy4_9.link_data.link2')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_9.link_data.link2')}</a>),{t('privacy.PrivacyPolicy4_9.link_data.text5')}
                </p>
                <h4><strong>{t('privacy.PrivacyPolicy4_10.sectionHeading')}</strong></h4>
                <p  align="justify">{t('privacy.PrivacyPolicy4_10.link_data.text1')}</p>
                <p align="justify">{t('privacy.PrivacyPolicy4_10.link_data.text2')} 
                    <a href={t('privacy.PrivacyPolicy4_10.link_data.link1')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_10.link_data.link1')}</a>.
                </p>
                <p align="justify">{t('privacy.PrivacyPolicy4_10.link_data.text3')} 
                    <a href={t('privacy.PrivacyPolicy4_10.link_data.link2')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_10.link_data.link2')}</a>.
                </p>
                <p align="justify">{t('privacy.PrivacyPolicy4_10.link_data.text4')} 
                    <a href={t('privacy.PrivacyPolicy4_10.link_data.link3')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_10.link_data.link3')}</a>.
                </p>
                <p  align="justify">
                    {t('privacy.PrivacyPolicy4_10.link_data.text5')}
                    {t('privacy.PrivacyPolicy4_10.link_data.link4') === '' ? '' : <a href={t('privacy.PrivacyPolicy4_10.link_data.link4')} target="_blank" rel="noopener noreferrer">{t('privacy.PrivacyPolicy4_10.link_data.link4')}</a>}
                    {t('privacy.PrivacyPolicy4_10.link_data.text6') === '' ? '' : t('privacy.PrivacyPolicy4_10.link_data.text6')}
                </p>
                <ul>
                    {PrivacyPolicy4_10_list.map((val,ind) =>
                        <li key={ind}>{val.text} (<a href={val.link} target="_blank" rel="noopener noreferrer">{val.link}</a>)</li>
                    )}   
                </ul>
                
            </div>
        </div>
    );
};

export { PrivacyPolicy };