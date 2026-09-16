import React from 'react';

export const Benefits: React.FC = () => {
  return (
    <section className="section benefits-section" id="benefits">
      <div className="container">
        <div className="section-heading">
          <span className="section-badge">Why Choose OmniHR?</span>

          <h2>
            Built to Simplify HR. <span>Designed to Scale.</span>
          </h2>

          <p>
            From growing startups to established companies, OmniHR provides the tools needed to
            manage people, processes and workforce data.
          </p>
        </div>

        <div className="benefits-grid">
          <article className="benefit-card">
            <span>01</span>
            <h3>Single HR Platform</h3>
            <p>
              Replace disconnected spreadsheets and tools with one centralized HR management
              system.
            </p>
          </article>

          <article className="benefit-card">
            <span>02</span>
            <h3>Faster HR Processes</h3>
            <p>
              Reduce manual work through streamlined approvals, reusable masters and
              automation.
            </p>
          </article>

          <article className="benefit-card">
            <span>03</span>
            <h3>Better Visibility</h3>
            <p>
              Access real-time employee, attendance, leave and payroll information.
            </p>
          </article>

          <article className="benefit-card">
            <span>04</span>
            <h3>Secure Access</h3>
            <p>
              Control functionality for HR administrators, managers and employees using
              permissions.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
