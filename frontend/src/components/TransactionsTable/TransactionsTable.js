import React from 'react';
import { BarChart3, ChevronDown, Eye } from 'lucide-react';
import './TransactionsTable.css';

const TransactionsTable = () => {
  const transactions = [
    {
      id: '#ORD-2024-001',
      customer: 'Cash Customer',
      type: 'SALE',
      amount: 'LKR 4,232.00',
      status: 'Completed'
    },
    {
      id: '#PUR-2024-055',
      customer: 'Coca Cola Pvt Ltd',
      type: 'PURCHASE',
      amount: 'LKR 1,470.80',
      status: 'Completed'
    },
    {
      id: '#ORD-2024-002',
      customer: 'Table 2',
      type: 'SALE',
      amount: 'LKR 2,300.00',
      status: 'Pending'
    }
  ];

  return (
    <div className="transactions-section">
      <div className="section-header">
        <div className="section-title">
          <div className="title-icon">
            <BarChart3 size={18} />
          </div>
          <span>RECENT SALES & PURCHASES</span>
        </div>
        <div className="section-filters">
          <button className="filter-btn">
            Daily <ChevronDown size={14} />
          </button>
          <button className="filter-btn">
            Bar Chart <ChevronDown size={14} />
          </button>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer/Supplier</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td className="order-id">{transaction.id}</td>
                <td>{transaction.customer}</td>
                <td>
                  <span className={`type-badge ${transaction.type.toLowerCase()}`}>
                    {transaction.type}
                  </span>
                </td>
                <td>{transaction.amount}</td>
                <td>
                  <span className={`status-badge ${transaction.status.toLowerCase()}`}>
                    {transaction.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn">
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <span className="showing-text">Showing 3 of 42 transactions</span>
        <div className="pagination">
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionsTable;
