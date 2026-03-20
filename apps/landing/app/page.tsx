import React from 'react';

const Page = () => {
  return (
    <main>
      {/* Header */}
      <header className="container site-header animate-in">
        <div className="logo">NecoFi</div>
        <nav className="nav-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#principles" className="nav-link">Principles</a>
        </nav>
        <a href="#login" className="btn btn-secondary">Log in</a>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <span className="text-eyebrow animate-in">Finance Protocol</span>
          <h1 className="text-hero animate-in delay-1">Money management with less noise.</h1>
          <p className="text-lead animate-in delay-2">
            A minimalist personal finance companion that focuses on clarity and restraint. 
            No loud dashboards or overwhelming graphs. Just what matters, when it matters.
          </p>
          <div className="hero-actions animate-in delay-3">
            <a href="#signup" className="btn btn-primary">Start for free</a>
            <a href="#features" className="btn btn-secondary">Explore features</a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container stats-section">
        <div className="stat-block animate-in">
          <span className="stat-value">12+</span>
          <span className="stat-label">Accounts synced seamlessly</span>
        </div>
        <div className="stat-block animate-in delay-1">
          <span className="stat-value">&lt;10 min</span>
          <span className="stat-label">Average weekly review time</span>
        </div>
        <div className="stat-block animate-in delay-2">
          <span className="stat-value">3</span>
          <span className="stat-label">Taps to complete any core flow</span>
        </div>
      </section>

      {/* Product Demo / Visual Section */}
      <section className="demo-section" id="features">
        <div className="container demo-container">
          <div className="demo-content animate-in">
            <h2 className="text-h2">Clear overview, zero clutter.</h2>
            <p className="text-body">
              See your total balance, recent transactions, and upcoming obligations in one structured view. 
              We designed the interface to feel composed and private, prioritizing fast comprehension over flashy analytics.
            </p>
          </div>
          
          <div className="demo-visual animate-in delay-1">
            <div className="mock-ui-header">
              <div>
                <div className="mock-ui-label">Total Balance</div>
                <div className="mock-ui-balance">$18,420.80</div>
              </div>
            </div>
            
            <div className="mock-ui-list">
              <div className="mock-ui-row">
                <div className="mock-ui-col-left">
                  <span className="mock-ui-row-title">Monthly Salary</span>
                  <span className="mock-ui-row-sub">Stripe Inc • Today</span>
                </div>
                <span className="mock-ui-amount positive">+$5,240.00</span>
              </div>
              <div className="mock-ui-row">
                <div className="mock-ui-col-left">
                  <span className="mock-ui-row-title">Apartment Rent</span>
                  <span className="mock-ui-row-sub">Scheduled • Tomorrow</span>
                </div>
                <span className="mock-ui-amount">-$2,100.00</span>
              </div>
              <div className="mock-ui-row">
                <div className="mock-ui-col-left">
                  <span className="mock-ui-row-title">Whole Foods Market</span>
                  <span className="mock-ui-row-sub">Groceries • Yesterday</span>
                </div>
                <span className="mock-ui-amount">-$142.50</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Features Grid */}
      <section className="features-section container" id="principles">
        <span className="text-eyebrow">Core Principles</span>
        <h2 className="text-h2">Designed for focus</h2>
        
        <div className="features-grid">
          <div className="feature-item animate-in">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <h3 className="text-h3">One clear home</h3>
            <p className="text-body">
              See balances, recent movement, and your next financial priority without dashboard clutter.
            </p>
          </div>
          <div className="feature-item animate-in delay-1">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="text-h3">Quiet automation</h3>
            <p className="text-body">
              Track recurring bills, savings goals, and spending patterns with minimal manual work.
            </p>
          </div>
          <div className="feature-item animate-in delay-2">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 className="text-h3">Private by posture</h3>
            <p className="text-body">
              Built to feel like a personal financial companion with clear controls and restrained feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section container">
        <div className="animate-in">
          <p className="quote-text">
            "Premium through restraint. Clarity through reduction. Trust through consistency."
          </p>
          <span className="quote-author">The NecoFi Standard</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="container">
        <div className="site-footer">
          <span>NecoFi Minimalist App Template</span>
          <span>&copy; {new Date().getFullYear()} necookie. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
};

export default Page;
