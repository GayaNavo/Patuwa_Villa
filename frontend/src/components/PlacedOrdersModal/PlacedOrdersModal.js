import React from 'react';
import { X, ClipboardList, ShoppingCart, Trash2, Clock } from 'lucide-react';
import './PlacedOrdersModal.css';

const PlacedOrdersModal = ({ onClose }) => {
  const placedOrders = [
    {
      id: 1,
      table: 'Table 2',
      itemCount: 3,
      total: 4232,
      placedAt: '09:50 AM',
      items: [
        { id: 1, name: 'res_pos_01', variant: 'Half', qty: 1, price: 202 },
        { id: 2, name: 'KultureP', variant: 'Regular', qty: 3, price: 3000 },
        { id: 3, name: 'foriegn local2', variant: 'Large', qty: 1, price: 1030 },
      ]
    },
    {
      id: 2,
      table: 'Table 8',
      itemCount: 1,
      total: 850,
      placedAt: '10:15 AM',
      items: [
        { id: 1, name: 'Chicken Biriyani', variant: 'Spicy', qty: 1, price: 850 },
      ]
    }
  ];

  const handleAddToCart = (order) => {
    console.log('Adding order to cart:', order);
    // Implement add to cart logic here
  };

  const handleDeleteOrder = (orderId) => {
    console.log('Deleting order:', orderId);
    // Implement delete logic here
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="placed-orders-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <ClipboardList size={22} />
            <h2>Placed Orders ({placedOrders.length})</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        <div className="modal-content">
          {placedOrders.map(order => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <div className="order-info">
                  <h3>{order.table}</h3>
                  <p>{order.itemCount} item(s) • LKR {order.total.toLocaleString()}</p>
                </div>
                <div className="order-badge">
                  <ClipboardList size={18} />
                </div>
              </div>

              <div className="order-items">
                {order.items.map((item, index) => (
                  <div key={index} className="order-item">
                    <div className="item-qty-badge">{item.qty}</div>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p>{item.variant}</p>
                    </div>
                    <div className="item-price">
                      LKR {item.price.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-footer">
                <div className="order-time">
                  <Clock size={14} />
                  <span>Placed at: {order.placedAt}</span>
                </div>
                <div className="order-actions">
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(order)}
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                  <button 
                    className="delete-order-btn"
                    onClick={() => handleDeleteOrder(order.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="refresh-btn">Refresh All</button>
        </div>
      </div>
    </div>
  );
};

export default PlacedOrdersModal;
