import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      {/* Logo Section */}
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">🌵</span>
          <span className="logo-text">Cactus Practice</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <img src="/salty/icons/icon-home.svg" alt="Home" className="nav-icon" />
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/balances" className="nav-link">
              <img src="/salty/icons/icon-balances.svg" alt="Balances" className="nav-icon" />
              Balances
            </a>
          </li>
          <li className="nav-item">
            <a href="/transactions" className="nav-link">
              <img src="/salty/icons/icon-transactions.svg" alt="Transactions" className="nav-icon" />
              Transactions
            </a>
          </li>
          <li className="nav-item">
            <a href="/directory" className="nav-link">
              <img src="/salty/icons/icon-customers.svg" alt="Directory" className="nav-icon" />
              Directory
            </a>
          </li>
          <li className="nav-item">
            <a href="/catalog" className="nav-link">
              <img src="/salty/icons/icon-catalog.svg" alt="Product catalog" className="nav-icon" />
              Product catalog
            </a>
          </li>
        </ul>

        {/* Shortcuts Section */}
        <div className="nav-section">
          <h3 className="section-title">Shortcuts</h3>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/fraud" className="nav-link">
                <img src="/salty/icons/icon-apps.svg" alt="Fraud tools" className="nav-icon" />
                Fraud tools
              </a>
            </li>
            <li className="nav-item">
              <a href="/terminal" className="nav-link">
                <img src="/salty/icons/icon-payments.svg" alt="Terminal" className="nav-icon" />
                Terminal
              </a>
            </li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="nav-section">
          <h3 className="section-title">Products</h3>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/connect" className="nav-link">
                <img src="/salty/icons/icon-apps.svg" alt="Connect" className="nav-icon" />
                Connect
                <span className="nav-arrow">▶</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/payments" className="nav-link">
                <img src="/salty/icons/icon-payments.svg" alt="Payments" className="nav-icon" />
                Payments
                <span className="nav-arrow">▶</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/billing" className="nav-link">
                <img src="/salty/icons/icon-billing.svg" alt="Billing" className="nav-icon" />
                Billing
                <span className="nav-arrow">▶</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/reporting" className="nav-link">
                <img src="/salty/icons/icon-reporting.svg" alt="Reporting" className="nav-icon" />
                Reporting
                <span className="nav-arrow">▶</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/more" className="nav-link">
                <img src="/salty/icons/icon-ellipsish.svg" alt="More" className="nav-icon" />
                More
                <span className="nav-arrow">▶</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="sidebar-bottom">
        <div className="nav-item">
          <a href="/developers" className="nav-link">
            <img src="/salty/icons/icon-apps.svg" alt="Developers" className="nav-icon" />
            Developers
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 