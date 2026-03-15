import { useState } from 'react'
import {
  ArrowRight,
  RefreshCw,
  Building2,
  TrendingUp,
  Users,
  Award,
  Heart,
  EyeOff,
  Zap,
  Phone,
  Wrench,
  Menu,
  X,
  Mail,
  MapPin,
} from 'lucide-react'

const styles = {
  // Layout
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  // Nav
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: 'var(--cream)',
    borderBottom: '1px solid var(--ink-20)',
    padding: '1.25rem 0',
  },
  navInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  navLogo: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: '1.15rem',
    color: 'var(--ink)',
    textDecoration: 'none',
    letterSpacing: '-0.02em',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',
    listStyle: 'none',
  },
  navLink: {
    fontSize: '0.75rem',
    fontWeight: 500,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    textDecoration: 'none',
    opacity: 0.7,
    transition: 'opacity 0.2s',
  },
  navCTA: {
    backgroundColor: 'var(--ink)',
    color: 'var(--cream)',
    border: 'none',
    borderRadius: '999px',
    padding: '0.6rem 1.4rem',
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  },
  // Hero
  hero: {
    padding: '8rem 0 6rem',
    minHeight: '85vh',
    display: 'flex',
    alignItems: 'center',
  },
  heroHeading: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 900,
    fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
    lineHeight: 1.05,
    letterSpacing: '-0.03em',
    color: 'var(--ink)',
    marginBottom: '1.75rem',
    maxWidth: '820px',
  },
  heroSubtitle: {
    fontSize: '1.125rem',
    color: 'var(--ink-60)',
    maxWidth: '560px',
    marginBottom: '2.5rem',
    lineHeight: 1.7,
  },
  heroCTA: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'var(--ink)',
    color: 'var(--cream)',
    border: 'none',
    borderRadius: '999px',
    padding: '1rem 2rem',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  heroBadge: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
    marginLeft: '2rem',
  },
  heroBadgeLabel: {
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--emerald)',
  },
  heroBadgeSub: {
    fontSize: '0.8rem',
    color: 'var(--ink-60)',
  },
  heroBottom: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '2.5rem',
  },
  divider: {
    height: '1px',
    backgroundColor: 'var(--ink-20)',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  // Section styles
  section: {
    padding: '6rem 0',
  },
  sectionLabel: {
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--emerald)',
    marginBottom: '1rem',
  },
  sectionHeading: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 800,
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    letterSpacing: '-0.02em',
    lineHeight: 1.15,
    color: 'var(--ink)',
    marginBottom: '1.25rem',
  },
  sectionSub: {
    fontSize: '1rem',
    color: 'var(--ink-60)',
    maxWidth: '560px',
    lineHeight: 1.75,
    marginBottom: '1.5rem',
  },
  // About section
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '5rem',
    alignItems: 'start',
  },
  aboutLeft: {},
  aboutRight: {
    paddingTop: '1rem',
  },
  quoteCard: {
    backgroundColor: 'var(--forest)',
    borderRadius: '1.25rem',
    padding: '2.5rem',
    marginBottom: '2.5rem',
  },
  quoteText: {
    fontFamily: "'Playfair Display', serif",
    fontStyle: 'italic',
    fontSize: '1.3rem',
    fontWeight: 500,
    color: '#ffffff',
    lineHeight: 1.5,
    marginBottom: '1rem',
  },
  quoteAuthor: {
    fontSize: '0.8rem',
    fontWeight: 500,
    letterSpacing: '0.06em',
    color: 'rgba(255,255,255,0.55)',
  },
  boldText: {
    fontWeight: 700,
    color: 'var(--ink)',
  },
  // Focus section
  focusSection: {
    backgroundColor: 'rgba(12,12,12,0.03)',
    padding: '6rem 0',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
    marginBottom: '3rem',
  },
  card: {
    backgroundColor: 'var(--cream)',
    borderRadius: '1rem',
    padding: '1.75rem',
    border: '1px solid var(--ink-20)',
  },
  cardIcon: {
    width: '2.25rem',
    height: '2.25rem',
    borderRadius: '0.5rem',
    backgroundColor: 'rgba(43,182,115,0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    color: 'var(--emerald)',
  },
  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
    color: 'var(--ink)',
  },
  cardText: {
    fontSize: '0.9rem',
    color: 'var(--ink-60)',
    lineHeight: 1.65,
  },
  quoteBox: {
    backgroundColor: 'rgba(12,12,12,0.04)',
    borderRadius: '1rem',
    padding: '2rem 2.5rem',
    textAlign: 'center',
    border: '1px solid var(--ink-20)',
    marginTop: '1rem',
  },
  quoteBoxText: {
    fontFamily: "'Playfair Display', serif",
    fontStyle: 'italic',
    fontSize: '1.2rem',
    color: 'var(--ink)',
    marginBottom: '1.5rem',
  },
  // Process section
  processSteps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    marginBottom: '4rem',
  },
  stepNumber: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.75rem',
    fontWeight: 300,
    color: 'var(--ink-20)',
    marginBottom: '0.5rem',
  },
  stepTitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: '1.25rem',
    marginBottom: '0.5rem',
    color: 'var(--ink)',
  },
  stepText: {
    fontSize: '0.9rem',
    color: 'var(--ink-60)',
    lineHeight: 1.65,
  },
  handoffCard: {
    backgroundColor: 'rgba(12,12,12,0.03)',
    borderRadius: '1.25rem',
    padding: '2.5rem',
    border: '1px solid var(--ink-20)',
    marginBottom: '3rem',
  },
  handoffTitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: '1.5rem',
    marginBottom: '0.75rem',
    color: 'var(--ink)',
  },
  handoffText: {
    fontSize: '0.95rem',
    color: 'var(--ink-60)',
    lineHeight: 1.75,
    maxWidth: '600px',
  },
  dsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1.25rem',
    marginBottom: '3rem',
  },
  dCard: {
    backgroundColor: 'var(--cream)',
    borderRadius: '1rem',
    padding: '1.5rem',
    border: '1px solid var(--ink-20)',
  },
  dIcon: {
    width: '2rem',
    height: '2rem',
    borderRadius: '0.4rem',
    backgroundColor: 'rgba(15,57,35,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.75rem',
    color: 'var(--forest)',
  },
  dTitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: '1rem',
    marginBottom: '0.4rem',
    color: 'var(--ink)',
  },
  dText: {
    fontSize: '0.82rem',
    color: 'var(--ink-60)',
    lineHeight: 1.6,
  },
  afterCard: {
    backgroundColor: 'rgba(12,12,12,0.03)',
    borderRadius: '1.25rem',
    padding: '2.5rem',
    border: '1px solid var(--ink-20)',
  },
  // Contact section
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '5rem',
    alignItems: 'start',
  },
  formLabel: {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 600,
    letterSpacing: '0.04em',
    marginBottom: '0.5rem',
    color: 'var(--ink)',
  },
  formInput: {
    width: '100%',
    backgroundColor: 'rgba(12,12,12,0.05)',
    border: '1px solid var(--ink-20)',
    borderRadius: '0.625rem',
    padding: '0.75rem 1rem',
    fontSize: '0.95rem',
    color: 'var(--ink)',
    outline: 'none',
    marginBottom: '1.25rem',
    transition: 'border-color 0.2s',
  },
  formTextarea: {
    width: '100%',
    backgroundColor: 'rgba(12,12,12,0.05)',
    border: '1px solid var(--ink-20)',
    borderRadius: '0.625rem',
    padding: '0.75rem 1rem',
    fontSize: '0.95rem',
    color: 'var(--ink)',
    outline: 'none',
    marginBottom: '1.5rem',
    resize: 'vertical',
    minHeight: '120px',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  submitBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'var(--ink)',
    color: 'var(--cream)',
    border: 'none',
    borderRadius: '999px',
    padding: '0.875rem 2rem',
    fontSize: '0.95rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
  whyList: {
    listStyle: 'none',
    marginTop: '1rem',
    marginBottom: '2.5rem',
  },
  whyItem: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
    alignItems: 'flex-start',
  },
  whyDot: {
    width: '1.75rem',
    height: '1.75rem',
    borderRadius: '50%',
    backgroundColor: 'rgba(43,182,115,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    color: 'var(--emerald)',
    marginTop: '0.1rem',
  },
  whyTitle: {
    fontWeight: 600,
    fontSize: '0.95rem',
    marginBottom: '0.2rem',
    color: 'var(--ink)',
  },
  whyText: {
    fontSize: '0.85rem',
    color: 'var(--ink-60)',
    lineHeight: 1.6,
  },
  contactMeta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  contactMetaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '0.9rem',
    color: 'var(--ink)',
  },
  contactMetaLabel: {
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--ink-60)',
    marginBottom: '0.2rem',
  },
  // Footer
  footer: {
    borderTop: '1px solid var(--ink-20)',
    padding: '3rem 0',
  },
  footerInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  footerLeft: {},
  footerLogo: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: '1.1rem',
    color: 'var(--ink)',
    marginBottom: '0.5rem',
  },
  footerTagline: {
    fontSize: '0.85rem',
    color: 'var(--ink-60)',
    maxWidth: '280px',
    lineHeight: 1.6,
  },
  footerRight: {
    textAlign: 'right',
  },
  footerLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    marginBottom: '2rem',
    justifyContent: 'flex-end',
  },
  footerLink: {
    fontSize: '0.85rem',
    color: 'var(--ink)',
    textDecoration: 'none',
    opacity: 0.7,
  },
  footerCopy: {
    fontSize: '0.8rem',
    color: 'var(--ink-60)',
    marginBottom: '0.25rem',
  },
  footerLegal: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'flex-end',
  },
  footerLegalLink: {
    fontSize: '0.75rem',
    color: 'var(--ink-60)',
    textDecoration: 'none',
  },
  // Mobile menu
  mobileMenu: {
    display: 'none',
  },
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={styles.nav}>
      <div style={styles.navInner}>
        <a href="#" style={styles.navLogo}>Reivax Partners</a>

        {/* Desktop links */}
        <ul style={{ ...styles.navLinks, display: 'flex' }} className="desktop-nav">
          <li><a href="#about" style={styles.navLink}>About</a></li>
          <li><a href="#focus" style={styles.navLink}>Our Focus</a></li>
          <li><a href="#owners" style={styles.navLink}>Process</a></li>
        </ul>

        <a href="#contact" style={styles.navCTA} className="desktop-nav">Contact</a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}
          className="mobile-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          backgroundColor: 'var(--cream)',
          borderTop: '1px solid var(--ink-20)',
          padding: '1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}>
          <a href="#about" style={{ ...styles.navLink, opacity: 1, fontSize: '1rem' }} onClick={() => setOpen(false)}>About</a>
          <a href="#focus" style={{ ...styles.navLink, opacity: 1, fontSize: '1rem' }} onClick={() => setOpen(false)}>Our Focus</a>
          <a href="#owners" style={{ ...styles.navLink, opacity: 1, fontSize: '1rem' }} onClick={() => setOpen(false)}>Process</a>
          <a href="#contact" style={{ ...styles.navCTA, textAlign: 'center' }} onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <h1 style={styles.heroHeading}>
          A long-term home<br />for your life's work.
        </h1>
        <p style={styles.heroSubtitle}>
          We buy established service businesses, pay a fair price, and hold them forever. No corporate playbooks, no nonsense, no aggressive flips.
        </p>
        <div style={styles.heroBottom}>
          <a href="#contact" style={styles.heroCTA}>
            Tell us about your business <ArrowRight size={18} />
          </a>
          <div style={styles.heroBadge}>
            <span style={styles.heroBadgeLabel}>The Anti-Private Equity</span>
            <span style={styles.heroBadgeSub}>St. Louis Based • Founder Friendly</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" style={{ ...styles.section, borderTop: '1px solid var(--ink-20)' }}>
      <div style={styles.container}>
        <div style={styles.aboutGrid}>
          <div style={styles.aboutLeft}>
            <h2 style={{ ...styles.sectionHeading, fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1.5rem' }}>
              We buy great businesses and keep them great.
            </h2>
            <p style={{ ...styles.sectionSub, marginBottom: '1rem' }}>
              Most buyers look at a business like a spreadsheet. They want to cut costs, squeeze margins, and flip it in three years.
            </p>
            <p style={{ ...styles.sectionSub, marginBottom: '1rem', fontWeight: 700, color: 'var(--ink)' }}>
              We aren't those people.
            </p>
            <p style={{ ...styles.sectionSub, marginBottom: '1rem' }}>
              Reivax Partners was built for founders who care about their employees and their reputation. We buy one business at a time and operate it with a focus on decades, not quarters.
            </p>
            <p style={{ ...styles.sectionSub, marginBottom: 0 }}>
              Led by a practicing physician and systems-thinker, we bring the same analytical rigor and long-term care to business that we do to patient protocols.
            </p>
          </div>

          <div style={styles.aboutRight}>
            <div style={styles.quoteCard}>
              <p style={styles.quoteText}>
                "Our promise is simple: We will treat your business like it's our own."
              </p>
              <p style={styles.quoteAuthor}>— Reivax Mission</p>
            </div>

            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--ink)' }}>
              Built for the Long Term
            </h3>
            <p style={{ ...styles.sectionSub, fontSize: '0.9rem', marginBottom: '1rem' }}>
              Most sellers worry about the same things: Will a buyer over-optimize and break what works? Will they over-leverage the business to make the numbers work? Will they actually hold it—or flip it despite promises?
            </p>
            <p style={{ ...styles.sectionSub, fontSize: '0.9rem', marginBottom: '1rem' }}>
              Our background answers those questions. We're led by a practicing physician—not as a credential to wave around, but because it explains how we operate. We have established income, so we're not dependent on any single deal. We're trained to be conservative and systematic. We think in decades, not quarters. And we're local—rooted in St. Louis, accountable long after closing.
            </p>
            <p style={{ ...styles.sectionSub, fontSize: '0.9rem', marginBottom: '1rem' }}>
              We approach acquisitions the same way we approach patient care: preserve what works, make changes carefully based on evidence, and prioritize long-term outcomes over short-term metrics.
            </p>
            <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--ink)' }}>
              No experiments. No stripping. Just steady, sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const focusItems = [
  {
    icon: <RefreshCw size={16} />,
    title: 'Recurring revenue',
    text: 'Most of your revenue comes from retainers, contracts, or subscriptions.',
  },
  {
    icon: <Building2 size={16} />,
    title: 'B2B, not B2C',
    text: "You're an essential partner to other businesses, not a consumer brand.",
  },
  {
    icon: <TrendingUp size={16} />,
    title: 'Healthy, steady profits',
    text: '$300K–$700K in EBITDA, with particular interest in the $400K–$600K range.',
  },
  {
    icon: <Users size={16} />,
    title: 'A real management bench',
    text: 'A general manager or strong number two already running the day-to-day.',
  },
  {
    icon: <Award size={16} />,
    title: 'Established track record',
    text: 'Typically 10+ years in business with a proven history.',
  },
  {
    icon: <Heart size={16} />,
    title: 'A team you care about',
    text: 'People who have been with you for years, and customers who stick around.',
  },
]

