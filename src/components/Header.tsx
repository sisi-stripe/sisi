import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Search Section */}
        <div className="search-container">
          <div className="search-box">
            <img src="/salty/icons/icon-search.svg" alt="Search" className="search-icon" />
            <input 
              type="text" 
              placeholder="Search"
              className="search-input"
            />
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="header-controls">
          <button className="control-btn">
            <img src="/salty/icons/icon-support.svg" alt="Support" className="control-icon" />
          </button>
          <button className="control-btn">
            <img src="/salty/icons/icon-support.svg" alt="Chat" className="control-icon" />
          </button>
          <button className="control-btn">
            <img src="/salty/icons/icon-apps.svg" alt="Apps" className="control-icon" />
          </button>
          <button className="control-btn">
            <img src="/salty/icons/icon-settings.svg" alt="Settings" className="control-icon" />
          </button>
          <button className="control-btn">
            <img src="/salty/icons/icon-support.svg" alt="Help" className="control-icon" />
          </button>
          <button className="control-btn">
            <img src="/salty/icons/icon-notifications.svg" alt="Notifications" className="control-icon" />
          </button>
          <button className="control-btn">
            <img src="/salty/icons/icon-settings.svg" alt="Settings" className="control-icon" />
          </button>
          <button className="control-btn add-btn">
            <span className="control-icon">➕</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 