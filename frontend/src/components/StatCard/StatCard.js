import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './StatCard.css';

const StatCard = ({ 
  label, 
  value, 
  change, 
  changeType = 'positive', 
  description, 
  icon: Icon,
  variant = 'default'
}) => {
  return (
    <div className={`stat-card ${variant}`}>
      <div className="stat-header">
        <span className="stat-label">{label}</span>
        {Icon && (
          <div className="stat-icon">
            <Icon size={18} />
          </div>
        )}
      </div>
      <div className="stat-value">{value}</div>
      <div className="stat-footer">
        {change && (
          <span className={`stat-change ${changeType}`}>
            {changeType === 'positive' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {change}
          </span>
        )}
        {description && <span className="stat-desc">{description}</span>}
      </div>
    </div>
  );
};

export default StatCard;
