import React from 'react';

export const ContactCta: React.FC = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-content">
            <span className="section-badge" id="blabla">
              Book a Product Demo
            </span>

            <h2>
              Ready to Transform Your <span>HR Operations?</span>
            </h2>

            <p>
              Contact us for a personalized walkthrough of OmniHR and discover how it can
              support your organization.
            </p>
          </div>

          <div className="contact-actions">
            <div>
              <a
                href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'sales@omnihr.com'}`}
                className="primary-button"
              >
                Contact Sales <span>→</span>
              </a>
            </div>

            <div>
              <a
                href={`tel:${import.meta.env.VITE_CONTACT_PHONE || '+910000000000'}`}
                className="secondary-button"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
