import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Info, Tag, Box, List, Plus, Camera, Check } from 'lucide-react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import './CreateProduct.css';

const CreateProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productName: '',
    productCode: '',
    isInventory: 'no',
    category: '',
    brand: '',
    supplier: '',
    saleUnit: '',
    productType: '',
    variation: '',
    note: '',
    warehouse: ''
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product created:', formData);
    navigate('/products');
  };

  const handleClear = () => {
    setFormData({
      productName: '',
      productCode: '',
      isInventory: 'no',
      category: '',
      brand: '',
      supplier: '',
      saleUnit: '',
      productType: '',
      variation: '',
      note: '',
      warehouse: ''
    });
  };

  return (
    <div className="create-product-page">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">
          {/* Page Header */}
          <div className="page-header">
            <div className="page-title">
              <h1>Create Product</h1>
              <p>Add a new item to your inventory</p>
            </div>
            <button className="back-btn" onClick={() => navigate('/products')}>
              <ArrowLeft size={16} />
              Back
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="product-form">
            {/* General Information */}
            <div className="form-section">
              <div className="section-header">
                <Info size={18} />
                <h3>General Information</h3>
              </div>
              <div className="form-row three-col">
                <div className="form-group">
                  <label>PRODUCT NAME (MAX 40 CHARS)*</label>
                  <input
                    type="text"
                    placeholder="e.g. Organic Matcha Tea"
                    value={formData.productName}
                    onChange={(e) => handleChange('productName', e.target.value)}
                    maxLength={40}
                  />
                </div>
                <div className="form-group">
                  <label>PRODUCT CODE*</label>
                  <input
                    type="text"
                    placeholder="e.g. PRD-001"
                    value={formData.productCode}
                    onChange={(e) => handleChange('productCode', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>IS INVENTORY?*</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="isInventory"
                        value="yes"
                        checked={formData.isInventory === 'yes'}
                        onChange={(e) => handleChange('isInventory', e.target.value)}
                      />
                      <span className="radio-custom"></span>
                      Yes
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="isInventory"
                        value="no"
                        checked={formData.isInventory === 'no'}
                        onChange={(e) => handleChange('isInventory', e.target.value)}
                      />
                      <span className="radio-custom"></span>
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Classification */}
            <div className="form-section">
              <div className="section-header">
                <Tag size={18} />
                <h3>Classification</h3>
              </div>
              <div className="form-row three-col">
                <div className="form-group with-add-btn">
                  <label>CATEGORY*</label>
                  <div className="input-with-btn">
                    <input
                      type="text"
                      placeholder="Search category..."
                      value={formData.category}
                      onChange={(e) => handleChange('category', e.target.value)}
                    />
                    <button type="button" className="add-btn-small">
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
                <div className="form-group with-add-btn">
                  <label>BRAND*</label>
                  <div className="input-with-btn">
                    <input
                      type="text"
                      placeholder="Search brand..."
                      value={formData.brand}
                      onChange={(e) => handleChange('brand', e.target.value)}
                    />
                    <button type="button" className="add-btn-small">
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
                <div className="form-group with-add-btn">
                  <label>SUPPLIER*</label>
                  <div className="input-with-btn">
                    <input
                      type="text"
                      placeholder="Search supplier..."
                      value={formData.supplier}
                      onChange={(e) => handleChange('supplier', e.target.value)}
                    />
                    <button type="button" className="add-btn-small">
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="form-section">
              <div className="section-header">
                <Box size={18} />
                <h3>Specifications</h3>
              </div>
              <div className="form-row three-col">
                <div className="form-group">
                  <label>SALE UNIT*</label>
                  <select
                    value={formData.saleUnit}
                    onChange={(e) => handleChange('saleUnit', e.target.value)}
                  >
                    <option value="">Select a sale unit</option>
                    <option value="piece">Piece</option>
                    <option value="kg">Kilogram</option>
                    <option value="g">Gram</option>
                    <option value="l">Liter</option>
                    <option value="ml">Milliliter</option>
                    <option value="box">Box</option>
                    <option value="packet">Packet</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>PRODUCT TYPE*</label>
                  <select
                    value={formData.productType}
                    onChange={(e) => handleChange('productType', e.target.value)}
                  >
                    <option value="">Select a type</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                    <option value="service">Service</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>VARIATION</label>
                  <select
                    value={formData.variation}
                    onChange={(e) => handleChange('variation', e.target.value)}
                  >
                    <option value="">Select a variation</option>
                    <option value="size">Size</option>
                    <option value="color">Color</option>
                    <option value="flavor">Flavor</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="form-section">
              <div className="section-header">
                <List size={18} />
                <h3>Additional Details</h3>
              </div>
              <div className="form-row two-col">
                <div className="form-group">
                  <label>NOTE</label>
                  <textarea
                    placeholder="Enter notes..."
                    value={formData.note}
                    onChange={(e) => handleChange('note', e.target.value)}
                    rows={5}
                  />
                </div>
                <div className="form-group-col">
                  <div className="form-group">
                    <label>WAREHOUSE*</label>
                    <select
                      value={formData.warehouse}
                      onChange={(e) => handleChange('warehouse', e.target.value)}
                    >
                      <option value="">Select a warehouse</option>
                      <option value="main">Main Warehouse</option>
                      <option value="secondary">Secondary Warehouse</option>
                      <option value="cold">Cold Storage</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>PRODUCT IMAGE</label>
                    <div className="image-upload">
                      <Camera size={24} />
                      <span>Upload Photo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="form-actions">
              <button type="button" className="clear-btn" onClick={handleClear}>
                Clear Form
              </button>
              <button type="submit" className="submit-btn">
                <Check size={18} />
                Create Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
