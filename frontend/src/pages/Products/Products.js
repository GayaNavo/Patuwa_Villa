import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Download, MoreVertical, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import './Products.css';

const Products = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const products = [
    {
      id: 1,
      name: 'Cheese Pack',
      code: '236598',
      brand: 'Forest Dairy',
      price: 'LKR 500.00',
      unit: 'Packets',
      stock: 0,
      stockStatus: 'out',
      createdOn: '2026-02-12',
      image: null
    },
    {
      id: 2,
      name: 'Herbal Tea',
      code: '233265',
      brand: 'Green Leaf',
      price: 'LKR 600.00',
      unit: 'Box',
      stock: 12,
      stockStatus: 'in',
      createdOn: '2026-02-12',
      image: null
    },
    {
      id: 3,
      name: 'Honey Jar',
      code: '323265',
      brand: 'Wild Hive',
      price: 'LKR 1,200.00',
      unit: 'Jar',
      stock: 45,
      stockStatus: 'in',
      createdOn: '2026-02-10',
      image: null
    },
    {
      id: 4,
      name: 'Organic Oats',
      code: '123456',
      brand: 'Eco Grain',
      price: 'LKR 950.00',
      unit: 'Packets',
      stock: 8,
      stockStatus: 'in',
      createdOn: '2026-01-25',
      image: null
    }
  ];

  const totalProducts = 24;
  const productsPerPage = 4;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const getStockBadge = (stock, status) => {
    if (status === 'out') {
      return <span className="stock-badge out">Out of Stock</span>;
    }
    return <span className="stock-badge in">{stock} units</span>;
  };

  return (
    <div className="products-page">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <span>Dashboard</span>
            <span className="separator">/</span>
            <span>Inventory</span>
            <span className="separator">/</span>
            <span className="current">Products</span>
          </div>

          {/* Page Header */}
          <div className="page-header">
            <div className="page-title">
              <h1>Product Inventory</h1>
              <p>Manage and track your nature-inspired stock items.</p>
            </div>
            <button className="create-btn" onClick={() => navigate('/products/create')}>
              <Plus size={18} />
              Create Product
            </button>
          </div>

          {/* Search and Filters */}
          <div className="search-filter-bar">
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search products by name, code or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="filter-actions">
              <button className="filter-btn">
                <Filter size={16} />
                Filter
              </button>
              <button className="export-btn">
                <Download size={16} />
                Export
              </button>
            </div>
          </div>

          {/* Products Table */}
          <div className="products-table-container">
            <table className="products-table">
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>NAME</th>
                  <th>CODE</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>UNIT</th>
                  <th>IN STOCK</th>
                  <th>CREATED ON</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <div className="product-image">
                        {product.image ? (
                          <img src={product.image} alt={product.name} />
                        ) : (
                          <div className="product-placeholder">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" />
                              <circle cx="8.5" cy="8.5" r="1.5" />
                              <path d="M21 15l-5-5L5 21" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="product-name">{product.name}</td>
                    <td>{product.code}</td>
                    <td>{product.brand}</td>
                    <td className="product-price">{product.price}</td>
                    <td>{product.unit}</td>
                    <td>{getStockBadge(product.stock, product.stockStatus)}</td>
                    <td>{product.createdOn}</td>
                    <td>
                      <button className="action-btn">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="pagination">
              <span className="showing-text">
                Showing {(currentPage - 1) * productsPerPage + 1} to {Math.min(currentPage * productsPerPage, totalProducts)} of {totalProducts} products
              </span>
              <div className="pagination-controls">
                <button 
                  className="page-btn" 
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <ChevronLeft size={16} />
                </button>
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={`page-btn ${currentPage === page ? 'active' : ''}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
                <button 
                  className="page-btn" 
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
