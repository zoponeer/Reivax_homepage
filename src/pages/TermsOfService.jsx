import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
  return (
    <div className="legal-page">
      <div className="container legal-container">
        <Link to="/" className="legal-back">
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <div className="legal-header">
          <p className="eyebrow">Legal</p>
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-effective">Effective Date: January 1, 2026</p>
        </div>

        <div className="legal-body">
          <p>
            By accessing or using the Reivax Partners website at reivaxpartners.com (the "Site"),
            you agree to be bound by these Terms of Service. If you do not agree, please do not
            use the Site.
          </p>

          <h2>1. Purpose of This Site</h2>
          <p>
            This Site is operated by Reivax Partners LLC ("Reivax Partners," "we," "us," or "our"),
            a private acquisition firm based in St. Louis, Missouri. The Site is intended to provide
            information about our acquisition focus and to facilitate introductory conversations with
            business owners considering a transition.
          </p>

          <h2>2. Not Investment or Legal Advice</h2>
          <p>
            Nothing on this Site constitutes investment advice, legal advice, financial advice, or
            a solicitation to buy or sell any security or business interest. All content is provided
            for informational purposes only. You should consult qualified legal and financial advisors
            before making any business or financial decision.
          </p>

          <h2>3. No Guarantee of Transaction</h2>
          <p>
            Submitting a contact form or initiating a conversation with Reivax Partners does not
            create any obligation — on either party — to proceed with a transaction. All discussions
            are exploratory and non-binding unless and until a written agreement is executed by
            both parties.
          </p>

          <h2>4. Accuracy of Information</h2>
          <p>
            We make reasonable efforts to ensure the information on this Site is accurate and
            up to date. However, we make no warranties, express or implied, regarding the
            completeness, accuracy, or reliability of any content. We reserve the right to
            update or remove content at any time without notice.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on this Site — including text, design, graphics, and the Reivax Partners
            name and logo — is the property of Reivax Partners LLC and protected by applicable
            copyright and trademark laws. You may not reproduce, distribute, or use any content
            from this Site without our prior written consent.
          </p>

          <h2>6. Links to Third-Party Sites</h2>
          <p>
            This Site may contain links to third-party websites. We do not endorse, control, or
            take responsibility for the content or practices of any linked site. Your use of
            third-party sites is at your own risk.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Reivax Partners LLC shall not be liable for
            any indirect, incidental, special, or consequential damages arising from your use of
            this Site or reliance on any content herein. Our total liability to you for any claim
            arising from use of this Site shall not exceed one hundred dollars ($100).
          </p>

          <h2>8. Confidentiality of Business Information</h2>
          <p>
            Any business or financial information you share with us through the contact form or
            in subsequent communications will be treated as confidential. We will not disclose
            your information to third parties without your consent, except as required by law.
            For formal engagements, a mutual non-disclosure agreement will be offered prior to
            the exchange of substantive business information.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Missouri, without regard to
            its conflict of law provisions. Any dispute arising under these Terms shall be
            resolved exclusively in the state or federal courts located in St. Louis, Missouri.
          </p>

          <h2>10. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Updates will be posted on this page
            with a revised effective date. Your continued use of the Site after any update
            constitutes your acceptance of the revised Terms.
          </p>

          <h2>11. Contact Us</h2>
          <p>For questions about these Terms, please contact:</p>
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
