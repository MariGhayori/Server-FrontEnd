import React, { useState } from 'react';
import ReactDom from 'react-dom';

// JS
import Menus from './Menus.js';
import ThemeToggle from '../Light-Dark Mode/ThemeToggle';

// CSS
import '../../App.css';
import '../Light-Dark Mode/ThemeToggle.css';
import './Sidebar.css';

// Icons
import { AiFillLeftCircle } from "react-icons/ai";
import { BiLogoReact } from "react-icons/bi";
import { BsChevronBarRight } from "react-icons/bs";
import { IoMdArrowRoundBack} from "react-icons/io";


function Sidebar() {
  const [open, setOpen] = useState(true);
  const [menuStack, setMenuStack] = useState([Menus]);

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
        <div className={`sidebarBG h-screen p-5 pt-8 
                        ${open ? 'w-80' : 'w-20'} duration-300 relative`}>
          <div className="flex items-center">
            {menuStack.length === 1 ? (
                // Main sidebar menu
              <>
                <AiFillLeftCircle
                  className={`expansionButton text-3xl rounderd-full absolute -right-3 top-9 borders border-red-900 cursor-pointer ${
                    !open && 'rotate-180'
                  }`}
                  onClick={() => setOpen(!open)}
                />
  
                <span className="text-2xl block float-left">
                  <BiLogoReact className={`bg-red-800 text-4xl rounded cursor-pointer block float-left mr-3`} />
                </span>
                   
                <h1 className={`sidebarLogo origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>
                  React Dashboard
                </h1>
              </>
              ) : (
                // Submenu items
                <>
                  <AiFillLeftCircle
                    className={`expansionButton text-3xl rounderd-full absolute -right-3 top-9 borders border-red-900 cursor-pointer ${
                      !open && 'rotate-180'
                    }`}
                    onClick={() => setOpen(!open)}
                  />
  
                  <h1 className={`text-white origin-left font-medium text-2xl mb-8 
                                  ${!open && 'rotate-90 float-left whitespace-nowrap marginTop'}`}>
                    <span className="">
                      <IoMdArrowRoundBack className={`bg-red-800 text-4xl rounded cursor-pointer block float-left mr-3 mb-8
                                                      ${!open && 'rotate-270 float-left whitespace-nowrap'}`}
                                                    onClick={goBack}/>
                    </span>
                    {currentMenu[0].parent}
                  </h1>
  
                </>
              )}
            </div>
  
            <ul className="pt-2">
              {currentMenu.map((menuItem, index) => (
                <React.Fragment key={index}>
                  <li
                    className={`sidebarText text-sm flex items-center
                      gap-x-4 cursor-pointer p-2 rounded-md 
                      ${menuItem.spacing ? 'mt-20' : 'mt-2'}`}
                    onClick={() => handleMenuClick(menuItem.submenuItems)}
                  >
                    <span className="text-2xl block float-left">
                      {menuItem.icon}
                    </span>
  
                    <span
                      className={`sideMenuText text-base font-medium flex-1
                                  duration-300 ${!open && 'hidden'}`}
                    >
                      {menuItem.title}
                    </span>
  
                    {menuItem.submenu && open && (
                      <BsChevronBarRight
                        className={`${menuStack.length > 1 ? 'rotate-180' : ''}`}
                        onClick={goBack}
                      />
                    )}
                  </li>
                </React.Fragment>
              ))}
              {menuStack.length === 1 && (
                <li className={`sidebarText text-sm flex items-center
                                gap-x-4 cursor-pointer p-2 rounded-md mt-2`}>
                  <ThemeToggle open={open} /> {/* Add the ThemeToggle component */}
                </li>
              )}
              
            </ul>
        </div>
  
        <div className="p-7">
          <h1 className="text-2xl font-semibold">Home Page Section</h1>
        </div>
      </div>
    </>
  );
}

export default Sidebar;