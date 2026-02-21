import React from 'react';
import { X, Plus } from 'lucide-react';
import './LiveOrdersPanel.css';

const LiveOrdersPanel = ({ isOpen, onClose, orders, onClearAll }) => {
  if (!isOpen) return null;

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'status-pending';
      case 'preparing':
        return 'status-preparing';
      case 'ready':
        return 'status-ready';
      default:
        return 'status-pending';
    }
  };

  return (
    <div className="live-orders-overlay" onClick={onClose}>
      <div className="live-orders-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="live-orders-header">
          <h3>Live Orders ({orders.length})</h3>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Orders List */}
        <div className="live-orders-content">
          {orders.length === 0 ? (
            <div className="no-orders">
              <p>No live orders</p>
            </div>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="live-order-card">
                <div className="order-card-header">
                  <div className="order-table-info">
                    <span className="table-indicator">×</span>
                    <span className="table-name">{order.tableName}</span>
                  </div>
                  <div className="order-price-status">
                    <span className="order-price">Rs {order.total.toFixed(2)}</span>
                    <span className={`order-status ${getStatusClass(order.status)}`}>
                      {order.status.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="order-meta">
                  <span className="item-count">{order.items.length} item{order.items.length !== 1 ? 's' : ''}</span>
                  <span className="order-time">{order.time}</span>
                </div>

                <div className="order-divider"></div>

                <div className="order-items-preview">
                  <div className="order-type">
                    <Plus size={14} />
                    <span>{order.orderType.toUpperCase()}</span>
                  </div>
                  <div className="preview-items">
                    {order.items.slice(0, 2).map((item, index) => (
                      <span key={index} className="preview-item">
                        {item.qty}x {item.name}
                        {index < Math.min(order.items.length, 2) - 1 && ', '}
                      </span>
                    ))}
                    {order.items.length > 2 && (
                      <span className="more-items">+{order.items.length - 2} more</span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {orders.length > 0 && (
          <div className="live-orders-footer">
            <div className="live-indicator">
              <span className="live-dot"></span>
              <span>Live • {orders.length} pending order{orders.length !== 1 ? 's' : ''}</span>
            </div>
            <button className="clear-all-btn" onClick={onClearAll}>
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveOrdersPanel;
