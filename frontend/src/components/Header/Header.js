import React from 'react';
import { Search, Maximize2, Bell, Calculator } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="search-box">
        <Search />
        <input type="text" placeholder="Search data..." />
      </div>

      <div className="header-actions">
        <button className="icon-btn">
          <Maximize2 size={20} />
        </button>
        <button className="icon-btn">
          <Bell size={20} />
        </button>
        <button className="pos-btn">
          <Calculator size={18} />
          <span>POS Terminal</span>
        </button>
        <div className="user-profile">
          <div className="user-info">
            <div className="user-name">Patuwa Villa</div>
            <div className="user-role">Super Admin</div>
          </div>
          <img 
            src="https://ui-avatars.com/api/?name=Admin&background=random" 
            alt="User" 
            className="user-avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
