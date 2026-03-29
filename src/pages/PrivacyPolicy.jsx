import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="container legal-container">
        <Link to="/" className="legal-back">
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <div className="legal-header">
          <p className="eyebrow">Legal</p>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-effective">Effective Date: January 1, 2026</p>
        </div>

        <div className="legal-body">
          <p>
            Reivax Partners LLC ("Reivax Partners," "we," "us," or "our") operates the website
            reivaxpartners.com (the "Site"). This Privacy Policy explains how we collect, use,
            and protect information you provide when you visit or contact us through the Site.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect information you voluntarily provide through our contact form, including
            your name, email address, and any message content you choose to share. We do not
            automatically collect analytics data, tracking cookies, or device fingerprints
            beyond what is standard to web server operation.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information you provide solely to:</p>
          <ul>
            <li>Respond to your inquiry and facilitate a potential conversation;</li>
            <li>Assess whether there may be a mutual fit for an acquisition discussion; and</li>
            <li>Communicate with you about next steps if applicable.</li>
          </ul>
          <p>
            We do not use your information for marketing campaigns, automated outreach, or
            any purpose beyond direct follow-up on your inquiry.
          </p>

          <h2>3. Third-Party Services</h2>
          <p>
            Contact form submissions are processed through Formspree (formspree.io), a
            third-party form handling service. Formspree's own privacy policy governs how
            they handle form data in transit. We do not share your information with any
            other third parties, brokers, or data aggregators.
          </p>

          <h2>4. Data Retention</h2>
          <p>
            We retain contact information only as long as necessary to respond to your
            inquiry or maintain an ongoing business relationship. If you would like your
            information deleted, contact us at the email below and we will honor that
            request promptly.
          </p>

          <h2>5. Security</h2>
          <p>
            We take reasonable precautions to protect your information from unauthorized
            access or disclosure. However, no method of electronic transmission is completely
            secure, and we cannot guarantee absolute security.
          </p>

          <h2>6. No Sale of Personal Information</h2>
          <p>
            We do not sell, rent, or trade your personal information to any third party,
            under any circumstances.
          </p>

          <h2>7. Children's Privacy</h2>
          <p>
            This Site is intended for business owners and professionals. We do not knowingly
            collect information from individuals under the age of 18.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on
            this page with a revised effective date. Your continued use of the Site after
            any update constitutes acceptance of the revised policy.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            For questions about this Privacy Policy or to request deletion of your data,
            please contact:
          </p>
          <div className="legal-contact">
            <p><strong>Reivax Partners LLC</strong></p>
            <p>St. Louis, Missouri</p>
            <p>
              Email:{' '}
              <a href="mailto:contact@reivaxpartners.com">contact@reivaxpartners.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
