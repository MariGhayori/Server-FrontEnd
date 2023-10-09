import React, { useContext } from 'react';
import Switch from 'react-switch';
import { useTranslation } from 'react-i18next';

import './LanguageToggle.css';

function LanguageToggle({ open }) {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'fa' ? 'en' : 'fa';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="language-toggle">
      <Switch
        className='rotate-90 iconPlacement'
        width={30}
        height={15}
        handleDiameter={15}
        onHandleColor={'#6353a6'}
        offHandleColor={'#6353a6'}
        offColor={'#170d3d'}
        onColor={'#170d3d'}
        onChange={toggleLanguage}
        checked={i18n.language === 'fa'} // Check the current language
      />
      {open && (
        <label className='labelMaster'>
          {i18n.language === 'fa' ? 'فارسی' : 'English'}
        </label>
      )}
    </div>
  );
}

export default LanguageToggle;
