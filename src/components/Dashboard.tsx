import React, { useState } from 'react';
import './Dashboard.css';
import PricingModal from './PricingModal';

const Dashboard: React.FC = () => {
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

  const handlePlanCardClick = () => {
    setIsPricingModalOpen(true);
  };

  const closePricingModal = () => {
    setIsPricingModalOpen(false);
  };

  return (
    <div className="dashboard">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span className="breadcrumb-item">Settings</span>
        <span className="breadcrumb-separator">›</span>
      </div>

      {/* Page Title */}
      <h1 className="page-title">Plans and fees</h1>

      {/* Tab Navigation */}
      <div className="tab-nav">
        <button className="tab-btn active">Plans</button>
        <button className="tab-btn">Invoice history</button>
        <button className="tab-btn">Fees</button>
        <button className="tab-btn">Fee credits</button>
      </div>

      {/* Current Plan Section */}
      <div className="current-plan-section">
        <h2 className="section-title">Current Plan</h2>
        
        <div className="plan-card clickable" onClick={handlePlanCardClick}>
          <div className="plan-info">
            <div className="plan-header">
              <div className="plan-icon">⚡</div>
              <div className="plan-details">
                <h3 className="plan-name">Stripe Scale</h3>
                <p className="plan-description">Special bundle pricing to run your business.</p>
              </div>
            </div>

            <div className="plan-services">
              <h4 className="services-title">Included services</h4>
              <div className="services-list">
                <div className="service-item">
                  <img src="/salty/icons/icon-payments.svg" alt="Payments" className="service-icon" />
                  <span className="service-name">Payments</span>
                </div>
                <div className="service-item">
                  <img src="/salty/icons/icon-billing.svg" alt="Billing" className="service-icon" />
                  <span className="service-name">Billing</span>
                </div>
                <div className="service-item">
                  <img src="/salty/icons/icon-billing.svg" alt="Invoicing" className="service-icon" />
                  <span className="service-name">Invoicing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="plan-pricing">
            <div className="subscription-label">Subscription</div>
            <div className="price">
              <span className="price-amount">$149</span>
              <span className="price-period">/month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sections */}
      <div className="bottom-sections">
        <div className="fees-section">
          <h3 className="section-title">All fees</h3>
          <p className="section-description">View all your Stripe and external fees.</p>
          <a href="/fees" className="view-link">View fees</a>
        </div>

        <div className="pricing-section">
          <h3 className="section-title">Pricing</h3>
          <p className="section-description">View pricing for all plans and features.</p>
          <a href="/pricing" className="view-link">View all pricing →</a>
        </div>
      </div>

      {/* Pricing Modal */}
      <PricingModal 
        isOpen={isPricingModalOpen} 
        onClose={closePricingModal} 
      />
    </div>
  );
};

export default Dashboard; 