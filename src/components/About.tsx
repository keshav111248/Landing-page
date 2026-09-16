import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container about-container">
        <div className="section-heading">
          <span className="section-badge">About OmniHR</span>

          <h2>
            One Platform to Manage Your <span>Entire Workforce</span>
          </h2>

          <p>
            OmniHR brings employee management, attendance, leave, payroll, reports, documents
            and administrative controls together in one secure HR management platform.
          </p>
        </div>

        <div className="about-grid">
          <article className="about-card">
            <span className="about-number">01</span>
            <h3>
              Centralized HR <br /> Operations
            </h3>
            <p>
              Manage employee records, attendance, leave, payroll and company settings from
              one application.
            </p>
          </article>

          <article className="about-card">
            <span className="about-number">02</span>
            <h3>
              Role-Based Access <br /> Control
            </h3>
            <p>
              Provide separate permissions and functionality for HR administrators, managers
              and employees.
            </p>
          </article>

          <article className="about-card">
            <span className="about-number">03</span>
            <h3>
              Real-Time Information <br /> Monitoring
            </h3>
            <p>
              Access live workforce statistics, pending approvals, attendance records and
              notifications.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
