import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../../App';
import { useCustomTranslation } from '../Language/useTranslation';

import "./ThemeToggle.css";

function ThemeToggle({ open }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useCustomTranslation();

  return (
    <div className=''>
      <Switch className='rotate-90 iconPlacement'
        width={30} 
        height={15}
        handleDiameter={15} 
        onHandleColor={'#6353a6'} 
        offHandleColor={'#6353a6'} 
        offColor={"#170d3d"}
        onColor={"#170d3d"}
        onChange={toggleTheme} 
        checked={theme === "dark"} 
      />

    {open && (
        <label className='labelMaster'> 
            {theme === "light" ? t('Light_Mode') : t('Dark_Mode')} 
        </label>
    )}
    </div>
  );
}

export default ThemeToggle;
