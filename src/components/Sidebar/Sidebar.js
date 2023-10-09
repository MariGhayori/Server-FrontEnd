import React, { useState } from 'react';
import ReactDom from 'react-dom';

// JS
import Menus from './Menus.js';
import ThemeToggle from '../Light-Dark Mode/ThemeToggle';
import { useCustomTranslation } from '../Language/useTranslation.js';

// CSS
import '../../App.css';
import '../Light-Dark Mode/ThemeToggle.css';
import './Sidebar.css';

// Icons
import { AiFillLeftCircle } from "react-icons/ai";
import { BiLogoReact } from "react-icons/bi";
import { BsChevronBarRight } from "react-icons/bs";
import { IoMdArrowRoundBack} from "react-icons/io";

import LanguageToggle from '../Language/LanguageToggle'; // Import the LanguageToggle component


function Sidebar() {
  const [open, setOpen] = useState(true);
  const [menuStack, setMenuStack] = useState([Menus]);
  const { t, i18n } = useCustomTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const goBack = () => {
    if (menuStack.length > 1) {
      // Pop the top menu to go back
      const newMenuStack = [...menuStack];
      newMenuStack.pop();
      setMenuStack(newMenuStack);
    }
  };

  const handleMenuClick = (submenuItems) => {
    if (submenuItems) {
      // Push the new submenu onto the menu stack
      const newMenuStack = [...menuStack, submenuItems];
      setMenuStack(newMenuStack);
    }
  };

  const currentMenu = menuStack[menuStack.length - 1];

  return (
    <>
      <div className="flex">
        <div
        className={`sidebarBG h-screen p-5 pt-8 ${open ? 'w-80' : 'w-20'} duration-300 relative`}
      >
          <div className="flex items-center">
            {menuStack.length === 1 ? (
                // Main sidebar menu
              <>
                <AiFillLeftCircle
                  className={`expansionButton text-3xl rounderd-full absolute top-9 borders border-red-900 cursor-pointer
                              ${!open && 'rotate-180'} ${isRTL ? 'rotate-180 -left-3' : '-right-3'}`}
                  onClick={() => setOpen(!open)}
                />
  
                <span className="text-2xl block float-left">
                  <BiLogoReact className={`bg-red-800 text-4xl rounded cursor-pointer block float-left 
                                           ${isRTL ? 'ml-3' : 'mr-3 '}`} />
                </span>
                   
                <h1 className={`origin-left font-medium text-2xl duration-300 font-bold
                                ${!open && 'scale-0'} ${isRTL ? 'mr-3' : ''}`}>
                                  {t('Brand_Name')}
                </h1>
              </>
              ) : (
                // Submenu items
                <>
                  <AiFillLeftCircle
                    className={`expansionButton text-3xl rounderd-full absolute top-9 borders border-red-900 cursor-pointer
                    ${!open && 'rotate-180'} ${isRTL ? 'rotate-180 -left-3' : '-right-3'}`}
                    onClick={() => setOpen(!open)}
                  />
  
                  <h1 className={`text-white origin-left font-medium text-2xl mb-8 
                                  ${!open && 'rotate-90 float-left whitespace-nowrap marginTop'}`}>
                    <span className="">
                      <IoMdArrowRoundBack className={`bg-red-800 text-4xl rounded cursor-pointer block mb-8
                                                      ${!open && 'rotate-270 float-left whitespace-nowrap'}
                                                      ${isRTL ? 'float-right ml-3 rotate-180' : 'float-left mr-3'}`}
                                                    onClick={goBack}/>
                    </span>
                    <span className='font-bold'>
                      { t (currentMenu[0].parent)}
                    </span>
                    
                  </h1>
  
                </>
              )}
            </div>
  
            <ul className="pt-2">
              {currentMenu.map((menuItem, index) => (
                <React.Fragment key={index}>
                  <li
                    className={`text-sm flex items-center hover:bg-sky-700
                      gap-x-4 cursor-pointer p-2 rounded-md 
                      ${menuItem.spacing ? 'mt-20' : 'mt-2'}
                      ${isRTL ? 'text-right' : 'text-left'}`}
                    onClick={() => handleMenuClick(menuItem.submenuItems)}
                  >
                    <span className="text-2xl block float-left">
                      {menuItem.icon}
                    </span>
  
                    <span
                      className={`text-base font-medium flex-1
                                  duration-300 ${!open && 'hidden'}`}
                    >
                      {t (menuItem.title) }
                    </span>
  
                    {menuItem.submenu && open && (
                      <BsChevronBarRight
                        className={`${isRTL ? 'rotate-180' : ''}`}
                        onClick={goBack}
                      />
                    )}
                  </li>
                </React.Fragment>
              ))}
              {menuStack.length === 1 && (
                <li className={`text-sm flex items-center
                                gap-x-4 cursor-pointer p-2 rounded-md mt-2`}>
                  <ThemeToggle open={open} /> {/* Add the ThemeToggle component */}
                </li>
              )}
              
              {menuStack.length === 1 && (
                <li className={`text-sm flex items-center 
                              gap-x-4 cursor-pointer p-2 rounded-md mt-2`}>
                  <LanguageToggle open={open}/> {/* Add the LanguageToggle component */}
                </li>
              )}
            </ul>
        </div>
  
        <div className="p-7">
          <h1 className="text-2xl font-semibold">Home Page Section</h1>
          <div className=' bg-red-800'>123</div>
          <div className='w-full bg-red-800'>456</div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;