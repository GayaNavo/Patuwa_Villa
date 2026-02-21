import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ClipboardList, ShoppingCart, Trash2, Plus, Minus, X, Radio } from 'lucide-react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import PlacedOrdersModal from '../../components/PlacedOrdersModal/PlacedOrdersModal';
import LiveOrdersPanel from '../../components/LiveOrdersPanel/LiveOrdersPanel';
import './POS.css';

const POS = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showPlacedOrders, setShowPlacedOrders] = useState(false);
  const [showLiveOrders, setShowLiveOrders] = useState(false);
  const [cart, setCart] = useState([
    { id: 1, name: 'Chicken Fried Rice', variant: 'Regular • Extra Spice', qty: 2, price: 1400 },
    { id: 2, name: 'Coca Cola 500ml', variant: 'Chilled', qty: 1, price: 250 },
  ]);

  // Sample live orders data
  const [liveOrders, setLiveOrders] = useState([
    {
      id: 1,
      tableName: 'Table No 3',
      total: 1000.00,
      status: 'pending',
      time: '03:49 PM',
      orderType: 'dine in',
      items: [
        { name: 'Cheese', qty: 1, price: 1000 }
      ]
    },
    {
      id: 2,
      tableName: 'Table No 5',
      total: 2500.00,
      status: 'preparing',
      time: '03:45 PM',
      orderType: 'dine in',
      items: [
        { name: 'Chicken Biriyani', qty: 2, price: 1700 },
        { name: 'Coca Cola', qty: 2, price: 500 },
        { name: 'Garlic Bread', qty: 1, price: 300 }
      ]
    },
    {
      id: 3,
      tableName: 'Table No 1',
      total: 850.00,
      status: 'ready',
      time: '03:30 PM',
      orderType: 'takeaway',
      items: [
        { name: 'Vegetable Fried Rice', qty: 1, price: 850 }
      ]
    }
  ]);

  useEffect(() => {
    if (searchParams.get('orders') === 'placed') {
      setShowPlacedOrders(true);
    }
  }, [searchParams]);

  const handleCloseModal = () => {
    setShowPlacedOrders(false);
    setSearchParams({});
  };

  const handleClearAllLiveOrders = () => {
    setLiveOrders([]);
  };

  const categories = ['All', 'Rice', 'Noodles', 'Beverages', 'Desserts'];
  const products = [
    { id: 1, name: 'Chicken Biriyani', price: 850, category: 'Rice' },
    { id: 2, name: 'KultureP', price: 3000, category: 'Rice' },
    { id: 3, name: 'res_pos_01', price: 202, category: 'Noodles' },
    { id: 4, name: 'foriegn local2', price: 1030, category: 'Beverages' },
  ];

  const updateQty = (id, delta) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1, variant: 'Regular' }]);
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="pos-page">
      <Sidebar />
      <div className="pos-main">
        <Header />
        <div className="pos-container">
          <div className="pos-left">
            <div className="pos-header">
              <h2>POS Terminal</h2>
              <div className="header-actions">
                <button 
                  className="live-orders-toggle-btn"
                  onClick={() => setShowLiveOrders(true)}
                >
                  <Radio size={18} />
                  <span>Live Orders</span>
                  {liveOrders.length > 0 && (
                    <span className="live-badge">{liveOrders.length}</span>
                  )}
                </button>
                <button 
                  className="placed-orders-btn"
                  onClick={() => setShowPlacedOrders(true)}
                >
                  <ClipboardList size={18} />
                  <span>Placed Orders</span>
                </button>
              </div>
            </div>
            
            <div className="categories">
              {categories.map(cat => (
                <button key={cat} className={`category-btn ${cat === 'All' ? 'active' : ''}`}>
                  {cat}
                </button>
              ))}
            </div>

            <div className="products-grid">
              {products.map(product => (
                <div key={product.id} className="product-card" onClick={() => addToCart(product)}>
                  <div className="product-image-placeholder"></div>
                  <div className="product-info">
                    <h4>{product.name}</h4>
                    <p>LKR {product.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pos-right">
            <div className="cart-header">
              <ShoppingCart size={20} />
              <h3>Current Order</h3>
            </div>

            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>{item.variant}</p>
                  </div>
                  <div className="cart-item-actions">
                    <div className="qty-control">
                      <button onClick={() => updateQty(item.id, -1)}><Minus size={14} /></button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)}><Plus size={14} /></button>
                    </div>
                    <span className="item-total">LKR {(item.price * item.qty).toLocaleString()}</span>
                    <button className="remove-btn" onClick={() => removeItem(item.id)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>LKR {subtotal.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Tax (5%)</span>
                <span>LKR {tax.toLocaleString()}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>LKR {total.toLocaleString()}</span>
              </div>
            </div>

            <div className="cart-actions">
              <button className="cancel-btn">Cancel</button>
              <button className="place-order-btn">Place Order</button>
            </div>
          </div>
        </div>
      </div>

      {showPlacedOrders && (
        <PlacedOrdersModal onClose={handleCloseModal} />
      )}

      <LiveOrdersPanel 
        isOpen={showLiveOrders}
        onClose={() => setShowLiveOrders(false)}
        orders={liveOrders}
        onClearAll={handleClearAllLiveOrders}
      />
    </div>
  );
};

export default POS;