function Focus() {
  return (
    <section id="focus" style={{ ...styles.focusSection }}>
      <div style={styles.container}>
        <p style={styles.sectionLabel}>What we look for</p>
        <h2 style={{ ...styles.sectionHeading, marginBottom: '0.75rem' }}>The perfect fit.</h2>
        <p style={{ ...styles.sectionSub, marginBottom: '3rem' }}>
          We focus on high-retention B2B service industries where clients rely on your team every month.
        </p>

        <div style={styles.cardGrid}>
          {focusItems.map((item) => (
            <div key={item.title} style={styles.card}>
              <div style={styles.cardIcon}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>

        <div style={styles.quoteBox}>
          <p style={styles.quoteBoxText}>
            "If this sounds like your company, we'd love to talk."
          </p>
          <a href="#contact" style={styles.heroCTA}>
            Start a confidential conversation <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

const dItems = [
  { icon: <EyeOff size={14} />, title: 'Discreet', text: 'We keep conversations confidential and never shop your business.' },
  { icon: <Zap size={14} />, title: 'Decisive', text: "If we're a fit, you'll know quickly; if not, we'll tell you clearly." },
  { icon: <Phone size={14} />, title: 'Direct', text: 'Plain-spoken communication, no jargon or games.' },
  { icon: <Wrench size={14} />, title: 'Diligent', text: 'Thorough, but efficient diligence that respects your time.' },
]

function Process() {
  return (
    <section id="owners" style={styles.section}>
      <div style={styles.container}>
        <p style={styles.sectionLabel}>Our Process</p>
        <h2 style={{ ...styles.sectionHeading, marginBottom: '3rem' }}>Simple, fast, and respectful.</h2>

        <div style={styles.processSteps}>
          {[
            { num: '01', title: 'Chat', text: "A 30-minute confidential call to see if there's a fit." },
            { num: '02', title: 'Offer', text: 'A simple, one-page offer with clear terms and fair value.' },
            { num: '03', title: 'Close', text: 'We target 60 days from LOI to close, though complex situations may take 90 days.' },
          ].map((step) => (
            <div key={step.num} style={{ borderTop: '2px solid var(--ink-20)', paddingTop: '1.5rem' }}>
              <p style={styles.stepNumber}>{step.num}</p>
              <h3 style={styles.stepTitle}>{step.title}</h3>
              <p style={styles.stepText}>{step.text}</p>
            </div>
          ))}
        </div>

        <div style={styles.handoffCard}>
          <h3 style={styles.handoffTitle}>A low-stress handoff</h3>
          <p style={styles.handoffText}>
            Selling your life's work is emotional. We get that. We prioritize a seamless transition that honors your existing team and protects the reputation you spent decades building.
          </p>
        </div>

        <div style={styles.dsGrid}>
          {dItems.map((d) => (
            <div key={d.title} style={styles.dCard}>
              <div style={styles.dIcon}>{d.icon}</div>
              <h4 style={styles.dTitle}>{d.title}</h4>
              <p style={styles.dText}>{d.text}</p>
            </div>
          ))}
        </div>

        <div style={styles.afterCard}>
          <h3 style={styles.handoffTitle}>After closing</h3>
          <p style={styles.handoffText}>
            Your GM stays in charge of operations. We provide strategic support and financial management while staying out of day-to-day execution. Most sellers transition out over 3-6 months with consulting agreements. The business keeps its name, brand, and culture.
          </p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', industry: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" style={{ ...styles.section, backgroundColor: 'rgba(12,12,12,0.02)', borderTop: '1px solid var(--ink-20)' }}>
      <div style={styles.container}>
        <h2 style={{ ...styles.sectionHeading, fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.5rem' }}>
          Let's talk.
        </h2>
        <p style={{ ...styles.sectionSub, marginBottom: '3rem' }}>
          We respond to every inquiry within 24 hours. Entirely confidential, no strings attached.
        </p>

        <div style={styles.contactGrid}>
          <div>
            {submitted ? (
              <div style={{
                backgroundColor: 'rgba(43,182,115,0.1)',
                border: '1px solid var(--emerald)',
                borderRadius: '1rem',
                padding: '2rem',
                textAlign: 'center',
              }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, marginBottom: '0.5rem' }}>
                  Message sent.
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--ink-60)' }}>
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label style={styles.formLabel}>Name</label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  style={styles.formInput}
                  required
                />

                <label style={styles.formLabel}>Email</label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  style={styles.formInput}
                  required
                />

                <div style={styles.formRow}>
                  <div>
                    <label style={styles.formLabel}>
                      Company Name <span style={{ fontWeight: 400, opacity: 0.6 }}>(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      style={styles.formInput}
                    />
                  </div>
                  <div>
                    <label style={styles.formLabel}>Industry</label>
                    <input
                      type="text"
                      placeholder=""
                      value={form.industry}
                      onChange={e => setForm({ ...form, industry: e.target.value })}
                      style={styles.formInput}
                    />
                  </div>
                </div>

                <label style={styles.formLabel}>Message</label>
                <textarea
                  placeholder="Tell us briefly about your business and goals..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={styles.formTextarea}
                />

                <button type="submit" style={styles.submitBtn}>
                  Send Message <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--ink)' }}>
              Why reach out?
            </h3>

            <ul style={styles.whyList}>
              {[
                { icon: <EyeOff size={13} />, title: 'Total Privacy', text: 'Your employees and competitors will never know we spoke.' },
                { icon: <Zap size={13} />, title: 'Speed', text: "We don't waste time. You'll get a 'yes' or 'no' quickly." },
                { icon: <Phone size={13} />, title: 'Direct Access', text: "You're talking to the principal, not a broker or junior analyst." },
              ].map((item) => (
                <li key={item.title} style={styles.whyItem}>
                  <div style={styles.whyDot}>{item.icon}</div>
                  <div>
                    <p style={styles.whyTitle}>{item.title}</p>
                    <p style={styles.whyText}>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div style={styles.contactMeta}>
              <div>
                <p style={styles.contactMetaLabel}>Email</p>
                <a href="mailto:contact@reivaxpartners.com" style={{ ...styles.contactMetaItem, textDecoration: 'none', color: 'var(--ink)', fontWeight: 500 }}>
                  <Mail size={16} /> contact@reivaxpartners.com
                </a>
              </div>
              <div>
                <p style={styles.contactMetaLabel}>Headquarters</p>
                <p style={{ ...styles.contactMetaItem, fontWeight: 500 }}>
                  <MapPin size={16} /> St. Louis, MO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerInner}>
        <div style={styles.footerLeft}>
          <p style={styles.footerLogo}>Reivax Partners</p>
          <p style={styles.footerTagline}>
            Building a forever home for world-class service businesses.
          </p>
        </div>
        <div style={styles.footerRight}>
          <ul style={styles.footerLinks}>
            <li><a href="#about" style={styles.footerLink}>About</a></li>
            <li><a href="#focus" style={styles.footerLink}>Focus</a></li>
            <li><a href="#contact" style={styles.footerLink}>Contact</a></li>
          </ul>
          <p style={styles.footerCopy}>© 2026 Reivax Partners LLC. St. Louis, MO.</p>
          <div style={styles.footerLegal}>
            <a href="#" style={styles.footerLegalLink}>Privacy Policy</a>
            <a href="#" style={styles.footerLegalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Focus />
        <Process />
        <Contact />
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }

          h1 { font-size: 3rem !important; }

          .about-grid,
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          .card-grid {
            grid-template-columns: 1fr !important;
          }

          .process-steps {
            grid-template-columns: 1fr !important;
          }

          .ds-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
