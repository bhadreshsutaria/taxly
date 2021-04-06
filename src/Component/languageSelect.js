import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelect = () => {
const { i18n } = useTranslation()
const i18nLanguage = i18n.language
const [currentI18nLanguage, setCurrentI18nLanguage] = useState(i18nLanguage)

const languageOptions = {
    en: 'English',
    de: 'Deutsch',
    fr: 'Français',
    it: 'Italiano',
    pt: 'Português',
   
};

const changeLanguage = (language) => {
  i18n.changeLanguage(language)
  setCurrentI18nLanguage(language)
}

return (
    <select 
      onChange={(event) => changeLanguage(event.target.value)}
      value={currentI18nLanguage}
    >
    {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>{name}</option>
     ))}
    </select>
)
}
export default LanguageSelect;