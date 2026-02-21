import React, { useState } from 'react';
import { Search, Moon, ShoppingCart, Plus, ChefHat, X, Minus, ArrowRight, UtensilsCrossed, ShoppingBag, Bike } from 'lucide-react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All Menu');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [orderType, setOrderType] = useState('dine-in');
  const [tableNumber, setTableNumber] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  // Cart state with items
  const [cart, setCart] = useState([
    { id: 1, name: 'Fresh Garden Salad', price: 850.00, qty: 1, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop' },
    { id: 3, name: 'Iced Lemon Tea', price: 450.00, qty: 2, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=100&h=100&fit=crop' },
  ]);

  const categories = ['All Menu', 'Beverages', 'Fried Rice', 'Healthy Tea', 'Organic Salads', 'Ice Cream', 'Fastfood', 'Desserts'];

  const products = [
    {
      id: 1,
      name: 'Fresh Garden Salad',
      category: 'Organic Salads',
      price: 850.00,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      badge: 'POPULAR',
      inStock: true
    },
    {
      id: 2,
      name: 'Spicy Chicken Rice',
      category: 'Fried Rice',
      price: 1200.00,
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb74b?w=400&h=300&fit=crop',
      badge: null,
      inStock: false
    },
    {
      id: 3,
      name: 'Iced Lemon Tea',
      category: 'Beverages',
      price: 450.00,
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop',
      badge: null,
      inStock: true
    },
    {
      id: 4,
      name: 'Vanilla Bean Sundae',
      category: 'Ice Cream',
      price: 600.00,
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
      badge: 'PROMO',
      inStock: true
    },
    {
      id: 5,
      name: 'Quinoa Power Bowl',
      category: 'Organic Salads',
      price: 1450.00,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      badge: null,
      inStock: true
    },
    {
      id: 6,
      name: 'Organic Veggie Burger',
      category: 'Fastfood',
      price: 950.00,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
      badge: null,
      inStock: true
    },
    {
      id: 7,
      name: 'Mixed Berry Smoothie',
      category: 'Beverages',
      price: 750.00,
      image: 'https://images.unsplash.com/photo-1553530979-7ee52a2670c4?w=400&h=300&fit=crop',
      badge: null,
      inStock: false
    },
    {
      id: 8,
      name: 'Zen Green Tea',
      category: 'Healthy Tea',
      price: 380.00,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop',
      badge: null,
      inStock: true
    },
    {
      id: 9,
      name: 'Oatmeal Raisin Cookie',
      category: 'Desserts',
      price: 250.00,
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
      badge: "CHEF'S CHOICE",
      inStock: true
    },
    {
      id: 10,
      name: 'Classic Milkshake',
      category: 'Beverages',
      price: 890.00,
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop',
      badge: null,
      inStock: true
    }
  ];

  const filteredProducts = activeCategory === 'All Menu' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleAddToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { 
        id: product.id, 
        name: product.name, 
        price: product.price, 
        qty: 1, 
        image: product.image 
      }]);
    }
  };

  const updateQty = (id, delta) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleSendOrder = () => {
    // In a real app, this would send to backend
    // For demo, we'll show success and clear cart after delay
    setOrderSent(true);
    setTimeout(() => {
      setOrderSent(false);
      setCart([]);
      setTableNumber('');
      setShowCart(false);
    }, 2000);
  };

  return (
    <div className="menu-page">
      {/* Header */}
      <header className="menu-header">
        <div className="menu-brand">
          <div className="brand-logo">
            <ChefHat size={28} />
          </div>
          <div className="brand-text">
            <h1>FreshPOS</h1>
            <span>Organic Kitchen & Bar</span>
          </div>
        </div>

        <div className="menu-search">
          <Search size={20} />
          <input 
            type="text" 
            placeholder="Search delicious food, drinks, or categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="menu-actions">
          <button className="theme-toggle">
            <Moon size={22} />
          </button>
          <button className="cart-btn" onClick={() => setShowCart(true)}>
            <ShoppingCart size={20} />
            <span>View Cart ({cartCount})</span>
          </button>
          <div className="user-avatar-small">
            <img 
              src="https://ui-avatars.com/api/?name=John+Doe&background=FF6B6B&color=fff" 
              alt="User" 
            />
          </div>
        </div>
      </header>

      {/* Filter Section */}
      <div className="menu-filters">
        <div className="filter-section">
          <span className="filter-label">FILTER BY CATEGORY</span>
          <div className="category-pills">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="sort-section">
          <span className="filter-label">SORT BY</span>
          <select className="sort-dropdown">
            <option>Most Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid-menu">
        {filteredProducts.map(product => (
          <div key={product.id} className={`menu-product-card ${!product.inStock ? 'out-of-stock' : ''}`}>
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
              {product.badge && (
                <span className={`product-badge ${product.badge === 'PROMO' ? 'badge-promo' : product.badge === "CHEF'S CHOICE" ? 'badge-chef' : 'badge-popular'}`}>
                  {product.badge}
                </span>
              )}
              {!product.inStock && (
                <div className="out-of-stock-overlay">
                  <span className="stock-badge">OUT OF STOCK</span>
                </div>
              )}
            </div>
            <div className="product-details">
              <span className="product-category">{product.category.toUpperCase()}</span>
              <h3 className="product-name">{product.name}</h3>
              <div className="product-footer">
                <div className="product-price">
                  <span className="price-label">Price</span>
                  <span className="price-value">Rs. {product.price.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
                </div>
                <button 
                  className={`add-btn ${!product.inStock ? 'disabled' : ''}`}
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <button className="fab-menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3h18v18H3z" />
          <path d="M9 3v18" />
          <path d="M15 3v18" />
          <path d="M3 9h18" />
          <path d="M3 15h18" />
        </svg>
      </button>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="cart-overlay" onClick={() => setShowCart(false)}>
          <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
            {/* Cart Header */}
            <div className="cart-sidebar-header">
              <h2>Your Order</h2>
              <button className="close-cart-btn" onClick={() => setShowCart(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Order Type Banner */}
            <div className="order-type-banner">
              <h3>{orderType === 'dine-in' ? 'Dine In' : orderType === 'takeaway' ? 'Takeaway' : 'Delivery'}</h3>
              <p>{tableNumber ? `Table: ${tableNumber}` : 'No table selected'}</p>
            </div>

            {/* Table Number Input */}
            <div className="table-input-section">
              <label>Table Number <span className="required">*</span></label>
              <div className="table-input-wrapper">
                <input
                  type="text"
                  placeholder="e.g. A5, VIP-1, Table 7"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                />
                <UtensilsCrossed size={20} className="table-icon" />
              </div>
            </div>

            {/* Order Type Selection */}
            <div className="order-type-section">
              <div 
                className={`order-type-card ${orderType === 'dine-in' ? 'active' : ''}`}
                onClick={() => setOrderType('dine-in')}
              >
                <UtensilsCrossed size={24} />
                <span>Dine In</span>
              </div>
              <div 
                className={`order-type-card ${orderType === 'takeaway' ? 'active' : ''}`}
                onClick={() => setOrderType('takeaway')}
              >
                <ShoppingBag size={24} />
                <span>Takeaway</span>
              </div>
              <div 
                className={`order-type-card ${orderType === 'delivery' ? 'active' : ''}`}
                onClick={() => setOrderType('delivery')}
              >
                <Bike size={24} />
                <span>Delivery</span>
              </div>
            </div>

            {/* Cart Items */}
            <div className="cart-items-section">
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <div className="empty-cart-icon">
                    <ShoppingCart size={48} />
                  </div>
                  <p className="empty-text">Your cart is empty</p>
                  <p className="empty-subtext">Start adding some fresh items!</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="cart-item-menu">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="cart-item-price">Rs. {item.price.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                    </div>
                    <div className="cart-item-controls">
                      <button className="qty-btn" onClick={() => updateQty(item.id, -1)}>
                        <Minus size={14} />
                      </button>
                      <span className="qty-value">{item.qty}</span>
                      <button className="qty-btn" onClick={() => updateQty(item.id, 1)}>
                        <Plus size={14} />
                      </button>
                    </div>
                    <button className="remove-item-btn" onClick={() => removeItem(item.id)}>
                      <X size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer */}
            <div className="cart-footer">
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <span className="subtotal-amount">${subtotal.toFixed(2)}</span>
              </div>
              <button 
                className={`checkout-btn ${cart.length === 0 || !tableNumber ? 'disabled' : ''}`}
                onClick={handleSendOrder}
                disabled={cart.length === 0 || !tableNumber}
              >
                {orderSent ? (
                  'Order Sent!'
                ) : (
                  <>
                    Proceed to Checkout <ArrowRight size={18} />
                  </>
                )}
              </button>
              <div className="cart-status">
                <span className="status-dot"></span>
                <span>READY FOR FRESH SELECTION</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
