import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingCart, 
  Warehouse, 
  FileText, 
  ChevronRight,
  LogOut,
  Utensils
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Package, label: 'Products', path: '/products', hasSubmenu: true },
    { icon: Users, label: 'People', hasSubmenu: true },
    { icon: ShoppingCart, label: 'Sale', hasSubmenu: true },
    { icon: Warehouse, label: 'Warehouse', hasSubmenu: true },
    { icon: FileText, label: 'Purchase', hasSubmenu: true },
  ];
  
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-icon">
          <Utensils size={20} />
        </div>
        <div className="logo-text">
          <span className="logo-title">PATUWA VILLA</span>
          <span className="logo-subtitle">Admin Panel</span>
        </div>
      </div>

      <nav className="sidebar-menu">
        <div className="menu-label">Menu</div>
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className={`menu-item ${item.path && isActive(item.path) ? 'active' : ''}`}
            onClick={() => item.path && navigate(item.path)}
          >
            <item.icon />
            <span className="menu-text">{item.label}</span>
            {item.hasSubmenu && <ChevronRight className="menu-arrow" />}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sign-out">
          <LogOut />
          <span>Sign Out</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
