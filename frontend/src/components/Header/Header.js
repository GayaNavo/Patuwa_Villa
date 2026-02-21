import React from 'react';
import { Search, Maximize2, Bell, Calculator, ClipboardList, LayoutGrid, BookOpen } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isPOS = location.pathname === '/pos';

  return (
    <header className="header">
      {isPOS ? (
        <>
          <div className="pos-brand">
            <div className="logo-icon">
              <LayoutGrid size={24} />
            </div>
            <span className="brand-name">Gourmet POS</span>
          </div>
          <div className="pos-search-box">
            <Search />
            <input type="text" placeholder="Scan barcode or search..." />
          </div>
        </>
      ) : (
        <div className="search-box">
          <Search />
          <input type="text" placeholder="Search data..." />
        </div>
      )}

      <div className="header-actions">
        {isPOS && (
          <button className="placed-orders-nav-btn" onClick={() => navigate('/pos?orders=placed')}>
            <ClipboardList size={18} />
            <span>Placed Orders</span>
          </button>
        )}
        <button className="icon-btn">
          <Maximize2 size={20} />
        </button>
        <button className="icon-btn notification-btn">
          <Bell size={20} />
          <span className="notification-badge">2</span>
        </button>
        {!isPOS && (
          <>
            <button className="menu-nav-btn" onClick={() => navigate('/menu')}>
              <BookOpen size={18} />
              <span>Menu</span>
            </button>
            <button className="pos-btn" onClick={() => navigate('/pos')}>
              <Calculator size={18} />
              <span>POS Terminal</span>
            </button>
          </>
        )}
        <div className="user-profile">
          <div className="user-info">
            <div className="user-name">John Doe</div>
            {!isPOS && <div className="user-role">Super Admin</div>}
          </div>
          <img 
            src="https://ui-avatars.com/api/?name=John+Doe&background=1F5F3B&color=fff" 
            alt="User" 
            className="user-avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
