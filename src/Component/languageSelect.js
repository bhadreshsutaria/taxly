import React, { useState } from 'react';
import Select from 'react-select';
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
    const flavourOptions = [
      { value: 'en', label: 'English', rating: 'safe' },
      { value: 'de', label: 'Deutsch', rating: 'good' },
      { value: 'fr', label: 'Français', rating: 'wild' },
      { value: 'it', label: 'Italiano', rating: 'crazy' },
    ];
    const formatGroupLabel = data => (
      <div>
        <span>{data.label}</span>
        <span>{data.options.length}</span>
      </div>
    );

    return (
      <>
        <select 
          onChange={(event) => changeLanguage(event.target.value)}
          value={currentI18nLanguage}
        >
        {Object.entries(languageOptions).map(([id, name]) => (
            <option key={id} value={id}>{name}</option>
        ))}
        </select>
        {/* <Select
            label= {currentI18nLanguage}
            options={flavourOptions}
            formatGroupLabel={formatGroupLabel}
        />
        <ul class="wpm-language-switcher switcher-dropdown">
          <li class="item-language-main item-language-en">
            <span><span>{currentI18nLanguage}</span></span>
            <ul class="language-dropdown">
                {Object.entries(languageOptions).map(([id, name]) => (
                    <li class={`item-language-${id}`}>
                        <a key={id} value={id} data-lang={id}>
                            <span>{name}</span>
                        </a>
                    </li>
                ))}
            </ul>
          </li>
        </ul> */}
        </>
    )
}
export default LanguageSelect;