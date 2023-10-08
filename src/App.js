import React, { useState, createContext } from 'react';
import ReactDom from 'react-dom';
import ReactSwitch from 'react-switch';

// JS
import Menus from './components/Sidebar/Menus.js';
import Sidebar from './components/Sidebar/Sidebar';
import ThemeToggle from './components/Light-Dark Mode/ThemeToggle';

// CSS
import './App.css';
import './components/Light-Dark Mode/ThemeToggle.css';

export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme}>
        <div className='flex'>
          <Sidebar />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
