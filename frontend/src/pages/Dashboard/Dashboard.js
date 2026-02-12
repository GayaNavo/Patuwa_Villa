import React from 'react';
import { Calendar, Plus, DollarSign, ShoppingCart, RotateCcw, Truck } from 'lucide-react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import StatCard from '../../components/StatCard/StatCard';
import TransactionsTable from '../../components/TransactionsTable/TransactionsTable';
import './Dashboard.css';

const Dashboard = () => {
  const primaryStats = [
    {
      label: 'Today Sale',
      value: 'LKR 12,621.00',
      change: '12% from yesterday',
      changeType: 'positive',
      variant: 'dark-green'
    },
    {
      label: 'Today Purchase',
      value: 'LKR 1,470.80',
      change: '5% from yesterday',
      changeType: 'positive',
      variant: 'green'
    },
    {
      label: 'Today Purchase Return',
      value: 'LKR 1,470.80',
      description: '3 items returned',
      variant: 'teal'
    },
    {
      label: 'Today Sale Return',
      value: 'LKR 0.00',
      description: 'No returns today',
      variant: 'emerald'
    }
  ];

  const secondaryStats = [
    {
      label: 'TOTAL SALE',
      value: 'LKR 181,916.38',
      icon: DollarSign
    },
    {
      label: 'TOTAL PURCHASE',
      value: 'LKR 4,192.60',
      icon: Truck
    },
    {
      label: 'SALE RETURN',
      value: 'LKR 1,223.00',
      icon: RotateCcw
    },
    {
      label: 'PURCHASE RETURN',
      value: 'LKR 3,560.80',
      icon: ShoppingCart
    }
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">
          <div className="dashboard-header">
            <div className="dashboard-title">
              <h1>Dashboard Overview</h1>
              <p>Monitor your restaurant performance in real-time</p>
            </div>
            <div className="dashboard-actions">
              <button className="date-picker">
                <Calendar size={16} />
                <span>Nov 02, 2026</span>
              </button>
              <button className="add-btn">
                <Plus size={20} />
              </button>
            </div>
          </div>

          <div className="stats-grid">
            {primaryStats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          <div className="stats-grid secondary">
            {secondaryStats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          <TransactionsTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
