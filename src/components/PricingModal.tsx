import React, { useState } from 'react';
import './PricingModal.css';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ComparisonValue {
  plan: string;
  value: string;
  isHeader?: boolean;
  isPricing?: boolean;
  isPopular?: boolean;
  isSubtext?: boolean;
  isCurrent?: boolean;
  isBadge?: boolean;
  isCheck?: boolean;
}

interface ComparisonFeature {
  name: string;
  description: string;
  values: ComparisonValue[];
}

interface ComparisonSection {
  category: string;
  features: ComparisonFeature[];
}

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'comparison'>('overview');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  if (!isOpen) return null;

  const plans = [
    {
      id: 'standard',
      name: 'Stripe Standard',
      subtitle: 'Stripe',
      description: 'Your current payment processing solution',
      price: 0,
      period: 'month',
      additionalFees: '2.9% + 30¢ per transaction',
      isCurrent: true,
      features: {
        support: [
          { name: 'Email Support', level: 'Standard' },
          { name: 'Chat Support', level: 'Standard' }
        ],
        disputes: [
          { name: 'Dispute Fees Waived', value: '$15 per dispute' },
          { name: 'Instant Fund Access', value: '1.5% fee' },
          { name: 'Transaction Fees', value: '2.9% + 30¢' }
        ]
      }
    },
    {
      id: 'starter',
      name: 'Scale Starter',
      description: 'Perfect for small businesses getting started',
      price: billingPeriod === 'monthly' ? 29 : 25,
      period: 'month',
      features: {
        support: [
          { name: 'Email Support', level: 'Priority' },
          { name: 'Chat Support', level: 'Priority' },
          { name: 'Phone Support', level: 'Available' }
        ],
        disputes: [
          { name: 'Dispute Fees Waived', value: '5 disputes' },
          { name: 'Instant Fund Access', value: 'Up to $1k' },
          { name: 'Transaction Fees', value: 'Competitive rates' }
        ]
      }
    },
    {
      id: 'plus',
      name: 'Scale Plus',
      description: 'Ideal for growing businesses with more needs',
      price: billingPeriod === 'monthly' ? 149 : 127,
      period: 'month',
      isPopular: true,
      features: {
        support: [
          { name: 'Email Support', level: 'Priority' },
          { name: 'Chat Support', level: 'Priority' },
          { name: 'Phone Support', level: 'Available' }
        ],
        disputes: [
          { name: 'Dispute Fees Waived', value: '10 disputes' },
          { name: 'Instant Fund Access', value: 'Up to $2k' },
          { name: 'Transaction Fees', value: 'Competitive rates' }
        ]
      }
    },
    {
      id: 'advanced',
      name: 'Scale Advanced',
      description: 'Enterprise-grade features for large operations',
      price: billingPeriod === 'monthly' ? 349 : 297,
      period: 'month',
      features: {
        support: [
          { name: 'Email Support', level: 'Priority' },
          { name: 'Chat Support', level: 'Priority' },
          { name: 'Phone Support', level: 'Available' }
        ],
        disputes: [
          { name: 'Dispute Fees Waived', value: '15 disputes' },
          { name: 'Instant Fund Access', value: 'Up to $4k' },
          { name: 'Transaction Fees', value: 'Competitive rates' }
        ]
      }
    }
  ];

  const costComparison = [
    { plan: 'Stripe Standard (Current)', cost: 350, note: 'Variable with volume' },
    { plan: 'Scale Starter', cost: 29 },
    { plan: 'Scale Plus', cost: 149 },
    { plan: 'Scale Advanced', cost: 349 }
  ];

  const comparisonData: ComparisonSection[] = [
    {
      category: 'Features',
      features: [
        {
          name: '',
          description: '',
          values: [
            { plan: 'standard', value: 'Stripe Standard (Current)', isHeader: true },
            { plan: 'starter', value: 'Scale Starter', isHeader: true },
            { plan: 'plus', value: 'Scale Plus', isHeader: true }
          ]
        },
        {
          name: '',
          description: '',
          values: [
            { plan: 'standard', value: '$0/mo', isPricing: true },
            { plan: 'starter', value: '$29/mo', isPricing: true },
            { plan: 'plus', value: '$149/mo', isPricing: true, isPopular: true }
          ]
        },
        {
          name: '',
          description: '',
          values: [
            { plan: 'standard', value: '+ 2.9% + 30¢', isSubtext: true },
            { plan: 'starter', value: '', isSubtext: true },
            { plan: 'plus', value: 'Popular', isBadge: true }
          ]
        },
        {
          name: '',
          description: '',
          values: [
            { plan: 'standard', value: 'Current', isCurrent: true },
            { plan: 'starter', value: '', isSubtext: true },
            { plan: 'plus', value: '', isSubtext: true }
          ]
        }
      ]
    },
    {
      category: 'Payments & fees',
      features: [
        {
          name: 'Processing Fees',
          description: 'Standard pricing applies',
          values: [
            { plan: 'standard', value: '+2.9% + 30¢' },
            { plan: 'starter', value: '+2.9% + 30¢' },
            { plan: 'plus', value: '+2.9% + 30¢' }
          ]
        }
      ]
    },
    {
      category: 'Support & Service',
      features: [
        {
          name: 'Email Support',
          description: 'Get responses to your support requests',
          values: [
            { plan: 'standard', value: 'Standard' },
            { plan: 'starter', value: 'Priority' },
            { plan: 'plus', value: 'Priority' }
          ]
        },
        {
          name: 'Chat Support',
          description: 'Real-time chat assistance when you need it',
          values: [
            { plan: 'standard', value: 'Standard' },
            { plan: 'starter', value: 'Priority' },
            { plan: 'plus', value: 'Priority' }
          ]
        },
        {
          name: 'Phone Support',
          description: 'Direct phone line to our support team',
          values: [
            { plan: 'standard', value: '—' },
            { plan: 'starter', value: '✓', isCheck: true },
            { plan: 'plus', value: '✓', isCheck: true }
          ]
        }
      ]
    },
    {
      category: 'Payment & Disputes',
      features: [
        {
          name: 'Dispute Fees Waived',
          description: 'Dispute handling fees',
          values: [
            { plan: 'standard', value: '$15 per dispute' },
            { plan: 'starter', value: '5 disputes' },
            { plan: 'plus', value: '10 disputes' }
          ]
        },
        {
          name: 'Instant Fund Access',
          description: 'Access to funds before standard payout',
          values: [
            { plan: 'standard', value: '1.5% fee' },
            { plan: 'starter', value: 'Up to $1k' },
            { plan: 'plus', value: 'Up to $2k' }
          ]
        }
      ]
    },
    {
      category: 'Business Tools',
      features: [
        {
          name: 'Custom Domain',
          description: 'Use your own domain for payment pages',
          values: [
            { plan: 'standard', value: '—' },
            { plan: 'starter', value: '—' },
            { plan: 'plus', value: '✓', isCheck: true }
          ]
        },
        {
          name: 'Invoice Sending',
          description: 'collection',
          values: [
            { plan: 'standard', value: 'Additional' },
            { plan: 'starter', value: '—' },
            { plan: 'plus', value: 'Included' }
          ]
        }
      ]
    }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <h2>Upgrade your payment processing</h2>
            <p>You're currently on Stripe Standard. Compare upgrade options with better features and predictable pricing.</p>
          </div>
          <button className="close-btn" onClick={onClose}>
            <img src="/salty/icons/icon-close.svg" alt="Close" />
          </button>
        </div>

        {/* Tabs */}
        <div className="modal-tabs">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Plan Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === 'comparison' ? 'active' : ''}`}
            onClick={() => setActiveTab('comparison')}
          >
            Feature Comparison
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className="tab-content">
            {/* Billing Period Toggle */}
            <div className="billing-toggle">
              <button 
                className={`toggle-btn ${billingPeriod === 'monthly' ? 'active' : ''}`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button 
                className={`toggle-btn ${billingPeriod === 'annual' ? 'active' : ''}`}
                onClick={() => setBillingPeriod('annual')}
              >
                Annual <span className="save-badge">Save 15%</span>
              </button>
            </div>

            {/* Pricing Cards */}
            <div className="pricing-grid">
              {plans.map((plan) => (
                <div key={plan.id} className={`pricing-card ${plan.isCurrent ? 'current' : ''} ${plan.isPopular ? 'popular' : ''}`}>
                  {plan.isCurrent && <div className="current-badge">Current Plan</div>}
                  {plan.isPopular && <div className="popular-badge">Most Popular</div>}
                  
                  <div className="plan-header">
                    {plan.subtitle && <div className="plan-subtitle">{plan.subtitle}</div>}
                    <h3 className="plan-name">{plan.name}</h3>
                    <p className="plan-description">{plan.description}</p>
                  </div>

                  <div className="plan-pricing">
                    <div className="price">
                      <span className="currency">$</span>
                      <span className="amount">{plan.price}</span>
                      <span className="period">/{plan.period}</span>
                    </div>
                    {plan.additionalFees && (
                      <div className="additional-fees">+ {plan.additionalFees}</div>
                    )}
                  </div>

                  <button className={`upgrade-btn ${plan.isCurrent ? 'current' : ''}`}>
                    {plan.isCurrent ? 'Current Plan' : 'Upgrade Now'}
                  </button>

                  <div className="features-section">
                    <h4>Support & Service</h4>
                    <ul className="features-list">
                      {plan.features.support.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <span>{feature.name}</span>
                          {feature.level && <span className="feature-level"> - {feature.level}</span>}
                        </li>
                      ))}
                      {!plan.isCurrent && (
                        <li className="feature-item">
                          <span>Phone Support</span>
                        </li>
                      )}
                    </ul>

                    <h4>Payment & Disputes</h4>
                    <ul className="features-list">
                      {plan.features.disputes.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <span>{feature.name}</span>
                          <span className="feature-level"> - {feature.value}</span>
                        </li>
                      ))}
                    </ul>

                    <a href="#" className="view-all-link">
                      View all features →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Cost Comparison */}
            <div className="cost-comparison">
              <h3>💰 Cost Comparison Example</h3>
              <p>Monthly costs for a business processing $10,000 in payments:</p>
              
              <div className="comparison-grid">
                {costComparison.map((item, index) => (
                  <div key={index} className={`comparison-card ${index === 0 ? 'current' : ''}`}>
                    <div className="comparison-name">{item.plan}</div>
                    <div className="comparison-cost">${item.cost}</div>
                    <div className="comparison-label">total monthly cost</div>
                    {item.note && <div className="comparison-note">{item.note}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'comparison' && (
          <div className="tab-content">
            <div className="feature-comparison-table">
              {comparisonData.map((section, sectionIndex) => (
                <div key={sectionIndex} className="comparison-section">
                  {section.category !== 'Features' && (
                    <div className="section-header">
                      <h3 className="section-title">{section.category}</h3>
                    </div>
                  )}
                  
                  {section.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className={`comparison-row ${section.category === 'Features' ? 'header-row' : ''}`}>
                      {section.category !== 'Features' && (
                        <div className="feature-info">
                          <div className="feature-name">{feature.name}</div>
                          {feature.description && (
                            <div className="feature-description">{feature.description}</div>
                          )}
                        </div>
                      )}
                      
                      <div className="feature-values">
                        {feature.values.map((value, valueIndex) => (
                          <div 
                            key={valueIndex} 
                            // className={`feature-value ${value.isHeader ? 'header' : ''} ${value.isPricing ? 'pricing' : ''} ${value.isSubtext ? 'subtext' : ''} ${value.isCurrent ? 'current-badge-cell' : ''} ${value.isBadge ? 'badge-cell' : ''} ${value.isCheck ? 'check' : ''}`}
                          >
                            {value.isCurrent && <span className="current-badge-inline">Current</span>}
                            {value.isBadge && <span className="popular-badge-inline">Popular</span>}
                            {!value.isCurrent && !value.isBadge && value.value}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingModal; 